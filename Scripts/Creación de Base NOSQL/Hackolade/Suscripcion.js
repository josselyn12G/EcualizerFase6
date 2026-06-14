use Ecualizer;

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