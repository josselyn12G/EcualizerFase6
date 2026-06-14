use Ecualizer;

db.createCollection("Regalias", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Regalias",
            "description": "Colección analítica y financiera encargada de almacenar las liquidaciones de regalías generadas por las reproducciones de canciones dentro de la plataforma. Cada documento representa un cierre contable consolidado por canción, país y período mensual, incluyendo el desglose económico correspondiente al artista y a la discográfica. Esta colección constituye la fuente principal para reportes financieros, auditorías, cálculo de pagos, análisis de rentabilidad musical y distribución de ingresos por derechos de explotación.",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "regaliaId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del registro de regalías. Cada documento representa una liquidación específica asociada a una canción, un territorio y un período contable determinado."
                },
                "cancionId": {
                    "bsonType": "objectId",
                    "description": "Referencia a la canción que generó las reproducciones y los ingresos asociados. Permite realizar consultas de rentabilidad individual, análisis históricos por obra musical y generación de reportes financieros detallados por canción."
                },
                "artistaId": {
                    "bsonType": "objectId",
                    "description": "Referencia al artista propietario o intérprete principal de la canción. Facilita la consolidación de ingresos, la generación de estados financieros por artista y el cálculo de regalías para artistas independientes o afiliados a una discográfica."
                },
                "contratoId": {
                    "bsonType": "objectId",
                    "description": "Referencia opcional al contrato discográfico vigente durante el período de liquidación. Puede contener un valor nulo cuando el artista distribuye su contenido de forma independiente y no posee acuerdos contractuales con un sello discográfico."
                },
                "periodo": {
                    "bsonType": "string",
                    "description": "Período contable utilizado para el cálculo de regalías, expresado en formato YYYY-MM. Permite agrupar reproducciones e ingresos en cierres financieros mensuales y generar reportes históricos comparativos.",
                    "pattern": "^[0-9]{4}-(0[1-9]|1[0-2])$"
                },
                "paisReproduccion": {
                    "bsonType": "string",
                    "description": "País donde se originaron las reproducciones que generaron los ingresos. Este dato es fundamental para la liquidación territorial de derechos de autor, el cumplimiento de acuerdos internacionales y el análisis geográfico del consumo musical."
                },
                "cantidadReproducciones": {
                    "bsonType": "number",
                    "description": "Número total de reproducciones registradas para la canción dentro del país y período especificados. Constituye la base operativa utilizada para calcular los ingresos generados y verificar la exactitud de las liquidaciones.",
                    "minimum": 0
                },
                "montoTotalGenerado": {
                    "bsonType": "number",
                    "description": "Valor bruto total generado por las reproducciones durante el período de liquidación. Representa el ingreso antes de aplicar distribuciones contractuales, comisiones o porcentajes correspondientes a las partes involucradas.",
                    "minimum": 0
                },
                "montoArtista": {
                    "bsonType": "number",
                    "description": "Monto económico asignado al artista como resultado del proceso de liquidación. Este valor se calcula aplicando los porcentajes de participación establecidos en el contrato o, en el caso de artistas independientes, según las políticas de monetización de la plataforma.",
                    "minimum": 0
                },
                "montoDiscografica": {
                    "bsonType": "number",
                    "description": "Monto económico correspondiente a la discográfica o sello musical asociado a la canción. Para artistas independientes este valor normalmente será cero, ya que no existe una entidad intermediaria que participe en la distribución de ingresos.",
                    "minimum": 0
                },
                "fechaCalculo": {
                    "bsonType": "date",
                    "description": "Fecha en la que se ejecutó el proceso automatizado de cálculo y generación de regalías. Permite auditar cuándo fue realizado el cierre financiero y verificar la vigencia de los datos almacenados."
                }
            },
            "additionalProperties": true,
            "required": [
                "regaliaId",
                "cancionId",
                "artistaId",
                "periodo",
                "paisReproduccion",
                "cantidadReproducciones",
                "montoTotalGenerado",
                "montoArtista",
                "montoDiscografica",
                "fechaCalculo"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Regalias.createIndex({
    "paisReproduccion": 1,
    "periodo": 1
},
{
    "name": "idx_pais_periodo",
    "unique": true
});

db.Regalias.createIndex({
    "artistaId": 1,
    "periodo": 1
},
{
    "name": "idx_artista_periodo"
});

db.Regalias.createIndex({},
{
    "name": "idx_contrato_periodo"
});