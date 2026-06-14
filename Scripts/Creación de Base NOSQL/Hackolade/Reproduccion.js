use Ecualizer;

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