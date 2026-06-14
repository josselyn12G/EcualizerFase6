use Ecualizer;

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