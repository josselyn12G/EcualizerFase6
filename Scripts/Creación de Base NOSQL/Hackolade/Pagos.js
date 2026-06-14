use Ecualizer;

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
