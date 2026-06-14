use Ecualizer;

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