use Ecualizer;

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