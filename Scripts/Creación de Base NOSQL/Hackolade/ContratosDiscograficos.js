use Ecualizer;

db.createCollection("ContratosDiscograficos", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Contratos",
            "description": "Colección encargada de almacenar los contratos establecidos entre artistas y discográficas dentro de la plataforma. Cada documento representa un acuerdo legal y comercial que regula la distribución de regalías generadas por la explotación de obras musicales. Además de definir los porcentajes de participación económica de cada parte, esta colección permite mantener el historial contractual de los artistas, gestionar vigencias, realizar auditorías financieras y determinar las reglas de distribución utilizadas durante los procesos de liquidación de regalías.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "contratoId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del contrato discográfico. Permite rastrear y gestionar de forma individual cada acuerdo comercial registrado entre un artista y una discográfica."
                },
                "fechaInicio": {
                    "bsonType": "date",
                    "description": "Fecha oficial de entrada en vigor del contrato. A partir de este momento se aplican las condiciones de distribución económica definidas entre el artista y la discográfica."
                },
                "fechaFin": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Fecha de finalización del contrato. Puede contener un valor nulo cuando el acuerdo permanece vigente de manera indefinida o no se ha establecido una fecha contractual de terminación."
                },
                "porcentajeArtista": {
                    "bsonType": "number",
                    "description": "Porcentaje de participación económica asignado al artista sobre los ingresos generados por la explotación de sus obras musicales. Este valor es utilizado por los procesos de liquidación para calcular las regalías que corresponden al artista.",
                    "maximum": 100,
                    "minimum": 0
                },
                "porcentajeDiscografica": {
                    "bsonType": "number",
                    "description": "Porcentaje de participación económica asignado a la discográfica. Representa la porción de ingresos que recibe la empresa por sus actividades de producción, promoción, distribución o representación artística.",
                    "maximum": 100,
                    "minimum": 0
                },
                "estadoContrato": {
                    "bsonType": "string",
                    "description": "Estado actual del contrato dentro de su ciclo de vida. Un contrato 'Activo' se encuentra vigente y participa en los procesos de liquidación; un contrato 'Cancelado' ha sido terminado anticipadamente; y un contrato 'Finalizado' ha concluido conforme a las condiciones originalmente pactadas.",
                    "enum": [
                        "Activo",
                        "Cancelado",
                        "Finalizado"
                    ]
                },
                "discograficaAsociada": {
                    "bsonType": "object",
                    "properties": {
                        "discograficaId": {
                            "bsonType": "objectId",
                            "description": "Referencia a la discográfica o sello musical que participa en el contrato. Permite identificar la entidad responsable de la producción, distribución, promoción o administración de los derechos asociados al artista."
                        },
                        "discograficaNombre": {
                            "bsonType": "string",
                            "description": "Nombre comercial de la discográfica almacenado de forma desnormalizada. Permite mostrar información contractual y generar reportes administrativos sin requerir operaciones de agregación o consultas adicionales."
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "discograficaId"
                    ]
                },
                "artistaAsociado": {
                    "bsonType": "object",
                    "properties": {
                        "artistaId": {
                            "bsonType": "objectId",
                            "description": "Referencia al artista que suscribe el contrato. Este campo establece la relación entre el acuerdo contractual y el creador o intérprete musical que recibirá una parte de las regalías generadas."
                        },
                        "nombreArtistico": {
                            "bsonType": "string",
                            "description": "Nombre artístico almacenado de forma desnormalizada como snapshot. Su objetivo es facilitar consultas, reportes y listados de contratos sin necesidad de realizar búsquedas adicionales sobre la colección de usuarios."
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "artistaId"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "contratoId",
                "fechaInicio",
                "porcentajeArtista",
                "porcentajeDiscografica",
                "estadoContrato"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.ContratosDiscograficos.createIndex({
    "artistaAsociado.nombreArtistico": 1
},
{
    "name": "idx_artistaNombre"
});

db.ContratosDiscograficos.createIndex({
    "discograficaAsociada.discograficaNombre": 1
},
{
    "name": "idx_discografica"
});