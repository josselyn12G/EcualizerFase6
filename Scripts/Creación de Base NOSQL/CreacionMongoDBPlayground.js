use("Ecualizer");

// =====================================================================
// CREACIÓN DE BASE DE DATOS - MONGO DB PLAYGROUND
// =====================================================================

// Crear la colección "Usuarios" con su respectivo esquema de validación y los índices necesarios para garantizar la unicidad de ciertos campos y optimizar las consultas. La colección "Usuarios" es fundamental para el funcionamiento de la plataforma Ecualizer, ya que almacena la información de los oyentes, artistas y administradores. El esquema de validación asegura que los datos ingresados cumplan con los requisitos establecidos, mientras que los índices mejoran el rendimiento de las consultas frecuentes, como la búsqueda por correo electrónico o cédula. Este script debe ejecutarse en el entorno de MongoDB Playground para crear la estructura de datos necesaria antes de insertar documentos en la colección.
db.createCollection("Usuarios", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Usuarios",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del documento generado automáticamente por MongoDB (Primary Key)."
                },
                "cedulaUsuario": {
                    "bsonType": "string",
                    "description": "Número de cédula de identidad ciudadana ecuatoriana. Requiere exactamente 10 dígitos numéricos.",
                    "pattern": "^[0-9]{10}$"
                },
                "primerNombre": {
                    "bsonType": "string",
                    "description": "Primer nombre oficial del usuario. Longitud mínima de 2 caracteres para evitar iniciales o datos corruptos.",
                    "minLength": 2
                },
                "segundoNombre": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Segundo nombre del usuario. Admite tipo string si existe o null en caso de no poseerlo."
                },
                "primerApellido": {
                    "bsonType": "string",
                    "description": "Primer apellido (apellido paterno) oficial del usuario. Longitud mínima de 2 caracteres.",
                    "minLength": 2
                },
                "segundoApellido": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Segundo apellido (apellido materno) del usuario. Admite tipo string o valor null si no registra."
                },
                "correo": {
                    "bsonType": "string",
                    "description": "Dirección de correo electrónico del usuario. Debe cumplir con el estándar RFC 5322 y es único en la plataforma.",
                    "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                "contrasena": {
                    "bsonType": "string",
                    "description": "Hash seguro de la credencial de acceso (ej. bcrypt, Argon2). Por seguridad, nunca debe almacenarse en texto plano.",
                    "minLength": 8
                },
                "fechaRegistro": {
                    "bsonType": "date",
                    "description": "Fecha y hora exacta en la que el usuario se registró en el sistema, en formato extendido ISO 8601 UTC."
                },
                "estado": {
                    "bsonType": "string",
                    "description": "Estado actual de la cuenta del usuario para el control de accesos y flujos operativos del sistema.",
                    "enum": [
                        "activo",
                        "inactivo",
                        "suspendido"
                    ]
                },
                "tipoUsuario": {
                    "bsonType": "string",
                    "description": "Atributo discriminador utilizado para la implementación del patrón de diseño NoSQL 'Single Collection Pattern'.",
                    "enum": [
                        "oyente",
                        "artista",
                        "admin"
                    ]
                },
                "perfilOyente": {
                    "bsonType": "object",
                    "description": "Contenedor de datos específicos del perfil de oyente. Requerido obligatoriamente si 'tipoUsuario' es igual a 'oyente'.",
                    "properties": {
                        "alias": {
                            "bsonType": "string",
                            "description": "Nombre de usuario o nickname público visible dentro de la comunidad de la plataforma (máximo 15 caracteres).",
                            "maxLength": 15
                        },
                        "paisUsuario": {
                            "bsonType": "string",
                            "description": "País de residencia actual del oyente (utilizado para geolocalización de contenido y analíticas)."
                        },
                        "fechaNacimiento": {
                            "bsonType": "string",
                            "description": "Fecha de nacimiento del oyente (formato YYYY-MM-DD). La lógica de negocio debe validar una edad mínima de 13 años al registrarse."
                        },
                        "genero": {
                            "bsonType": "string",
                            "description": "Identidad de género declarada por el usuario: F (Femenino), M (Masculino), O (Otro/No binario).",
                            "enum": [
                                "F",
                                "M",
                                "O"
                            ]
                        },
                        "ArtistasSeguidos": {
                            "bsonType": "array",
                            "title": "artistasSeguidos",
                            "description": "Cantidad de artistas seguidos, no supera los 200 artistas por lo que se ha decidido embeberlo.",
                            "additionalItems": true,
                            "items": {
                                "bsonType": "object",
                                "properties": {
                                    "artistaId": {
                                        "bsonType": "objectId",
                                        "description": "Referencia al _id del artista en la colección usuarios."
                                    },
                                    "fechaSeguimiento": {
                                        "bsonType": "string",
                                        "description": "Fecha en la que el oyente comenzó a seguir al artista."
                                    },
                                    "notificacionesActivas": {
                                        "bsonType": "string",
                                        "description": "A = Activas, D = Desactivadas.",
                                        "enum": [
                                            "A",
                                            "D"
                                        ]
                                    },
                                    "nombreArtistico": {
                                        "bsonType": "string",
                                        "description": "Nombre público de la entidad musical o creador. Es único a nivel de plataforma mediante la aplicación de un índice sparse."
                                    }
                                },
                                "additionalProperties": false,
                                "required": [
                                    "artistaId",
                                    "fechaSeguimiento",
                                    "notificacionesActivas",
                                    "nombreArtistico"
                                ]
                            }
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "alias",
                        "fechaNacimiento",
                        "genero"
                    ]
                },
                "perfilArtista": {
                    "bsonType": "object",
                    "description": "Contenedor de datos específicos del perfil de artista. Requerido obligatoriamente si 'tipoUsuario' es igual a 'artista'.",
                    "properties": {
                        "nombreArtistico": {
                            "bsonType": "string",
                            "description": "Nombre público de la entidad musical o creador. Es único a nivel de plataforma mediante la aplicación de un índice sparse."
                        },
                        "biografia": {
                            "bsonType": [
                                "string",
                                "null"
                            ],
                            "description": "Reseña histórica, trayectoria profesional o descripción pública del artista. Permite nulos si está vacía."
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "nombreArtistico"
                    ]
                },
                "perfilAdmin": {
                    "bsonType": "object",
                    "description": "Contenedor de datos de control interno para personal administrativo. Requerido obligatoriamente si 'tipoUsuario' es igual a 'admin'.",
                    "properties": {
                        "rolAdmin": {
                            "bsonType": "string",
                            "description": "Rol específico asignado para determinar los privilegios y permisos basados en roles (RBAC) en el panel de administración.",
                            "enum": [
                                "Administrador general",
                                "Gestion de usuarios",
                                "Moderador de contenido",
                                "Soporte tecnico"
                            ]
                        },
                        "departamento": {
                            "bsonType": "string",
                            "description": "Área u organización corporativa interna a la que pertenece el administrador para fines de auditoría.",
                            "enum": [
                                "Contenido",
                                "Finanzas",
                                "Operaciones",
                                "Soporte",
                                "Tecnologia"
                            ]
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "rolAdmin",
                        "departamento"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "cedulaUsuario",
                "primerNombre",
                "primerApellido",
                "correo",
                "contrasena",
                "fechaRegistro",
                "estado",
                "tipoUsuario"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

// Creación de índices para la colección "Usuarios" para garantizar la unicidad de los campos "correo", "cedulaUsuario" y "perfilArtista.nombreArtistico", así como un índice adicional para optimizar las consultas por estado. Estos índices son esenciales para mantener la integridad de los datos y mejorar el rendimiento de las consultas frecuentes en la plataforma Ecualizer. El índice en "correo" y "cedulaUsuario" asegura que no existan duplicados en estos campos, mientras que el índice sparse en "perfilArtista.nombreArtistico" permite la unicidad solo para los documentos que contienen un perfil de artista, evitando conflictos con otros tipos de usuarios. El índice en "estado" facilita la segmentación y análisis de usuarios según su estado actual.
db.Usuarios.createIndex({
    "correo": 1
},
{
    "name": "idx_correo_unique",
    "unique": true
});
// Índice único para el campo "cedulaUsuario" para garantizar que no existan dos usuarios con la misma cédula de identidad, lo cual es crucial para la autenticación y gestión de cuentas en la plataforma.
db.Usuarios.createIndex({
    "cedulaUsuario": 1
},
{
    "name": "idx_cedula_unique",
    "unique": true
});
// Índice único sparse para el campo "perfilArtista.nombreArtistico" para asegurar que cada nombre artístico registrado en la plataforma sea único, pero solo se aplica a los documentos que contienen un perfil de artista, permitiendo que otros tipos de usuarios no tengan restricciones en este campo.
db.Usuarios.createIndex({
    "perfilArtista.nombreArtistico": 1
},
{
    "name": "idx_nombre_artistico_unique_sparse",
    "unique": true,
    "sparse": true
});
// Índice adicional para el campo "estado" para optimizar las consultas que segmentan a los usuarios según su estado actual (activo, inactivo, suspendido), lo cual es común en análisis de usuarios y gestión de cuentas.
db.Usuarios.createIndex({
    "estado": 1
},
{
    "name": "idx_tipo_estado"
});

// Se crea la colección "Plan" con su esquema de validación y un índice para optimizar las consultas por nombre del plan. Esta colección es esencial para almacenar los diferentes planes de suscripción que los usuarios pueden contratar, incluyendo detalles como el precio, duración y descripción del plan. El esquema de validación asegura que los datos ingresados sean consistentes y cumplan con los requisitos establecidos, mientras que el índice en el campo "nombrePlan" mejora el rendimiento de las consultas frecuentes relacionadas con la búsqueda de planes por su nombre. Este script debe ejecutarse después de crear la colección "Usuarios" para garantizar la integridad referencial entre las colecciones.
db.createCollection("Plan", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Plan",
            "description": "Catalogo pequeño para el administrador ",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "planId": {
                    "bsonType": "objectId",
                    "description": "Referencia al plan original registrado en la colección de planes. Se conserva principalmente con fines de auditoría, trazabilidad y análisis histórico."
                },
                "nombrePlan": {
                    "bsonType": "string",
                    "description": "Nombre comercial del plan contratado por el usuario, por ejemplo: Premium Individual, Premium Familiar o Premium Estudiante."
                },
                "precio": {
                    "bsonType": "number",
                    "description": "Valor monetario exacto que tenía el plan al momento de la contratación. Este importe se conserva como evidencia histórica y contractual, incluso si el precio oficial cambia posteriormente.",
                    "minimum": 0
                },
                "duracion": {
                    "bsonType": "string",
                    "description": "Período de vigencia del plan contratado. Determina la frecuencia con la que se realizan los procesos de renovación y facturación.",
                    "enum": [
                        "Mensual",
                        "Anual"
                    ]
                },
                "descripcionPlan": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Descripción detallada de las características, beneficios o condiciones del plan en el momento en que fue adquirido por el usuario."
                }
            },
            "additionalProperties": false,
            "required": [
                "planId",
                "nombrePlan",
                "precio",
                "duracion"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Plan.createIndex({
    "nombrePlan": 1
},
{
    "name": "idx_nombrePlan"
});

// Creación de la colección "Suscripcion" con su esquema de validación y un índice para optimizar las consultas por fecha de finalización. Esta colección es crucial para gestionar las suscripciones de los usuarios a los diferentes planes premium de la plataforma, almacenando tanto el estado actual de la membresía como una copia histórica del plan contratado. El esquema de validación asegura que los datos ingresados sean consistentes y cumplan con los requisitos establecidos, mientras que el índice en el campo "fechaFin" mejora el rendimiento de las consultas relacionadas con la renovación y expiración de las suscripciones. Este script debe ejecutarse después de crear la colección "Plan" para garantizar la integridad referencial entre las colecciones.
db.createCollection("Suscripcion", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Suscripcion",
            "description": "Colección encargada de gestionar las suscripciones de los usuarios a los diferentes planes premium de la plataforma. Cada documento representa un contrato de suscripción y almacena tanto el estado actual de la membresía como una copia histórica del plan contratado. Esta estrategia permite preservar la información original de la contratación incluso cuando las características o precios de los planes cambien en el futuro.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "suscripcionId": {
                    "bsonType": "objectId",
                    "description": "Identificador único de la suscripción dentro de la colección. Es generado automáticamente por MongoDB y permite identificar de forma inequívoca cada contrato de suscripción."
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Referencia al usuario propietario de la suscripción. Establece la relación entre la membresía contratada y el usuario registrado en la plataforma."
                },
                "fechaInicio": {
                    "bsonType": "date",
                    "description": "Fecha y hora en que la suscripción fue activada. Se utiliza para calcular períodos de facturación, renovaciones y antigüedad de la membresía."
                },
                "fechaFin": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Fecha y hora de finalización de la suscripción. Puede permanecer en null cuando la membresía cuenta con renovación automática activa o cuando aún no se ha definido una fecha de expiración."
                },
                "estadoSuscripcion": {
                    "bsonType": "string",
                    "description": "Estado actual de la suscripción dentro del sistema. 'activa' indica que el usuario posee acceso vigente a los beneficios premium; 'cancelada' representa una suscripción finalizada por decisión del usuario o del sistema; 'inactiva' corresponde a una membresía temporalmente suspendida o vencida.",
                    "enum": [
                        "activa",
                        "cancelada",
                        "inactiva"
                    ]
                },
                "renovacionAutomatica": {
                    "bsonType": "bool",
                    "description": "Indica si la suscripción debe renovarse automáticamente al finalizar su período de vigencia. Un valor true habilita la renovación automática, mientras que false requiere una renovación manual por parte del usuario."
                },
                "plan": {
                    "bsonType": "object",
                    "description": "Documento embebido que almacena una copia histórica del plan contratado en el momento de la suscripción. Esta estrategia garantiza la conservación de las condiciones comerciales originales, evitando inconsistencias si el plan cambia posteriormente de precio, duración o características.",
                    "properties": {
                        "planId": {
                            "bsonType": "objectId",
                            "description": "Referencia al plan original registrado en la colección de planes. Se conserva principalmente con fines de auditoría, trazabilidad y análisis histórico."
                        },
                        "nombrePlan": {
                            "bsonType": "string",
                            "description": "Nombre comercial del plan contratado por el usuario, por ejemplo: Premium Individual, Premium Familiar o Premium Estudiante."
                        },
                        "precio": {
                            "bsonType": "number",
                            "description": "Valor monetario exacto que tenía el plan al momento de la contratación. Este importe se conserva como evidencia histórica y contractual, incluso si el precio oficial cambia posteriormente.",
                            "minimum": 0
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "planId",
                        "nombrePlan",
                        "precio"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "suscripcionId",
                "usuarioId",
                "fechaInicio",
                "estadoSuscripcion",
                "renovacionAutomatica",
                "plan"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Suscripcion.createIndex({
    "fechaFin": 1
},
{
    "name": "idx_fecha_fin_renovacion"
});

// Creación de la colección "Pagos" con su esquema de validación y los índices necesarios para optimizar las consultas por suscripción, usuario y resultado del pago. Esta colección es fundamental para registrar todas las transacciones económicas realizadas dentro de la plataforma, incluyendo pagos exitosos, fallidos, renovaciones automáticas y reembolsos. El esquema de validación asegura que los datos ingresados sean consistentes y cumplan con los requisitos establecidos, mientras que los índices en "suscripcionId", "usuario.usuarioId" y "resultadoPago" mejoran el rendimiento de las consultas frecuentes relacionadas con el historial financiero de una suscripción, análisis de pagos por usuario y segmentación
db.createCollection("Pagos", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Pagos",
            "description": "Colección encargada de registrar todas las transacciones económicas realizadas dentro de la plataforma. Cada documento representa un evento financiero individual asociado a una suscripción, incluyendo pagos exitosos, pagos fallidos, renovaciones automáticas y reembolsos. Debido a su naturaleza transaccional, esta colección presenta un alto volumen de crecimiento y constituye la fuente principal para procesos de auditoría, facturación y análisis financiero.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "pagoId": {
                    "bsonType": "objectId",
                    "description": "Identificador único de la transacción de pago. Es generado automáticamente por MongoDB y permite rastrear de forma individual cada movimiento financiero registrado en el sistema."
                },
                "suscripcionId": {
                    "bsonType": "objectId",
                    "description": "Referencia a la suscripción que originó la transacción. Permite vincular el pago con el contrato de servicio correspondiente y consultar el historial financiero de una membresía específica."
                },
                "monto": {
                    "bsonType": "number",
                    "description": "Valor monetario procesado durante la transacción. Representa el importe cobrado, reembolsado o pendiente asociado al pago. Debe ser un valor numérico positivo o igual a cero.",
                    "minimum": 0
                },
                "fechaPago": {
                    "bsonType": "date",
                    "description": "Fecha y hora exacta en la que se registró la transacción. Este campo es utilizado para auditorías, generación de reportes financieros, conciliaciones contables y análisis de ingresos."
                },
                "metodoPago": {
                    "bsonType": "string",
                    "description": "Método de pago utilizado por el usuario para realizar la transacción. Los valores permitidos corresponden a los medios de pago oficialmente soportados por la plataforma.",
                    "enum": [
                        "Paypal",
                        "Tarjeta de credito",
                        "Tarjeta de debito"
                    ]
                },
                "resultadoPago": {
                    "bsonType": "string",
                    "description": "Resultado final de la operación financiera. 'Completado' indica que el cobro fue procesado exitosamente; 'Fallido' representa un error o rechazo durante el procesamiento; 'Pendiente' indica que la transacción aún está en validación; y 'Reembolsado' señala que el importe fue devuelto al usuario.",
                    "enum": [
                        "Completado",
                        "Fallido",
                        "Pendiente",
                        "Reembolsado"
                    ]
                },
                "usuario": {
                    "bsonType": "object",
                    "properties": {
                        "usuarioId": {
                            "bsonType": "objectId",
                            "description": "Identificador del usuario propietario de la suscripción. Se almacena de forma desnormalizada para facilitar consultas analíticas, reportes financieros y búsquedas de pagos por usuario sin necesidad de realizar consultas adicionales a la colección de suscripciones."
                        },
                        "primerNombre": {
                            "bsonType": "string",
                            "description": "Primer nombre oficial del usuario. Longitud mínima de 2 caracteres para evitar iniciales o datos corruptos.",
                            "minLength": 2
                        },
                        "primerApellido": {
                            "bsonType": "string",
                            "description": "Primer apellido (apellido paterno) oficial del usuario. Longitud mínima de 2 caracteres.",
                            "minLength": 2
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "usuarioId",
                        "primerNombre",
                        "primerApellido"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "pagoId",
                "suscripcionId",
                "monto",
                "fechaPago",
                "metodoPago",
                "resultadoPago"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Pagos.createIndex({
    "suscripcionId": 1
},
{
    "name": "idx_suscripcionId"
});

db.Pagos.createIndex({},
{
    "name": "idx_usuarioId"
});

db.Pagos.createIndex({
    "resultadoPago": 1
},
{
    "name": "idx_resultadoPago"
});
// Creación de la colección "Albums" con su esquema de validación y los índices necesarios para optimizar las consultas por estado del álbum y título. Esta colección es esencial para almacenar la información de los álbumes musicales publicados por los artistas de la plataforma, incluyendo detalles como el título, fecha de lanzamiento, descripción, estado y clasificación comercial. El esquema de validación asegura que los datos ingresados sean consistentes y cumplan con los requisitos establecidos, mientras que los índices en "estadoAlbum" y "tituloAlbum" mejoran el rendimiento de las consultas frecuentes relacionadas con la búsqueda de álbumes por su estado actual o por su título. Este script debe ejecutarse después de crear la colección "Usuarios" para garantizar la integridad referencial entre las colecciones.
db.createCollection("Albums", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Album",
            "description": "Colección encargada de almacenar los álbumes musicales publicados por los artistas de la plataforma. Cada documento representa un lanzamiento musical (Single, EP o Álbum completo) e incorpora información descriptiva, operativa y de clasificación comercial. El diseño utiliza una combinación de referencias, desnormalización controlada y documentos embebidos para optimizar consultas frecuentes y minimizar operaciones de agregación.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "albumId": {
                    "bsonType": "objectId",
                    "description": "Identificador único generado por MongoDB para cada álbum. Se utiliza como clave primaria del documento y como referencia desde otras colecciones."
                },
                "tituloAlbum": {
                    "bsonType": "string",
                    "description": "Nombre comercial del álbum mostrado a los usuarios dentro de la plataforma.",
                    "maxLength": 40
                },
                "fechaLanzamiento": {
                    "bsonType": "date",
                    "description": "Fecha oficial de publicación del álbum."
                },
                "descripcionAlbum": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Descripción opcional del álbum que puede incluir contexto artístico, información promocional o detalles relevantes del lanzamiento."
                },
                "estadoAlbum": {
                    "bsonType": "string",
                    "description": "Estado lógico del álbum dentro de la plataforma.",
                    "enum": [
                        "activo",
                        "eliminado",
                        "inactivo"
                    ]
                },
                "artistaId": {
                    "bsonType": "objectId",
                    "description": "Referencia al artista propietario del álbum almacenado en la colección usuarios."
                },
                "nombreArtistico": {
                    "bsonType": "string",
                    "description": "Nombre artístico almacenado de forma desnormalizada para mostrar información del álbum sin realizar consultas adicionales."
                },
                "tipoAlbum": {
                    "bsonType": "object",
                    "description": "Clasificación comercial del lanzamiento almacenada mediante embedding debido a que corresponde a un catálogo pequeño y estático.",
                    "properties": {
                        "nombreTipo": {
                            "bsonType": "string",
                            "description": "Categoría comercial del lanzamiento musical.",
                            "enum": [
                                "Single",
                                "EP",
                                "Album"
                            ]
                        },
                        "descripcionTipo": {
                            "bsonType": [
                                "string",
                                "null"
                            ],
                            "description": "Descripción complementaria de la clasificación del álbum."
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "nombreTipo"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "albumId",
                "tituloAlbum",
                "fechaLanzamiento",
                "estadoAlbum",
                "artistaId",
                "tipoAlbum"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Albums.createIndex({
    "estadoAlbum": 1
},
{
    "name": "idx_artista_estado_fecha"
});

db.Albums.createIndex({
    "tituloAlbum": 1
},
{
    "name": "idx_titulo_text"
});


// Creación de la colección "Cancion" con su esquema de validación y los índices necesarios para optimizar las consultas por título de canción. Esta colección es fundamental para almacenar la información de las canciones publicadas en la plataforma, integrando los datos de la entidad Cancion junto con la clasificación musical asociada. El diseño utiliza una combinación de referencias, desnormalización controlada y documentos embebidos para optimizar consultas frecuentes y eliminar dependencias de relaciones intermedias. El índice en el campo "tituloCancion" mejora el rendimiento de las consultas relacionadas con la búsqueda de canciones por su título.
db.createCollection("Cancion", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Cancion",
            "description": "Colección que centraliza la información de las canciones publicadas en la plataforma. Integra los datos de la entidad Cancion junto con la clasificación musical asociada, incorporando los géneros como subdocumentos embebidos para optimizar consultas y eliminar dependencias de relaciones intermedias.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "cancionId": {
                    "bsonType": "objectId",
                    "description": "Identificador único de la canción (cancionId) generado por MongoDB."
                },
                "tituloCancion": {
                    "bsonType": "string",
                    "description": "Nombre o título oficial de la canción."
                },
                "duracion": {
                    "bsonType": "number",
                    "description": "Duración de la canción en segundos o minutos (según la métrica de la plataforma)."
                },
                "fechaLanzamiento": {
                    "bsonType": "date",
                    "description": "Fecha oficial de publicación de la canción. Permite gestionar lanzamientos individuales, estrenos anticipados y análisis cronológicos independientes de la fecha de publicación del álbum."
                },
                "estadoCancion": {
                    "bsonType": "string",
                    "description": "Estado operativo de la canción dentro de la plataforma. Se utiliza para controlar la disponibilidad del contenido, aplicar restricciones administrativas y filtrar registros durante los procesos de consulta.",
                    "enum": [
                        "activa",
                        "bloqueada",
                        "eliminada",
                        "inactiva"
                    ]
                },
                "calidadKbps": {
                    "bsonType": "number",
                    "description": "Tasa de bits utilizada en la codificación del archivo de audio. Determina la calidad de reproducción y el consumo de almacenamiento y ancho de banda.",
                    "enum": [
                        128,
                        192,
                        256,
                        320
                    ]
                },
                "totalReproducciones": {
                    "bsonType": "number",
                    "description": "Métrica acumulativa que registra el número total de reproducciones realizadas por los usuarios. Su actualización se realiza mediante operaciones incrementales para minimizar la sobrecarga de escritura.",
                    "minimum": 0
                },
                "letraCancion": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Contenido textual asociado a la canción. Puede utilizarse para funcionalidades de visualización de letras, búsquedas semánticas y análisis de contenido."
                },
                "albumId": {
                    "bsonType": "objectId",
                    "description": "Identificador de referencia hacia el documento del álbum al que pertenece la canción. Permite reconstruir catálogos musicales y tracklists completos."
                },
                "numeroPista": {
                    "bsonType": "number",
                    "description": "Posición secuencial de la canción dentro del álbum. Facilita la reconstrucción ordenada del tracklist y la navegación estructurada del contenido musical.",
                    "minimum": 1
                },
                "generos": {
                    "bsonType": "array",
                    "description": "Conjunto de géneros musicales asociados a la canción. Almacena de forma desnormalizada el ID y el nombre para acelerar filtros de búsqueda sin requerir Lookups de la colección maestra.",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "nombreGenero": {
                                "bsonType": "string",
                                "description": "Nombre estandarizado del género musical utilizado para la clasificación y segmentación del catálogo."
                            },
                            "descripcionGenero": {
                                "bsonType": "string",
                                "description": "Descripción del género"
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "nombreGenero"
                        ]
                    },
                    "minItems": 1
                },
                "artistas": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "artistaId": {
                                "bsonType": "objectId",
                                "description": "Identificador del artista principal asociado a la canción. Se almacena de forma directa para optimizar consultas por artista y reducir la necesidad de operaciones de agregación o búsqueda encadenada."
                            },
                            "nombreArtistico": {
                                "bsonType": "string",
                                "description": "Nombre público de la entidad musical o creador. Es único a nivel de plataforma mediante la aplicación de un índice sparse."
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": true,
            "required": [
                "cancionId",
                "tituloCancion",
                "duracion",
                "fechaLanzamiento",
                "estadoCancion",
                "calidadKbps",
                "totalReproducciones",
                "generos"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Cancion.createIndex({
    "tituloCancion": 1
},
{
    "name": "idx_tituloCancion",
    "unique": true
});

// Creación de la colección "Reproduccion" con su esquema de validación y los índices necesarios para optimizar las consultas por canción, usuario y país. Esta colección es fundamental para almacenar los eventos de reproducción de música realizados por los usuarios, implementando un modelo inmutable de tipo solo-append. Cada documento representa una escucha individual y contiene información detallada sobre el evento, incluyendo referencias a la canción reproducida, el usuario que realizó la acción, la fecha y hora del evento, el país de origen, la duración escuchada y si la canción fue saltada. El diseño como Time Series Collection permite manejar eficientemente el alto volumen transaccional generado por las reproducciones, facilitando consultas analíticas basadas en la dimensión temporal.
db.createCollection("Reproduccion", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Reproduccion",
            "description": "Colección orientada al almacenamiento de eventos de reproducción de música. Implementa un modelo inmutable de tipo solo-append, donde cada documento representa una escucha individual realizada por un usuario. Corresponde a la tabla Reproduccion del modelo relacional y constituye la colección con mayor volumen transaccional de la plataforma. Debido a su naturaleza temporal y alto crecimiento, es una candidata ideal para implementarse como MongoDB Time Series Collection.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "reproduccionId": {
                    "bsonType": "objectId",
                    "description": "Id de cada reproducción"
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Identificador del usuario que realizó la reproducción. Referencia lógica al documento correspondiente dentro de la colección usuarios."
                },
                "cancionId": {
                    "bsonType": "objectId",
                    "description": "Identificador de la canción reproducida. Referencia lógica al documento almacenado en la colección canciones."
                },
                "fechaHora": {
                    "bsonType": "date",
                    "description": "Fecha y hora exacta en que se produjo la reproducción. Este campo representa la dimensión temporal principal del evento y actúa como timeField cuando se implementa la colección como Time Series Collection."
                },
                "pais": {
                    "bsonType": "string",
                    "description": "País desde el cual se realizó la reproducción. Esta información es fundamental para análisis geográficos, segmentación de audiencias y cálculo de regalías según la región de consumo."
                },
                "duracionEscuchada": {
                    "bsonType": "number",
                    "description": "Cantidad de segundos efectivamente escuchados por el usuario durante la reproducción. Debe ser un valor positivo y cumple la restricción de integridad definida en el modelo relacional original.",
                    "minimum": 1
                },
                "fueSaltada": {
                    "bsonType": "bool",
                    "description": "Indica si el usuario interrumpió o saltó la canción antes de finalizar su reproducción. Este atributo es clave para medir indicadores de engagement, retención y calidad percibida del contenido. Proviene del campo fueSaltada del modelo relacional, originalmente representado mediante valores 'S' y 'N', adaptados aquí al tipo booleano."
                }
            },
            "additionalProperties": true,
            "required": [
                "reproduccionId",
                "usuarioId",
                "cancionId",
                "fechaHora",
                "pais",
                "duracionEscuchada",
                "fueSaltada"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Reproduccion.createIndex({
    "cancionId": 1
},
{
    "name": "idx_cancion_fecha"
});

db.Reproduccion.createIndex({
    "usuarioId": 1
},
{
    "name": "idx_usuario_fecha"
});

db.Reproduccion.createIndex({
    "pais": 1
},
{
    "name": "idx_pais_fecha"
});

// Creacion de la coleccion Discográficas
db.createCollection("Discográficas", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Discograficas",
            "description": "Colección encargada de almacenar la información corporativa de las discográficas o sellos musicales que mantienen relaciones comerciales con los artistas de la plataforma. Cada documento representa una entidad empresarial responsable de la producción, distribución, promoción o administración de derechos musicales. La información registrada permite gestionar contratos discográficos, liquidaciones de regalías y procesos de contacto institucional.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "discograficaId": {
                    "bsonType": "objectId",
                    "description": "Identificador único de la discográfica dentro de la plataforma. Es utilizado como referencia en contratos discográficos, liquidaciones de regalías y demás procesos relacionados con la industria musical."
                },
                "nombreDiscografica": {
                    "bsonType": "string",
                    "description": "Nombre comercial oficial de la discográfica o sello musical. Este campo identifica de manera única a la organización dentro del sistema y es utilizado en contratos, reportes financieros, liquidaciones y procesos administrativos.",
                    "maxLength": 150
                },
                "paisOrigen": {
                    "bsonType": "string",
                    "description": "País donde la discográfica se encuentra legalmente constituida o mantiene su sede principal de operaciones. Esta información resulta relevante para análisis de mercado, aspectos regulatorios y distribución internacional de regalías."
                },
                "correoContacto": {
                    "bsonType": "string",
                    "description": "Dirección de correo electrónico oficial utilizada como canal principal de comunicación entre la plataforma y la discográfica. Se emplea para notificaciones contractuales, envío de reportes financieros, comunicaciones administrativas y procesos de soporte institucional.",
                    "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                "telefonoContacto": {
                    "bsonType": "string",
                    "description": "Número telefónico oficial de contacto de la discográfica. Debe contener exactamente diez dígitos numéricos y se utiliza para comunicaciones comerciales, validaciones contractuales y coordinación de procesos operativos.",
                    "pattern": "^[0-9]{10}$"
                }
            },
            "additionalProperties": true,
            "required": [
                "discograficaId",
                "nombreDiscografica",
                "paisOrigen",
                "correoContacto",
                "telefonoContacto"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Discográficas.createIndex({
    "nombreDiscografica": 1
},
{
    "name": "idx_nombre_unique",
    "unique": true
});

db.Discográficas.createIndex({
    "paisOrigen": 1
},
{
    "name": "idx_pais"
});

// Creación de la colección "ContratosDiscograficos" con su esquema de validación y los índices necesarios para optimizar las consultas por nombre artístico y nombre de discográfica. Esta colección es fundamental para almacenar los contratos establecidos entre artistas y discográficas dentro de la plataforma, regulando la distribución de regalías generadas por la explotación de obras musicales. El diseño del esquema incorpora referencias a las entidades involucradas, así como campos desnormalizados para facilitar consultas frecuentes sin necesidad de realizar operaciones de agregación o búsquedas adicionales. Los índices en "artistaAsociado.nombreArtistico" y "discograficaAsociada.discograficaNombre" mejoran el rendimiento de las consultas relacionadas con la búsqueda de contratos por artista o discográfica.
db.createCollection("ContratosDiscograficos", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Contratos",
            "description": "Colección encargada de almacenar los contratos establecidos entre artistas y discográficas dentro de la plataforma. Cada documento representa un acuerdo legal y comercial que regula la distribución de regalías generadas por la explotación de obras musicales. Además de definir los porcentajes de participación económica de cada parte, esta colección permite mantener el historial contractual de los artistas, gestionar vigencias, realizar auditorías financieras y determinar las reglas de distribución utilizadas durante los procesos de liquidación de regalías.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "contratoId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del contrato discográfico. Permite rastrear y gestionar de forma individual cada acuerdo comercial registrado entre un artista y una discográfica."
                },
                "fechaInicio": {
                    "bsonType": "date",
                    "description": "Fecha oficial de entrada en vigor del contrato. A partir de este momento se aplican las condiciones de distribución económica definidas entre el artista y la discográfica."
                },
                "fechaFin": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Fecha de finalización del contrato. Puede contener un valor nulo cuando el acuerdo permanece vigente de manera indefinida o no se ha establecido una fecha contractual de terminación."
                },
                "porcentajeArtista": {
                    "bsonType": "number",
                    "description": "Porcentaje de participación económica asignado al artista sobre los ingresos generados por la explotación de sus obras musicales. Este valor es utilizado por los procesos de liquidación para calcular las regalías que corresponden al artista.",
                    "maximum": 100,
                    "minimum": 0
                },
                "porcentajeDiscografica": {
                    "bsonType": "number",
                    "description": "Porcentaje de participación económica asignado a la discográfica. Representa la porción de ingresos que recibe la empresa por sus actividades de producción, promoción, distribución o representación artística.",
                    "maximum": 100,
                    "minimum": 0
                },
                "estadoContrato": {
                    "bsonType": "string",
                    "description": "Estado actual del contrato dentro de su ciclo de vida. Un contrato 'Activo' se encuentra vigente y participa en los procesos de liquidación; un contrato 'Cancelado' ha sido terminado anticipadamente; y un contrato 'Finalizado' ha concluido conforme a las condiciones originalmente pactadas.",
                    "enum": [
                        "Activo",
                        "Cancelado",
                        "Finalizado"
                    ]
                },
                "discograficaAsociada": {
                    "bsonType": "object",
                    "properties": {
                        "discograficaId": {
                            "bsonType": "objectId",
                            "description": "Referencia a la discográfica o sello musical que participa en el contrato. Permite identificar la entidad responsable de la producción, distribución, promoción o administración de los derechos asociados al artista."
                        },
                        "discograficaNombre": {
                            "bsonType": "string",
                            "description": "Nombre comercial de la discográfica almacenado de forma desnormalizada. Permite mostrar información contractual y generar reportes administrativos sin requerir operaciones de agregación o consultas adicionales."
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "discograficaId"
                    ]
                },
                "artistaAsociado": {
                    "bsonType": "object",
                    "properties": {
                        "artistaId": {
                            "bsonType": "objectId",
                            "description": "Referencia al artista que suscribe el contrato. Este campo establece la relación entre el acuerdo contractual y el creador o intérprete musical que recibirá una parte de las regalías generadas."
                        },
                        "nombreArtistico": {
                            "bsonType": "string",
                            "description": "Nombre artístico almacenado de forma desnormalizada como snapshot. Su objetivo es facilitar consultas, reportes y listados de contratos sin necesidad de realizar búsquedas adicionales sobre la colección de usuarios."
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "artistaId"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "contratoId",
                "fechaInicio",
                "porcentajeArtista",
                "porcentajeDiscografica",
                "estadoContrato"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.ContratosDiscograficos.createIndex({
    "artistaAsociado.nombreArtistico": 1
},
{
    "name": "idx_artistaNombre"
});

db.ContratosDiscograficos.createIndex({
    "discograficaAsociada.discograficaNombre": 1
},
{
    "name": "idx_discografica"
});


// Creación de la colección "Likes" con su esquema de validación y los índices necesarios para optimizar las consultas por canción y usuario. Esta colección actúa como tabla de ruptura para la relación muchos a muchos (M:N) entre Usuarios y Canciones, desacoplando los eventos masivos de interacciones para mitigar el anti-patrón de arrays no acotados (Unbounded Arrays) y garantizar que no se exceda el límite de almacenamiento físico de 16MB por documento. Cada documento representa un evento de interacción individual, registrando el usuario que realizó la acción, la canción que recibió la interacción y la fecha en que se efectuó el evento. El diseño independiente permite manejar eficientemente el alto volumen transaccional generado por las interacciones de los usuarios sin comprometer la integridad ni el rendimiento de las consultas.
db.createCollection("Likes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "LikeCancion",
            "description": "Colección independiente que actúa como tabla de ruptura para la relación muchos a muchos (M:N) entre Usuarios y Canciones. Desacopla los eventos masivos de interacciones para mitigar el anti-patrón de arrays no acotados (Unbounded Arrays) y garantizar que no se exceda el límite de almacenamiento físico de 16MB por documento.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "likeId": {
                    "bsonType": "objectId",
                    "description": "Identificador único y clave primaria (Primary Key) del documento de interacción, generado automáticamente por el motor de la base de datos."
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Clave foránea (Foreign Key) que almacena el BSON ObjectId de referencia del usuario (oyente) originario de la interacción. Apunta a la colección 'usuarios'."
                },
                "cancionId": {
                    "bsonType": "objectId",
                    "description": "Clave foránea (Foreign Key) que almacena el BSON ObjectId de referencia de la canción que recibe la interacción. Apunta a la colección 'canciones'."
                },
                "fechaLike": {
                    "bsonType": "date",
                    "description": "Estampa de tiempo (Timestamp) persistida en formato extendido ISO 8601 UTC que registra el momento exacto en el que se efectuó el evento de interacción."
                }
            },
            "additionalProperties": true,
            "required": [
                "likeId",
                "usuarioId",
                "cancionId",
                "fechaLike"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Likes.createIndex({
    "cancionId": 1,
    "usuarioId": 1
},
{
    "name": "idx_usuario_cancion_unique",
    "unique": true
});

db.Likes.createIndex({
    "cancionId": 1
},
{
    "name": "idx_cancion"
});

// Creación de la colección "Playlist" con su esquema de validación y los índices necesarios para optimizar las consultas por nombre de playlist y tipo de playlist. Esta colección es esencial para almacenar las listas de reproducción creadas por los usuarios de la plataforma, permitiendo agrupar canciones según preferencias personales, temáticas o criterios específicos definidos por los usuarios. El diseño consolida las entidades Playlist y CancionPlaylist mediante documentos embebidos, lo que permite recuperar la información completa de una lista de reproducción mediante una única consulta y optimiza la experiencia de navegación y reproducción musical. Los índices en "nombrePlaylist" y "tipoPlaylist" mejoran el rendimiento de las consultas relacionadas con la búsqueda de playlists por su nombre o por su modelo de gestión (personal o colaborativa).
db.createCollection("Playlist", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Playlists",
            "description": "Colección encargada de almacenar las listas de reproducción creadas por los usuarios de la plataforma. Cada documento representa una playlist que agrupa canciones según preferencias personales, temáticas o criterios específicos definidos por los usuarios. El diseño consolida las entidades Playlist y CancionPlaylist mediante documentos embebidos, permitiendo recuperar la información completa de una lista de reproducción mediante una única consulta y optimizando la experiencia de navegación y reproducción musical.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "playlistId": {
                    "bsonType": "objectId",
                    "description": "Identificador único de la playlist dentro de la plataforma. Se utiliza como clave primaria del documento y como referencia desde otras colecciones relacionadas con usuarios, colaboraciones y actividades."
                },
                "nombrePlaylist": {
                    "bsonType": "string",
                    "description": "Nombre visible de la lista de reproducción. Permite identificar la playlist dentro de bibliotecas personales, búsquedas, recomendaciones y resultados de exploración.",
                    "maxLength": 100
                },
                "descripcionPlaylist": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Descripción opcional de la playlist. Puede utilizarse para indicar la temática, género musical predominante, estado de ánimo, propósito o cualquier información contextual relevante para otros usuarios."
                },
                "fechaCreacion": {
                    "bsonType": "date",
                    "description": "Fecha y hora en que se creó la playlist. Este dato permite ordenar listas cronológicamente, generar recomendaciones recientes y mantener trazabilidad sobre la actividad de los usuarios."
                },
                "tipoVisibilidad": {
                    "bsonType": "string",
                    "description": "Define el nivel de acceso de la playlist. Las playlists públicas pueden ser descubiertas y reproducidas por otros usuarios de la plataforma, mientras que las privadas solo son accesibles para sus propietarios y colaboradores autorizados.",
                    "enum": [
                        "Publica",
                        "Privada"
                    ]
                },
                "tipoPlaylist": {
                    "bsonType": "string",
                    "description": "Determina el modelo de gestión de la playlist. Una playlist personal únicamente puede ser modificada por su creador, mientras que una playlist colaborativa permite que múltiples usuarios autorizados agreguen, eliminen o reorganicen canciones.",
                    "enum": [
                        "Personal",
                        "Colaborativa"
                    ]
                },
                "duracionTotal": {
                    "bsonType": "number",
                    "description": "Duración acumulada de todas las canciones contenidas en la playlist, expresada en segundos. Se mantiene desnormalizada para evitar cálculos repetitivos durante la visualización de la lista y mejorar el rendimiento de las consultas.",
                    "minimum": 0
                },
                "canciones": {
                    "bsonType": "array",
                    "description": "Colección embebida que almacena las canciones asociadas a la playlist. Implementa el patrón Extended Reference Pattern, conservando información básica de cada canción para minimizar operaciones de agregación y optimizar la construcción de la interfaz del reproductor.",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "cancionId": {
                                "bsonType": "objectId",
                                "description": "Referencia a la canción original almacenada en la colección canciones. Permite acceder a la información completa del contenido musical cuando se requieran datos adicionales."
                            },
                            "nombreCancion": {
                                "bsonType": "string",
                                "description": "Nombre de la canción"
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "cancionId"
                        ]
                    }
                },
                "colaboradores": {
                    "bsonType": "array",
                    "description": "Contiene los usuarios que colaboran en la playlist cuando es publica o personal",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "userId": {
                                "bsonType": "objectId",
                                "description": "Referencia al usuario que colabora en la playlist."
                            },
                            "fechaUnion": {
                                "bsonType": "string",
                                "description": "Timestamp de cuando el usuario fue vinculado a la lista."
                            },
                            "rolPlaylist": {
                                "bsonType": "string",
                                "description": "Rol del usuario dentro de la playlist.",
                                "enum": [
                                    "Creador",
                                    "Colaborador"
                                ]
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "userId",
                            "fechaUnion",
                            "rolPlaylist"
                        ]
                    }
                }
            },
            "additionalProperties": true,
            "required": [
                "playlistId",
                "nombrePlaylist",
                "fechaCreacion",
                "tipoVisibilidad",
                "tipoPlaylist"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Playlist.createIndex({
    "nombrePlaylist": 1
},
{
    "name": "idx_nombre_playlist"
});

db.Playlist.createIndex({
    "tipoPlaylist": 1
},
{
    "name": "idx_tipoVisibilidad"
});

// Creación de la colección "Regalias" con su esquema de validación y los índices necesarios para optimizar las consultas por país de reproducción, período de liquidación, artista asociado y contrato discográfico. Esta colección es fundamental para almacenar las liquidaciones de regalías generadas por las reproducciones de canciones dentro de la plataforma. Cada documento representa un cierre contable consolidado por canción, país y período mensual, incluyendo el desglose económico correspondiente al artista y a la discográfica. El diseño del esquema incorpora referencias a las entidades involucradas, así como campos desnormalizados para facilitar consultas frecuentes sin necesidad de realizar operaciones de agregación o búsquedas adicionales. Los índices en "paisReproduccion", "periodo", "artistaId" y "contratoId" mejoran el rendimiento de las consultas relacionadas con la generación de reportes financieros, auditorías, análisis de rentabilidad musical y distribución de ingresos por derechos de explotación.
db.createCollection("Regalias", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Regalias",
            "description": "Colección analítica y financiera encargada de almacenar las liquidaciones de regalías generadas por las reproducciones de canciones dentro de la plataforma. Cada documento representa un cierre contable consolidado por canción, país y período mensual, incluyendo el desglose económico correspondiente al artista y a la discográfica. Esta colección constituye la fuente principal para reportes financieros, auditorías, cálculo de pagos, análisis de rentabilidad musical y distribución de ingresos por derechos de explotación.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "regaliaId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del registro de regalías. Cada documento representa una liquidación específica asociada a una canción, un territorio y un período contable determinado."
                },
                "cancionId": {
                    "bsonType": "objectId",
                    "description": "Referencia a la canción que generó las reproducciones y los ingresos asociados. Permite realizar consultas de rentabilidad individual, análisis históricos por obra musical y generación de reportes financieros detallados por canción."
                },
                "artistaId": {
                    "bsonType": "objectId",
                    "description": "Referencia al artista propietario o intérprete principal de la canción. Facilita la consolidación de ingresos, la generación de estados financieros por artista y el cálculo de regalías para artistas independientes o afiliados a una discográfica."
                },
                "contratoId": {
                    "bsonType": "objectId",
                    "description": "Referencia opcional al contrato discográfico vigente durante el período de liquidación. Puede contener un valor nulo cuando el artista distribuye su contenido de forma independiente y no posee acuerdos contractuales con un sello discográfico."
                },
                "periodo": {
                    "bsonType": "string",
                    "description": "Período contable utilizado para el cálculo de regalías, expresado en formato YYYY-MM. Permite agrupar reproducciones e ingresos en cierres financieros mensuales y generar reportes históricos comparativos.",
                    "pattern": "^[0-9]{4}-(0[1-9]|1[0-2])$"
                },
                "paisReproduccion": {
                    "bsonType": "string",
                    "description": "País donde se originaron las reproducciones que generaron los ingresos. Este dato es fundamental para la liquidación territorial de derechos de autor, el cumplimiento de acuerdos internacionales y el análisis geográfico del consumo musical."
                },
                "cantidadReproducciones": {
                    "bsonType": "number",
                    "description": "Número total de reproducciones registradas para la canción dentro del país y período especificados. Constituye la base operativa utilizada para calcular los ingresos generados y verificar la exactitud de las liquidaciones.",
                    "minimum": 0
                },
                "montoTotalGenerado": {
                    "bsonType": "number",
                    "description": "Valor bruto total generado por las reproducciones durante el período de liquidación. Representa el ingreso antes de aplicar distribuciones contractuales, comisiones o porcentajes correspondientes a las partes involucradas.",
                    "minimum": 0
                },
                "montoArtista": {
                    "bsonType": "number",
                    "description": "Monto económico asignado al artista como resultado del proceso de liquidación. Este valor se calcula aplicando los porcentajes de participación establecidos en el contrato o, en el caso de artistas independientes, según las políticas de monetización de la plataforma.",
                    "minimum": 0
                },
                "montoDiscografica": {
                    "bsonType": "number",
                    "description": "Monto económico correspondiente a la discográfica o sello musical asociado a la canción. Para artistas independientes este valor normalmente será cero, ya que no existe una entidad intermediaria que participe en la distribución de ingresos.",
                    "minimum": 0
                },
                "fechaCalculo": {
                    "bsonType": "date",
                    "description": "Fecha en la que se ejecutó el proceso automatizado de cálculo y generación de regalías. Permite auditar cuándo fue realizado el cierre financiero y verificar la vigencia de los datos almacenados."
                }
            },
            "additionalProperties": true,
            "required": [
                "regaliaId",
                "cancionId",
                "artistaId",
                "periodo",
                "paisReproduccion",
                "cantidadReproducciones",
                "montoTotalGenerado",
                "montoArtista",
                "montoDiscografica",
                "fechaCalculo"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Regalias.createIndex({
    "paisReproduccion": 1,
    "periodo": 1
},
{
    "name": "idx_pais_periodo",
    "unique": true
});

db.Regalias.createIndex({
    "artistaId": 1,
    "periodo": 1
},
{
    "name": "idx_artista_periodo"
});

db.Regalias.createIndex({},
{
    "name": "idx_contrato_periodo"
});

// Creación de la colección "usuario_album_guardado" con su esquema de validación y los índices necesarios para optimizar las consultas por usuario y álbum. Esta colección representa la relación entre los usuarios y los álbumes que han guardado en su biblioteca personal dentro de la plataforma. Cada documento registra la acción de guardar un álbum específico por parte de un usuario, permitiendo gestionar colecciones personales, accesos rápidos a contenido favorito y funcionalidades relacionadas con la biblioteca musical. El diseño del esquema incorpora referencias a las entidades involucradas, así como campos desnormalizados para facilitar consultas frecuentes sin necesidad de realizar operaciones de agregación o búsquedas adicionales. Los índices en "usuarioId" y "albumId" garantizan la unicidad de la relación entre un usuario y un álbum, mientras que el índice en "tituloAlbum" mejora el rendimiento de las consultas relacionadas con la visualización de la biblioteca personal.

db.createCollection("usuario_album_guardado", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "AlbumGuardado",
            "description": "Colección de relación que representa los álbumes almacenados por los oyentes dentro de su biblioteca personal. Cada documento registra la acción de guardar un álbum específico por parte de un usuario, permitiendo gestionar colecciones personales, accesos rápidos a contenido favorito y funcionalidades relacionadas con la biblioteca musical. Corresponde a la migración de la tabla UsuarioAlbum del modelo relacional hacia un modelo documental optimizado para consultas frecuentes de lectura.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "albumGuardadoId": {
                    "bsonType": "objectId"
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Identificador del usuario propietario de la biblioteca musical. Referencia lógica al documento correspondiente en la colección usuarios y permite recuperar todos los álbumes guardados por un oyente."
                },
                "albumId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del álbum almacenado en la biblioteca del usuario. Referencia lógica al documento correspondiente en la colección albums."
                },
                "tituloAlbum": {
                    "bsonType": "string",
                    "description": "Título del álbum almacenado de forma desnormalizada para optimizar la carga de la biblioteca personal. Su inclusión evita consultas adicionales a la colección albums durante operaciones de visualización y navegación."
                },
                "artistaNombre": {
                    "bsonType": "string",
                    "description": "Nombre artístico del creador o intérprete principal del álbum. Se almacena de forma desnormalizada para permitir que la interfaz de usuario muestre información completa de la biblioteca sin necesidad de realizar lookups adicionales."
                },
                "fechaGuardado": {
                    "bsonType": "date",
                    "description": "Fecha y hora exacta en que el usuario agregó el álbum a su biblioteca personal. Este atributo permite ordenar elementos por antigüedad, identificar tendencias de consumo y ofrecer funcionalidades como 'agregados recientemente'."
                }
            },
            "additionalProperties": true,
            "required": [
                "albumGuardadoId",
                "usuarioId",
                "albumId",
                "fechaGuardado"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.usuario_album_guardado.createIndex({
    "usuarioId": 1,
    "albumId": 1
},
{
    "name": "idx_usuario_album_unique",
    "unique": true
});

db.usuario_album_guardado.createIndex({
    "tituloAlbum": 1
},
{
    "name": "idx_tituloAlbum"
});