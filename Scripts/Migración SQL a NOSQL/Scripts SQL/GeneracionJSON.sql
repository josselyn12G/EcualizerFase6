-- =========================================================
--       - Adrián Freire
--       - Josselyn Guevara
--       - Anthony Llanos
-- Fecha: 4 de Mayo del 2026
-- =========================================================
-- =====================================================================================
-- SCRIPT DE EXTRACCIN MASIVA DE DATOS RELACIONALES (SQL SERVER) A FORMATO DOCUMENTAL (JSON)
-- PROYECTO INTEGRADOR: PLATAFORMA DE STREAMING "ECUALIZER"
-- =====================================================================================
-- Este archivo extrae datos relacionales de SQL Server y los transforma en documentos JSON listos para almacenar en una base NoSQL.

-- -------------------------------------------------------------------------------------
-- 1. COLECCIÓN: Albums
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado
DECLARE @jsonAlbums NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonAlbums = (
    -- Selecciona los atributos principales del álbum que formarán cada documento JSON
    SELECT 
        a.idAlbum AS [albumId],                          -- Identificador único del álbum
        a.tituloAlbum AS [tituloAlbum],                  -- Nombre o título del álbum
        -- Convierte la fecha de lanzamiento al formato YYYY-MM-DD para facilitar la migración a MongoDB
        CONVERT(VARCHAR(10), a.fechaLanzamientoAlbum, 120) AS [fechaLanzamiento],
        a.descripcionAlbum AS [descripcionAlbum],        -- Descripción del álbum
        a.estadoAlbum AS [estadoAlbum],                  -- Estado del álbum (activo, inactivo, etc.)
        a.Artista_idUsuario AS [artistaId],              -- Identificador del artista propietario del álbum
        -- Se incorpora el nombre artístico directamente en el documento para reducir consultas posteriores
        art.nombreArtistico AS [nombreArtistico],
        -- Se genera un subdocumento embebido con la información del tipo de álbum
        JSON_QUERY((
            -- Obtiene la información relacionada del tipo de álbum
            SELECT 
                ta.nombreTipo,                           -- Nombre del tipo de álbum
                ta.descripcionTipo                       -- Descripción del tipo de álbum
            FROM Catalogo.TipoAlbum ta
            -- Relaciona el álbum con su tipo correspondiente
            WHERE ta.idTipoAlbum = a.TipoAlbum_idTipoAlbum
            -- Genera un único objeto JSON en lugar de un arreglo
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
        )) AS [tipoAlbum]
    -- Tabla principal desde donde se obtienen los álbumes
    FROM Catalogo.Album a
    -- Unión con la tabla de artistas para recuperar el nombre artístico asociado
    LEFT JOIN Usuario.Artista art 
        ON a.Artista_idUsuario = art.idUsuario
    -- Convierte todas las filas seleccionadas en un arreglo JSON
    FOR JSON PATH
);
-- Muestra el JSON generado
-- FOR XML PATH('') evita que SQL Server trunque el resultado cuando es muy grande
-- y permite visualizar o exportar el contenido completo del JSON
SELECT @jsonAlbums AS [JSON_Albums] FOR XML PATH('');


-- -------------------------------------------------------------------------------------
-- 2. COLECCIÓN: Cancion
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las canciones
DECLARE @jsonCancion NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonCancion = (
    -- Selecciona los atributos principales de la canción que formarán cada documento JSON
    SELECT 
        c.idCancion AS [cancionId],                          -- Identificador único de la canción
        c.nombreCancion AS [tituloCancion],                  -- Nombre de la canción
        c.duracion AS [duracion],                            -- Duración de la pista
        CONVERT(VARCHAR(10), c.fechaLanzamiento, 120) AS [fechaLanzamiento], -- Fecha de lanzamiento formateada
        c.estadoCancion AS [estadoCancion],                  -- Estado actual de la canción
        c.calidadKbps AS [calidadKbps],                      -- Calidad de audio de la canción
        c.totalReproducciones AS [totalReproducciones],      -- Número total de reproducciones
        c.letraCancion AS [letraCancion],                    -- Texto de la letra de la canción
        c.Album_idAlbum AS [albumId],                        -- Identificador del álbum asociado
        c.numeroPista AS [numeroPista],                      -- Número de pista dentro del álbum
        
        -- Subset Pattern: Construcción del Array de objetos para los géneros musicales asociados
        (SELECT gm.nombreGenero, '' AS [descripcionGenero] -- Se obtiene el nombre del género musical asociado a la canción, se deja un campo de descripción vacío para compatibilidad estructural con Hackolade
         FROM Catalogo.CancionGeneroMusical cgm -- Tabla intermedia que relaciona canciones con géneros musicales
         JOIN Catalogo.GeneroMusical gm ON cgm.GeneroMusical_idGeneroMusical = gm.idGeneroMusical -- Unión para obtener el nombre del género musical asociado a cada canción
         WHERE cgm.Cancion_idCancion = c.idCancion -- Filtro para obtener solo los géneros relacionados con la canción actual
         FOR JSON PATH) AS [generos], -- Se genera un arreglo JSON con los géneros musicales asociados a la canción
         
        -- Extended Reference: Array de los artistas que participan o colaboran en la pista
        (SELECT art.idUsuario AS [artistaId], art.nombreArtistico -- Se obtiene el ID y el nombre artístico del artista colaborador
         FROM Usuario.Artista art -- Tabla de artistas para obtener la información del colaborador
         JOIN Catalogo.Album al ON c.Album_idAlbum = al.idAlbum -- Unión para relacionar la canción con su álbum y a su vez con el artista propietario del álbum
         WHERE al.Artista_idUsuario = art.idUsuario --  Filtro para obtener solo los artistas relacionados con la canción a través del álbum
         FOR JSON PATH) AS [artistas] -- Se genera un arreglo JSON con los artistas colaboradores asociados a la canción
    FROM Catalogo.Cancion c -- Tabla principal desde donde se obtienen las canciones
    FOR JSON PATH
);
SELECT @jsonCancion AS [JSON_Cancion] FOR XML PATH(''); -- Muestra el JSON generado para las canciones


-- -------------------------------------------------------------------------------------
-- 3. COLECCIÓN: ContratosDiscograficos
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los contratos discográficos
DECLARE @jsonContratos NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonContratos = (
    -- Selecciona los atributos principales del contrato que formarán cada documento JSON
    SELECT 
        cd.idContrato AS [contratoId],                          -- Identificador único del contrato
        CONVERT(VARCHAR(10), cd.fechaInicio, 120) AS [fechaInicio], -- Fecha de inicio del contrato
        CONVERT(VARCHAR(10), cd.fechaFin, 120) AS [fechaFin],       -- Fecha de fin del contrato
        cd.porcentajeArtista AS [porcentajeArtista],            -- Porcentaje asignado al artista
        cd.porcentajeDiscografica AS [porcentajeDiscografica],  -- Porcentaje asignado a la discográfica
        cd.estadoContrato AS [estadoContrato],                  -- Estado legal del contrato
        
        -- Embedding Document: Snapshot de la discográfica firmante del contrato
        JSON_QUERY((
            SELECT cd.Discografica_idDiscografica AS [discograficaId], d.nombreDiscografica AS [discograficaNombre] -- Se obtiene el ID y el nombre de la discográfica asociada al contrato
            FROM Industria.Discografica d WHERE d.idDiscografica = cd.Discografica_idDiscografica -- Relación directa para obtener el nombre de la discográfica asociada al contrato
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER -- Genera un único objeto JSON en lugar de un arreglo
        )) AS [discograficaAsociada],
        
        -- Embedding Document: Snapshot del artista vinculado al acuerdo legal
        JSON_QUERY((
            SELECT cd.Artista_idUsuario AS [artistaId], a.nombreArtistico -- Se obtiene el ID y el nombre artístico del artista asociado al contrato
            FROM Usuario.Artista a WHERE a.idUsuario = cd.Artista_idUsuario -- Relación directa para obtener el nombre del artista asociado al contrato
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER -- Genera un único objeto JSON en lugar de un arreglo
        )) AS [artistaAsociado] -- Se incluye un subdocumento embebido con la información del artista asociado al contrato para evitar consultas adicionales en MongoDB
    FROM Industria.ContratoDiscografica cd -- Tabla principal desde donde se obtienen los contratos discográficos
    FOR JSON PATH -- Convierte todas las filas seleccionadas en un arreglo JSON optimizado para lecturas en MongoDB
);
SELECT @jsonContratos AS [JSON_ContratosDiscograficos] FOR XML PATH(''); -- Muestra el JSON generado para los contratos discográficos


-- -------------------------------------------------------------------------------------
-- 4. COLECCIÓN: Discograficas
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las discográficas
DECLARE @jsonDiscograficas NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonDiscograficas = (
    -- Selecciona los atributos principales de la discográfica que formarán cada documento JSON
    SELECT 
        idDiscografica AS [discograficaId],                  -- Identificador único de la discográfica
        nombreDiscografica AS [nombreDiscografica],          -- Nombre de la discográfica
        paisOrigen AS [paisOrigen],                          -- País de origen de la discográfica
        correoContacto AS [correoContacto],                  -- Correo de contacto principal
        telefonoContacto AS [telefonoContacto]               -- Teléfono de contacto principal
    FROM Industria.Discografica
    FOR JSON PATH -- Generacion directa de un catalogo plano optimizado para lecturas
);
SELECT @jsonDiscograficas AS [JSON_Discograficas] FOR XML PATH(''); -- Muestra el JSON generado para las discográficas


-- -------------------------------------------------------------------------------------
-- 5. COLECCIÓN: Likes
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los likes
DECLARE @jsonLikes NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonLikes = (
    -- Selecciona los atributos principales del like que formarán cada documento JSON
    SELECT 
        ROW_NUMBER() OVER(ORDER BY fechaLike) AS [likeId], -- Generación de un identificador temporal incremental
        Usuario_idUsuario AS [usuarioId],                  -- Identificador del usuario que dio like
        Cancion_idCancion AS [cancionId],                  -- Identificador de la canción marcada con like
        CONVERT(VARCHAR(30), fechaLike, 126) + 'Z' AS [fechaLike] -- Fecha del like en formato ISO 8601
    FROM Biblioteca.UsuarioCancionLike
    FOR JSON PATH -- Genera un arreglo JSON con los likes, optimizado para consultas de interacción sin necesidad de joins adicionales en MongoDB
);
SELECT @jsonLikes AS [JSON_Likes] FOR XML PATH(''); -- Muestra el JSON generado para los likes


-- -------------------------------------------------------------------------------------
-- 6. COLECCIÓN: Pagos
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los pagos
DECLARE @jsonPagos NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonPagos = (
    -- Selecciona los atributos principales del pago que formarán cada documento JSON
    SELECT 
        p.idPago AS [pagoId],                                  -- Identificador único del pago
        p.Suscripcion_idSuscripcion AS [suscripcionId],        -- Identificador de la suscripción asociada
        p.monto AS [monto],                                    -- Monto del pago registrado
        CONVERT(VARCHAR(30), p.fechaPago, 126) + 'Z' AS [fechaPago], -- Fecha del pago en formato ISO 8601
        p.metodoPago AS [metodoPago],                          -- Método utilizado para efectuar el pago
        p.resultadoPago AS [resultadoPago],                    -- Resultado del pago procesado
        
        -- Desnormalización: Subdocumento del usuario para acelerar auditorias analíticas sin usar $lookup
        JSON_QUERY((
            SELECT s.Usuario_idUsuario AS [usuarioId], pers.primerNombre, pers.primerApellido  -- Se obtiene el ID, el primer nombre y el primer apellido del usuario asociado a la suscripción vinculada al pago
            FROM Pagos.Suscripcion s  -- Tabla de suscripciones para relacionar el pago con el usuario que realizó la suscripción
            JOIN Usuario.Persona pers ON s.Usuario_idUsuario = pers.idUsuario -- Unión para obtener la información del usuario a través de la suscripción asociada al pago
            WHERE s.idSuscripcion = p.Suscripcion_idSuscripcion -- Filtro para obtener solo el usuario relacionado con el pago a través de la suscripción
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER -- Genera un único objeto JSON en lugar de un arreglo para incluirlo como subdocumento embebido dentro del documento de pago
        )) AS [usuario]
    FROM Pagos.Pago p
    FOR JSON PATH
);
SELECT @jsonPagos AS [JSON_Pagos] FOR XML PATH('');


-- -------------------------------------------------------------------------------------
-- 7. COLECCI�N: Plan
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los planes
DECLARE @jsonPlan NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonPlan = (
    -- Selecciona los atributos principales del plan que formarán cada documento JSON
    SELECT 
        idTipoPlan AS [planId],                  -- Identificador único del plan
        nombrePlan AS [nombrePlan],              -- Nombre del plan de suscripción
        precio AS [precio],                      -- Precio del plan
        duracion AS [duracion],                  -- Duración del plan
        descripcionPlan AS [descripcionPlan]     -- Descripción del plan
    FROM Pagos.TipoPlan
    FOR JSON PATH
);
SELECT @jsonPlan AS [JSON_Plan] FOR XML PATH(''); -- Muestra el JSON generado para los planes de suscripción


-- -------------------------------------------------------------------------------------
-- 8. COLECCIÓN: Playlist
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las playlists
DECLARE @jsonPlaylist NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonPlaylist = (
    -- Selecciona los atributos principales de la playlist que formarán cada documento JSON
    SELECT 
        p.idPlaylist AS [playlistId],
        p.nombrePlaylist AS [nombrePlaylist],
        p.descripcionPlaylist AS [descripcionPlaylist],
        CONVERT(VARCHAR(30), p.fechaCreacion, 126) + 'Z' AS [fechaCreacion],
        p.tipoVisibilidad AS [tipoVisibilidad],
        p.tipoPlaylist AS [tipoPlaylist],
        0 AS [duracionTotal], -- Campo base precalculado inicial requerido por Hackolade
        
        -- Extended Reference Pattern: Array interno que lista las canciones que componen la lista
        (SELECT cp.Cancion_idCancion AS [cancionId], can.nombreCancion  -- Se obtiene el ID y el nombre de cada canción asociada a la playlist a través de la tabla intermedia
         FROM Biblioteca.CancionPlaylist cp -- Tabla intermedia que relaciona canciones con playlists para obtener las canciones asociadas a cada playlist
         JOIN Catalogo.Cancion can ON cp.Cancion_idCancion = can.idCancion  --  Unión para obtener el nombre de la canción a través de su ID
         WHERE cp.Playlist_idPlaylist = p.idPlaylist  -- Filtro para obtener solo las canciones relacionadas con la playlist actual
         FOR JSON PATH) AS [canciones],
         
        -- Array de subdocumentos para registrar el creador y los oyentes colaboradores de la playlist
        (SELECT up.Usuario_idUsuario AS [userId], CONVERT(VARCHAR(30), up.fechaUnion, 126) + 'Z' AS [fechaUnion], up.rolPlaylist -- Se obtiene el ID del usuario colaborador, la fecha en que se unió a la playlist y su rol dentro de la playlist (creador, colaborador, etc.)
         FROM Biblioteca.UsuarioPlaylist up  -- Tabla intermedia que relaciona usuarios con playlists para obtener la información de los colaboradores
         WHERE up.Playlist_idPlaylist = p.idPlaylist  -- Filtro para obtener solo los usuarios relacionados con la playlist actual
         FOR JSON PATH) AS [colaboradores] -- Se genera un arreglo JSON con los colaboradores asociados a la playlist, permitiendo consultas posteriores para identificar al creador y a los colaboradores sin necesidad de joins adicionales en MongoDB
    FROM Biblioteca.Playlist p -- Tabla principal desde donde se obtienen las playlists
    FOR JSON PATH
);
SELECT @jsonPlaylist AS [JSON_Playlist] FOR XML PATH(''); -- Muestra el JSON generado para las playlists


-- -------------------------------------------------------------------------------------
-- 9. COLECCIÓN: Regalias
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las regalías
DECLARE @jsonRegalias NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonRegalias = (
    -- Selecciona los atributos principales de la regalía que formarán cada documento JSON
    SELECT 
        r.idRegalia AS [regaliaId],
        r.Cancion_idCancion AS [cancionId],
        al.Artista_idUsuario AS [artistaId], -- Resuelve la referencia del artista due�o mediante la pista
        NULL AS [contratoId], -- Declarado nulo por compatibilidad estructural con el Hackolade de independientes
        CAST(r.anioPeriodo AS VARCHAR(4)) + '-' + RIGHT('0' + CAST(r.mesPeriodo AS VARCHAR(2)), 2) AS [periodo], -- Construcci�n de cadena YYYY-MM
        r.paisReproduccion AS [paisReproduccion], -- País donde se generó la regalía, útil para análisis geográfico de ingresos
        r.cantidadReproducciones AS [cantidadReproducciones], -- Número de reproducciones que generaron la regalía, clave para análisis de popularidad y correlación con ingresos
        r.montoTotalGenerado AS [montoTotalGenerado], -- Monto total generado por la regalía antes de distribución, importante para análisis financieros y de rentabilidad
        r.montoArtista AS [montoArtista], -- Monto asignado al artista por la regalía, esencial para análisis de ingresos individuales y comparación entre artistas
        r.montoDiscografica AS [montoDiscografica], -- Monto asignado a la discográfica por la regalía, relevante para análisis de ingresos de la industria y comparación entre discográficas
        CONVERT(VARCHAR(10), GETDATE(), 120) AS [fechaCalculo] -- Fecha de cálculo de la regalía, útil para auditorías y análisis temporales de ingresos
    FROM Analitica.Regalia r
    JOIN Catalogo.Cancion ca ON r.Cancion_idCancion = ca.idCancion -- Unión para relacionar la regalía con la canción correspondiente
    JOIN Catalogo.Album al ON ca.Album_idAlbum = al.idAlbum -- Unión para relacionar la canción con su álbum y a su vez con el artista propietario del álbum, permitiendo resolver la referencia del artista de manera eficiente
    FOR JSON PATH
);
SELECT @jsonRegalias AS [JSON_Regalias] FOR XML PATH('');


-- -------------------------------------------------------------------------------------
-- 10. COLECCIÓN: Reproduccion
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las reproducciones
DECLARE @jsonReproduccion NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonReproduccion = (
    -- Selecciona los atributos principales de la reproducción que formarán cada documento JSON
    SELECT 
        idReproduccion AS [reproduccionId],                              -- Identificador único de la reproducción
        Usuario_idUsuario AS [usuarioId],                                -- Identificador del usuario que escuchó la canción
        Cancion_idCancion AS [cancionId],                                -- Identificador de la canción reproducida
        CONVERT(VARCHAR(30), fechaHora, 126) + 'Z' AS [fechaHora],       -- Fecha y hora de reproducción en formato ISO 8601
        pais AS [pais],                                                  -- País desde donde se generó la reproducción
        duracionEscuchada AS [duracionEscuchada],                        -- Tiempo escuchado de la canción
        CASE WHEN fueSaltada = 'S' THEN 1 ELSE 0 END AS [fueSaltada]      -- Indicador de si la canción fue saltada
    FROM Analitica.Reproduccion -- Tabla principal desde donde se obtienen las reproducciones
    FOR JSON PATH
);
SELECT @jsonReproduccion AS [JSON_Reproduccion] FOR XML PATH('');


-- -------------------------------------------------------------------------------------
-- 11. COLECCIÓN: Suscripcion
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de las suscripciones
DECLARE @jsonSuscripcion NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonSuscripcion = (
    -- Selecciona los atributos principales de la suscripción que formarán cada documento JSON
    SELECT 
        s.idSuscripcion AS [suscripcionId], -- Identificador único de la suscripción
        s.Usuario_idUsuario AS [usuarioId], -- Identificador del usuario que posee la suscripción
        CONVERT(VARCHAR(30), s.fechaInicio, 126) + 'Z' AS [fechaInicio], -- Fecha de inicio de la suscripción en formato ISO 8601
        CONVERT(VARCHAR(30), s.fechaFin, 126) + 'Z' AS [fechaFin], -- Fecha de fin de la suscripción en formato ISO 8601
        s.estadoSuscripcion AS [estadoSuscripcion],
        CASE WHEN s.renovacionAutomatica = 'S' THEN 1 ELSE 0 END AS [renovacionAutomatica], -- Indicador de si la suscripción se renueva automáticamente
        
        -- Snapshot Pattern: Embebe los datos del plan para congelar su precio histórico ante cambios futuros
        JSON_QUERY((
            SELECT s.TipoPlan_idTipoPlan AS [planId], tp.nombrePlan, tp.precio  -- Se obtiene el ID, el nombre y el precio del plan asociado a la suscripción para incluirlo como subdocumento embebido dentro del documento de suscripción, permitiendo conservar el precio histórico en caso de cambios futuros en el plan
            FROM Pagos.TipoPlan tp WHERE tp.idTipoPlan = s.TipoPlan_idTipoPlan  -- Relación directa para obtener la información del plan asociado a la suscripción
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
        )) AS [plan]
    FROM Pagos.Suscripcion s
    FOR JSON PATH
);
SELECT @jsonSuscripcion AS [JSON_Suscripcion] FOR XML PATH(''); -- Muestra el JSON generado para las suscripciones


-- -------------------------------------------------------------------------------------
-- 12. COLECCIÓN: Usuarios (Single Collection Pattern Polimórfico)
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los usuarios
DECLARE @jsonUsuarios NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonUsuarios = (
    -- Selecciona los atributos principales del usuario que formarán cada documento JSON
    SELECT 
        p.idUsuario AS [usuarioId], -- Identificador único del usuario
        p.cedulaUsuario AS [cedulaUsuario], -- Número de cédula o identificación del usuario, útil para validaciones y auditorías
        p.primerNombre AS [primerNombre], -- Primer nombre del usuario, importante para personalización y comunicación
        p.segundoNombre AS [segundoNombre], -- Segundo nombre del usuario, útil para personalización y comunicación
        p.primerApellido AS [primerApellido],
        p.segundoApellido AS [segundoApellido],
        p.correo AS [correo],
        p.contrasena AS [contrasena],
        CONVERT(VARCHAR(30), p.fechaRegistro, 126) + 'Z' AS [fechaRegistro],
        p.estado AS [estado],
        
        -- Discriminador de Rol para identificar la naturaleza del documento en Mongo
        (CASE 
            WHEN EXISTS(SELECT 1 FROM Usuario.Usuario WHERE idUsuario = p.idUsuario) THEN 'oyente'
            WHEN EXISTS(SELECT 1 FROM Usuario.Artista WHERE idUsuario = p.idUsuario) THEN 'artista'
            WHEN EXISTS(SELECT 1 FROM Usuario.Administrador WHERE idUsuario = p.idUsuario) THEN 'admin'
         END) AS [tipoUsuario],
         
        -- Mutua Exclusión: Mapeo polimórfico mediante subdocumentos embebidos condicionales
        JSON_QUERY((SELECT alias, paisUsuario, CONVERT(VARCHAR(10), fechaNacimiento, 120) AS fechaNacimiento, genero, JSON_QUERY('[]') AS artistasSeguidos FROM Usuario.Usuario WHERE idUsuario = p.idUsuario FOR JSON PATH, WITHOUT_ARRAY_WRAPPER)) AS [perfilOyente],
        JSON_QUERY((SELECT nombreArtistico, biografia FROM Usuario.Artista WHERE idUsuario = p.idUsuario FOR JSON PATH, WITHOUT_ARRAY_WRAPPER)) AS [perfilArtista],
        JSON_QUERY((SELECT rolAdmin, departamento FROM Usuario.Administrador WHERE idUsuario = p.idUsuario FOR JSON PATH, WITHOUT_ARRAY_WRAPPER)) AS [perfilAdmin]
    FROM Usuario.Persona p
    FOR JSON PATH
);
SELECT @jsonUsuarios AS [JSON_Usuarios] FOR XML PATH('');


-- -------------------------------------------------------------------------------------
-- 13. COLECCIÓN: usuario_album_guardado
-- -------------------------------------------------------------------------------------
-- Se declara una variable de tipo NVARCHAR(MAX) para almacenar el JSON completo generado de los álbumes guardados
DECLARE @jsonAlbumGuardado NVARCHAR(MAX);
-- Se asigna a la variable el resultado de la consulta convertida a formato JSON
SET @jsonAlbumGuardado = (
    -- Selecciona los atributos principales del álbum guardado que formarán cada documento JSON
    SELECT 
        ROW_NUMBER() OVER(ORDER BY fechaGuardado) AS [albumGuardadoId],  -- Generación de un identificador temporal incremental
        Usuario_idUsuario AS [usuarioId], -- Identificador del usuario que guardó el álbum
        Album_idAlbum AS [albumId], -- Identificador del álbum guardado
        (SELECT tituloAlbum FROM Catalogo.Album WHERE idAlbum = ua.Album_idAlbum) AS [tituloAlbum], -- Desnormalización cruzada del álbum
        (SELECT art.nombreArtistico FROM Usuario.Artista art JOIN Catalogo.Album al ON art.idUsuario = al.Artista_idUsuario WHERE al.idAlbum = ua.Album_idAlbum) AS [artistaNombre], -- Desnormalización del creador
        CONVERT(VARCHAR(30), fechaGuardado, 126) + 'Z' AS [fechaGuardado] -- Fecha en que el usuario guardó el álbum, formateada en ISO 8601 para facilitar análisis temporales
    FROM Biblioteca.UsuarioAlbum ua -- Tabla principal desde donde se obtienen los álbumes guardados por los usuarios
    FOR JSON PATH
);
SELECT @jsonAlbumGuardado AS [JSON_usuario_album_guardado] FOR XML PATH(''); -- Muestra el JSON generado para los álbumes guardados por los usuarios