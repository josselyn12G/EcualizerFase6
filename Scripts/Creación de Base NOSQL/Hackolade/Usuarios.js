use Ecualizer;

db.createCollection("Usuarios", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Usuarios",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "usuarioId": {
                    "bsonType": "objectId",
                    "description": "Identificador único del documento generado automáticamente por MongoDB (Primary Key)."
                },
                "cedulaUsuario": {
                    "bsonType": "string",
                    "description": "Número de cédula de identidad ciudadana ecuatoriana. Requiere exactamente 10 dígitos numéricos.",
                    "pattern": "^[0-9]{10}$"
                },
                "primerNombre": {
                    "bsonType": "string",
                    "description": "Primer nombre oficial del usuario. Longitud mínima de 2 caracteres para evitar iniciales o datos corruptos.",
                    "minLength": 2
                },
                "segundoNombre": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Segundo nombre del usuario. Admite tipo string si existe o null en caso de no poseerlo."
                },
                "primerApellido": {
                    "bsonType": "string",
                    "description": "Primer apellido (apellido paterno) oficial del usuario. Longitud mínima de 2 caracteres.",
                    "minLength": 2
                },
                "segundoApellido": {
                    "bsonType": [
                        "string",
                        "null"
                    ],
                    "description": "Segundo apellido (apellido materno) del usuario. Admite tipo string o valor null si no registra."
                },
                "correo": {
                    "bsonType": "string",
                    "description": "Dirección de correo electrónico del usuario. Debe cumplir con el estándar RFC 5322 y es único en la plataforma.",
                    "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                "contrasena": {
                    "bsonType": "string",
                    "description": "Hash seguro de la credencial de acceso (ej. bcrypt, Argon2). Por seguridad, nunca debe almacenarse en texto plano.",
                    "minLength": 8
                },
                "fechaRegistro": {
                    "bsonType": "date",
                    "description": "Fecha y hora exacta en la que el usuario se registró en el sistema, en formato extendido ISO 8601 UTC."
                },
                "estado": {
                    "bsonType": "string",
                    "description": "Estado actual de la cuenta del usuario para el control de accesos y flujos operativos del sistema.",
                    "enum": [
                        "activo",
                        "inactivo",
                        "suspendido"
                    ]
                },
                "tipoUsuario": {
                    "bsonType": "string",
                    "description": "Atributo discriminador utilizado para la implementación del patrón de diseño NoSQL 'Single Collection Pattern'.",
                    "enum": [
                        "oyente",
                        "artista",
                        "admin"
                    ]
                },
                "perfilOyente": {
                    "bsonType": "object",
                    "description": "Contenedor de datos específicos del perfil de oyente. Requerido obligatoriamente si 'tipoUsuario' es igual a 'oyente'.",
                    "properties": {
                        "alias": {
                            "bsonType": "string",
                            "description": "Nombre de usuario o nickname público visible dentro de la comunidad de la plataforma (máximo 15 caracteres).",
                            "maxLength": 15
                        },
                        "paisUsuario": {
                            "bsonType": "string",
                            "description": "País de residencia actual del oyente (utilizado para geolocalización de contenido y analíticas)."
                        },
                        "fechaNacimiento": {
                            "bsonType": "string",
                            "description": "Fecha de nacimiento del oyente (formato YYYY-MM-DD). La lógica de negocio debe validar una edad mínima de 13 años al registrarse."
                        },
                        "genero": {
                            "bsonType": "string",
                            "description": "Identidad de género declarada por el usuario: F (Femenino), M (Masculino), O (Otro/No binario).",
                            "enum": [
                                "F",
                                "M",
                                "O"
                            ]
                        },
                        "ArtistasSeguidos": {
                            "bsonType": "array",
                            "title": "artistasSeguidos",
                            "description": "Cantidad de artistas seguidos, no supera los 200 artistas por lo que se ha decidido embeberlo.",
                            "additionalItems": true,
                            "items": {
                                "bsonType": "object",
                                "properties": {
                                    "artistaId": {
                                        "bsonType": "objectId",
                                        "description": "Referencia al _id del artista en la colección usuarios."
                                    },
                                    "fechaSeguimiento": {
                                        "bsonType": "string",
                                        "description": "Fecha en la que el oyente comenzó a seguir al artista."
                                    },
                                    "notificacionesActivas": {
                                        "bsonType": "string",
                                        "description": "A = Activas, D = Desactivadas.",
                                        "enum": [
                                            "A",
                                            "D"
                                        ]
                                    },
                                    "nombreArtistico": {
                                        "bsonType": "string",
                                        "description": "Nombre público de la entidad musical o creador. Es único a nivel de plataforma mediante la aplicación de un índice sparse."
                                    }
                                },
                                "additionalProperties": false,
                                "required": [
                                    "artistaId",
                                    "fechaSeguimiento",
                                    "notificacionesActivas",
                                    "nombreArtistico"
                                ]
                            }
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "alias",
                        "fechaNacimiento",
                        "genero"
                    ]
                },
                "perfilArtista": {
                    "bsonType": "object",
                    "description": "Contenedor de datos específicos del perfil de artista. Requerido obligatoriamente si 'tipoUsuario' es igual a 'artista'.",
                    "properties": {
                        "nombreArtistico": {
                            "bsonType": "string",
                            "description": "Nombre público de la entidad musical o creador. Es único a nivel de plataforma mediante la aplicación de un índice sparse."
                        },
                        "biografia": {
                            "bsonType": [
                                "string",
                                "null"
                            ],
                            "description": "Reseña histórica, trayectoria profesional o descripción pública del artista. Permite nulos si está vacía."
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "nombreArtistico"
                    ]
                },
                "perfilAdmin": {
                    "bsonType": "object",
                    "description": "Contenedor de datos de control interno para personal administrativo. Requerido obligatoriamente si 'tipoUsuario' es igual a 'admin'.",
                    "properties": {
                        "rolAdmin": {
                            "bsonType": "string",
                            "description": "Rol específico asignado para determinar los privilegios y permisos basados en roles (RBAC) en el panel de administración.",
                            "enum": [
                                "Administrador general",
                                "Gestion de usuarios",
                                "Moderador de contenido",
                                "Soporte tecnico"
                            ]
                        },
                        "departamento": {
                            "bsonType": "string",
                            "description": "Área u organización corporativa interna a la que pertenece el administrador para fines de auditoría.",
                            "enum": [
                                "Contenido",
                                "Finanzas",
                                "Operaciones",
                                "Soporte",
                                "Tecnologia"
                            ]
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "rolAdmin",
                        "departamento"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "cedulaUsuario",
                "primerNombre",
                "primerApellido",
                "correo",
                "contrasena",
                "fechaRegistro",
                "estado",
                "tipoUsuario"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.Usuarios.createIndex({
    "correo": 1
},
{
    "name": "idx_correo_unique",
    "unique": true
});

db.Usuarios.createIndex({
    "cedulaUsuario": 1
},
{
    "name": "idx_cedula_unique",
    "unique": true
});

db.Usuarios.createIndex({
    "perfilArtista.nombreArtistico": 1
},
{
    "name": "idx_nombre_artistico_unique_sparse",
    "unique": true,
    "sparse": true
});

db.Usuarios.createIndex({
    "estado": 1
},
{
    "name": "idx_tipo_estado"
});