use Ecualizer;

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