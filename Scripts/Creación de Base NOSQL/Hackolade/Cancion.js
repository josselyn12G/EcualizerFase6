use Ecualizer;

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