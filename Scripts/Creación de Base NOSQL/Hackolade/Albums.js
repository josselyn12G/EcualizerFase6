use Ecualizer;

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