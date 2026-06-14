use Ecualizer;

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