// =====================================================================
// SCRIPT DE INICIALIZACIÓN: ESTRUCTURA Y DATOS ECUALIZER
// =====================================================================

// 1. Limpieza y preparación
use("Ecualizer");

// 2. Inserción de datos
print("Iniciando inserción de datos...");

db.Albums.insertMany([
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "tituloAlbum": "Super Sangre Joven",
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "descripcionAlbum": "Álbum debut de Duki que consolidó el trap latino en Argentina.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c001"
    },
    "nombreArtistico": "Duki",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "tituloAlbum": "Desde el Fin del Mundo",
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "descripcionAlbum": "Segundo álbum de Duki con colaboraciones internacionales de alto perfil.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c001"
    },
    "nombreArtistico": "Duki",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "tituloAlbum": "El Mal Querer",
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "descripcionAlbum": "Álbum conceptual de Rosalía que reimagina el flamenco en clave moderna.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c002"
    },
    "nombreArtistico": "Rosalía",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "tituloAlbum": "MOTOMAMI",
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "descripcionAlbum": "Tercer álbum de Rosalía, ganador del Grammy al Mejor Álbum de Música Urbana.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c002"
    },
    "nombreArtistico": "Rosalía",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "tituloAlbum": "AM",
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "descripcionAlbum": "Quinto álbum de Arctic Monkeys, uno de los más influyentes del rock moderno.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c003"
    },
    "nombreArtistico": "Arctic Monkeys",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "tituloAlbum": "The Car",
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "descripcionAlbum": "Séptimo álbum de Arctic Monkeys con sonido orquestal y sofisticado.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c003"
    },
    "nombreArtistico": "Arctic Monkeys",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "tituloAlbum": "Un Verano Sin Ti",
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "descripcionAlbum": "Álbum de Bad Bunny que batió récords en plataformas de streaming globales.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c004"
    },
    "nombreArtistico": "Bad Bunny",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "tituloAlbum": "nadie sabe lo que va a pasar mañana",
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "descripcionAlbum": "Álbum introspectivo de Bad Bunny con influencias de trap y perreo.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c004"
    },
    "nombreArtistico": "Bad Bunny",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "tituloAlbum": "MAÑANA SERÁ BONITO",
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "descripcionAlbum": "Álbum de Karol G que debutó en el número 1 del Billboard 200.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c005"
    },
    "nombreArtistico": "Karol G",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "tituloAlbum": "Bichota Season",
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "descripcionAlbum": "EP navideño de Karol G que incluye colaboraciones con grandes del reggaeton.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c005"
    },
    "nombreArtistico": "Karol G",
    "tipoAlbum": {
      "nombreTipo": "EP",
      "descripcionTipo": "Extended Play"
    }
  },
  {
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c011"
    },
    "tituloAlbum": "Lanzamiento Hoy Prueba",
    "fechaLanzamiento": {
      "$date": "2026-05-30T00:00:00Z"
    },
    "descripcionAlbum": "Álbum de prueba operativa NoSQL.",
    "estadoAlbum": "activo",
    "artistaId": {
      "$oid": "65f1a2b3c4d5e6f7a8b9c001"
    },
    "nombreArtistico": "Duki",
    "tipoAlbum": {
      "nombreTipo": "Album",
      "descripcionTipo": "Lanzamiento de larga duración LP"
    }
  }
]); // Pega aquí tu array JSON de Albums
db.Cancion.insertMany([
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c001"
    },
    "tituloCancion": "Rockstar",
    "duracion": 198,
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 85000001,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Hip Hop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c002"
    },
    "tituloCancion": "Loca",
    "duracion": 204,
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 72000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Hip Hop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c003"
    },
    "tituloCancion": "Set",
    "duracion": 186,
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 68000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c004"
    },
    "tituloCancion": "No Salgas",
    "duracion": 192,
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 54000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c005"
    },
    "tituloCancion": "Mucho Más",
    "duracion": 210,
    "fechaLanzamiento": {
      "$date": "2018-09-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 61000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c001"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c006"
    },
    "tituloCancion": "She Don't Give a Fo",
    "duracion": 223,
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 120000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Hip Hop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c007"
    },
    "tituloCancion": "Goteo",
    "duracion": 195,
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 95000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c008"
    },
    "tituloCancion": "Primer Tiempo",
    "duracion": 241,
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 78000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c009"
    },
    "tituloCancion": "Luna Llena",
    "duracion": 205,
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 83000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c010"
    },
    "tituloCancion": "Desde el Fin del Mundo",
    "duracion": 268,
    "fechaLanzamiento": {
      "$date": "2021-11-05T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 67000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c002"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "nombreArtistico": "Duki"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c011"
    },
    "tituloCancion": "Malamente",
    "duracion": 183,
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 95000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Pop",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c012"
    },
    "tituloCancion": "Que No Salga la Luna",
    "duracion": 214,
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 77000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c013"
    },
    "tituloCancion": "Pienso en Tu Mirá",
    "duracion": 226,
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 110000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Pop",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c014"
    },
    "tituloCancion": "De Aquí No Sales",
    "duracion": 198,
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 68000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c015"
    },
    "tituloCancion": "Bagdad",
    "duracion": 391,
    "fechaLanzamiento": {
      "$date": "2018-11-02T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 82000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c003"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c016"
    },
    "tituloCancion": "Saoko",
    "duracion": 156,
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 145000003,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Flamenco Urbano",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c017"
    },
    "tituloCancion": "Candy",
    "duracion": 178,
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 132000005,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c018"
    },
    "tituloCancion": "Bizcochito",
    "duracion": 136,
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 118000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c019"
    },
    "tituloCancion": "Chicken Teriyaki",
    "duracion": 131,
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 98000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c020"
    },
    "tituloCancion": "Despechá",
    "duracion": 148,
    "fechaLanzamiento": {
      "$date": "2022-03-18T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 178000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c004"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Pop",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "nombreArtistico": "Rosalía"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c021"
    },
    "tituloCancion": "Do I Wanna Know?",
    "duracion": 341,
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 420000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Indie Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c022"
    },
    "tituloCancion": "R U Mine?",
    "duracion": 203,
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 310000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c023"
    },
    "tituloCancion": "One for the Road",
    "duracion": 237,
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 185000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c024"
    },
    "tituloCancion": "Arabella",
    "duracion": 212,
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 172000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Indie Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c025"
    },
    "tituloCancion": "Why'd You Only Call Me When You're High?",
    "duracion": 163,
    "fechaLanzamiento": {
      "$date": "2013-09-09T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 290000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c005"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c026"
    },
    "tituloCancion": "There'd Better Be a Mirrorball",
    "duracion": 303,
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 88000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Indie Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c027"
    },
    "tituloCancion": "I Ain't Quite Where I Think I Am",
    "duracion": 254,
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 71000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c028"
    },
    "tituloCancion": "Sculptures of Anything Goes",
    "duracion": 237,
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 59000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c029"
    },
    "tituloCancion": "Body Paint",
    "duracion": 340,
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 95000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c030"
    },
    "tituloCancion": "The Car",
    "duracion": 271,
    "fechaLanzamiento": {
      "$date": "2022-10-21T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 67000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c006"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Rock Alternativo",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "nombreArtistico": "Arctic Monkeys"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c031"
    },
    "tituloCancion": "Moscow Mule",
    "duracion": 355,
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 320000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c032"
    },
    "tituloCancion": "Tití Me Preguntó",
    "duracion": 248,
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 390000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c033"
    },
    "tituloCancion": "Me Porto Bonito",
    "duracion": 178,
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 430000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Latin Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c034"
    },
    "tituloCancion": "Ojitos Lindos",
    "duracion": 314,
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 280000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c035"
    },
    "tituloCancion": "Un Verano Sin Ti",
    "duracion": 326,
    "fechaLanzamiento": {
      "$date": "2022-05-06T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 215000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c007"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c036"
    },
    "tituloCancion": "EL APAGÓN",
    "duracion": 476,
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 195000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Hip Hop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c037"
    },
    "tituloCancion": "WHERE SHE GOES",
    "duracion": 175,
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 340000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Trap Latino",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c038"
    },
    "tituloCancion": "COCO CHANEL",
    "duracion": 217,
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 145000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c039"
    },
    "tituloCancion": "HIBIKI",
    "duracion": 254,
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 98000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Electrónica",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c040"
    },
    "tituloCancion": "THUNDER Y LIGHTNING",
    "duracion": 196,
    "fechaLanzamiento": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 112000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c008"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "nombreArtistico": "Bad Bunny"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c041"
    },
    "tituloCancion": "PROVENZA",
    "duracion": 207,
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 285000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Latin Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c042"
    },
    "tituloCancion": "TQG",
    "duracion": 186,
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 410000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Latin Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c043"
    },
    "tituloCancion": "Cairo",
    "duracion": 210,
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 198000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c044"
    },
    "tituloCancion": "QLONA",
    "duracion": 185,
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 165000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c045"
    },
    "tituloCancion": "AMARGURA",
    "duracion": 228,
    "fechaLanzamiento": {
      "$date": "2023-02-24T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 142000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c009"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c046"
    },
    "tituloCancion": "Bichota",
    "duracion": 194,
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 320000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "numeroPista": 1,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      },
      {
        "nombreGenero": "Latin Pop",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c047"
    },
    "tituloCancion": "El Makinon",
    "duracion": 218,
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 195000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "numeroPista": 2,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c048"
    },
    "tituloCancion": "Ay Dios Mío",
    "duracion": 185,
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 256,
    "totalReproducciones": 143000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "numeroPista": 3,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c049"
    },
    "tituloCancion": "Mi Cama",
    "duracion": 232,
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 178000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "numeroPista": 4,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  },
  {
    "cancionId": {
      "$oid": "65f5e2b3c4d5e6f7a8b9c050"
    },
    "tituloCancion": "Pineapple",
    "duracion": 197,
    "fechaLanzamiento": {
      "$date": "2021-12-03T00:00:00Z"
    },
    "estadoCancion": "activa",
    "calidadKbps": 320,
    "totalReproducciones": 98000000,
    "albumId": {
      "$oid": "65f4d2b3c4d5e6f7a8b9c010"
    },
    "numeroPista": 5,
    "generos": [
      {
        "nombreGenero": "Reggaeton",
        "descripcionGenero": ""
      }
    ],
    "artistas": [
      {
        "artistaId": {
          "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "nombreArtistico": "Karol G"
      }
    ]
  }
]); 
db.ContratosDiscograficos.insertMany([
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c001"
        },
        "fechaInicio": {
            "$date": "2017-06-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-05-31T00:00:00Z"
        },
        "porcentajeArtista": 18.00,
        "porcentajeDiscografica": 82.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c001"
            },
            "discograficaNombre": "Sony Music Entertainment"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c001"
            },
            "nombreArtistico": "Duki"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c002"
        },
        "fechaInicio": {
            "$date": "2025-06-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2030-05-31T00:00:00Z"
        },
        "porcentajeArtista": 22.00,
        "porcentajeDiscografica": 78.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c001"
            },
            "discograficaNombre": "Sony Music Entertainment"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c001"
            },
            "nombreArtistico": "Duki"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c003"
        },
        "fechaInicio": {
            "$date": "2017-01-15T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2023-01-14T00:00:00Z"
        },
        "porcentajeArtista": 25.00,
        "porcentajeDiscografica": 75.00,
        "estadoContrato": "Finalizado",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c002"
            },
            "discograficaNombre": "Universal Music Group"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c002"
            },
            "nombreArtistico": "Rosalía"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c004"
        },
        "fechaInicio": {
            "$date": "2023-01-15T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2028-01-14T00:00:00Z"
        },
        "porcentajeArtista": 30.00,
        "porcentajeDiscografica": 70.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c002"
            },
            "discograficaNombre": "Universal Music Group"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c002"
            },
            "nombreArtistico": "Rosalía"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c005"
        },
        "fechaInicio": {
            "$date": "2006-07-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2016-06-30T00:00:00Z"
        },
        "porcentajeArtista": 20.00,
        "porcentajeDiscografica": 80.00,
        "estadoContrato": "Finalizado",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c003"
            },
            "discograficaNombre": "Warner Music Group"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c003"
            },
            "nombreArtistico": "Arctic Monkeys"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c006"
        },
        "fechaInicio": {
            "$date": "2016-07-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-06-30T00:00:00Z"
        },
        "porcentajeArtista": 25.00,
        "porcentajeDiscografica": 75.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c003"
            },
            "discograficaNombre": "Warner Music Group"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c003"
            },
            "nombreArtistico": "Arctic Monkeys"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c007"
        },
        "fechaInicio": {
            "$date": "2016-05-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2022-04-30T00:00:00Z"
        },
        "porcentajeArtista": 35.00,
        "porcentajeDiscografica": 65.00,
        "estadoContrato": "Finalizado",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c001"
            },
            "discograficaNombre": "Sony Music Entertainment"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c004"
            },
            "nombreArtistico": "Bad Bunny"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c008"
        },
        "fechaInicio": {
            "$date": "2022-05-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2027-04-30T00:00:00Z"
        },
        "porcentajeArtista": 40.00,
        "porcentajeDiscografica": 60.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c004"
            },
            "discograficaNombre": "BMG Rights Management"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c004"
            },
            "nombreArtistico": "Bad Bunny"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c009"
        },
        "fechaInicio": {
            "$date": "2015-03-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2021-02-28T00:00:00Z"
        },
        "porcentajeArtista": 28.00,
        "porcentajeDiscografica": 72.00,
        "estadoContrato": "Finalizado",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c002"
            },
            "discograficaNombre": "Universal Music Group"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c005"
            },
            "nombreArtistico": "Karol G"
        }
    },
    {
        "contratoId": {
            "$oid": "65f7a2b3c4d5e6f7a8b9c010"
        },
        "fechaInicio": {
            "$date": "2021-03-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-02-28T00:00:00Z"
        },
        "porcentajeArtista": 35.00,
        "porcentajeDiscografica": 65.00,
        "estadoContrato": "Activo",
        "discograficaAsociada": {
            "discograficaId": {
                "$oid": "65f8b2b3c4d5e6f7a8b9c005"
            },
            "discograficaNombre": "Interscope Records"
        },
        "artistaAsociado": {
            "artistaId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c005"
            },
            "nombreArtistico": "Karol G"
        }
    }
]);
db.Discograficas.insertMany([
    {
        "discograficaId": 1,
        "nombreDiscografica": "Sony Music Entertainment",
        "paisOrigen": "Estados Unidos",
        "correoContacto": "contacto@sonymusic.com",
        "telefonoContacto": "2125550100"
    },
    {
        "discograficaId": 2,
        "nombreDiscografica": "Universal Music Group",
        "paisOrigen": "Estados Unidos",
        "correoContacto": "info@universalmusic.com",
        "telefonoContacto": "3105550200"
    },
    {
        "discograficaId": 3,
        "nombreDiscografica": "Warner Music Group",
        "paisOrigen": "Estados Unidos",
        "correoContacto": "contacto@warnermusic.com",
        "telefonoContacto": "2125550300"
    },
    {
        "discograficaId": 4,
        "nombreDiscografica": "BMG Rights Management",
        "paisOrigen": "Alemania",
        "correoContacto": "rights@bmg.com",
        "telefonoContacto": "4930550400"
    },
    {
        "discograficaId": 5,
        "nombreDiscografica": "Interscope Records",
        "paisOrigen": "Estados Unidos",
        "correoContacto": "interscope@interscope.com",
        "telefonoContacto": "3105550500"
    }
]);
db.Likes.insertMany([
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c001"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaLike": {
            "$date": "2024-01-10T20:15:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c002"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaLike": {
            "$date": "2024-01-11T18:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c003"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaLike": {
            "$date": "2024-01-15T21:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c004"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaLike": {
            "$date": "2024-02-01T10:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c005"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "fechaLike": {
            "$date": "2024-02-10T19:45:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c006"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaLike": {
            "$date": "2024-02-11T20:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c007"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "fechaLike": {
            "$date": "2024-02-15T17:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c008"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaLike": {
            "$date": "2024-03-01T21:15:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c009"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaLike": {
            "$date": "2024-03-01T22:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c010"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaLike": {
            "$date": "2024-03-05T16:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c011"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaLike": {
            "$date": "2024-03-06T20:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c012"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaLike": {
            "$date": "2024-03-10T14:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c013"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c022"
        },
        "fechaLike": {
            "$date": "2024-03-11T15:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c014"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "fechaLike": {
            "$date": "2024-04-01T11:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c015"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c026"
        },
        "fechaLike": {
            "$date": "2024-04-02T12:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c016"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaLike": {
            "$date": "2024-04-05T20:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c017"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c006"
        },
        "fechaLike": {
            "$date": "2024-04-06T21:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c018"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaLike": {
            "$date": "2024-04-10T19:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c019"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c044"
        },
        "fechaLike": {
            "$date": "2024-04-11T20:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c020"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c003"
        },
        "fechaLike": {
            "$date": "2024-05-01T18:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c021"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaLike": {
            "$date": "2024-05-02T19:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c022"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c007"
        },
        "fechaLike": {
            "$date": "2024-05-10T20:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c023"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c009"
        },
        "fechaLike": {
            "$date": "2024-05-12T21:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c024"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaLike": {
            "$date": "2024-05-20T17:30:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c025"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c043"
        },
        "fechaLike": {
            "$date": "2024-05-21T18:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c026"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c032"
        },
        "fechaLike": {
            "$date": "2024-06-01T22:00:00Z"
        }
    },
    {
        "likeId": {
            "$oid": "65f9a2b3c4d5e6f7a8b9c027"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c021"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaLike": {
            "$date": "2026-05-31T04:42:43.660Z"
        }
    }
]);
db.Pagos.insertMany([
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c001"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c001"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2023-01-15T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c006"
            },
            "primerNombre": "Mario",
            "primerApellido": "López"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c002"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c002"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-01-16T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c006"
            },
            "primerNombre": "Mario",
            "primerApellido": "López"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c003"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c003"
        },
        "monto": 13.99,
        "fechaPago": {
            "$date": "2023-02-20T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c007"
            },
            "primerNombre": "Sofia",
            "primerApellido": "Quiroz"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c004"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c004"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-02-21T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c007"
            },
            "primerNombre": "Sofia",
            "primerApellido": "Quiroz"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c005"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c005"
        },
        "monto": 4.99,
        "fechaPago": {
            "$date": "2023-03-10T00:00:00Z"
        },
        "metodoPago": "Tarjeta de debito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c008"
            },
            "primerNombre": "Carlos",
            "primerApellido": "Ramírez"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c006"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c006"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-03-11T00:00:00Z"
        },
        "metodoPago": "Tarjeta de debito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c008"
            },
            "primerNombre": "Carlos",
            "primerApellido": "Ramírez"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c007"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c007"
        },
        "monto": 17.99,
        "fechaPago": {
            "$date": "2023-04-05T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c009"
            },
            "primerNombre": "Lucía",
            "primerApellido": "Vargas"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c008"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c008"
        },
        "monto": 17.99,
        "fechaPago": {
            "$date": "2024-04-06T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c009"
            },
            "primerNombre": "Lucía",
            "primerApellido": "Vargas"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c009"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c009"
        },
        "monto": 4.99,
        "fechaPago": {
            "$date": "2023-05-18T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c010"
            },
            "primerNombre": "Andrés",
            "primerApellido": "Torres"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c010"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c009"
        },
        "monto": 4.99,
        "fechaPago": {
            "$date": "2023-06-18T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Fallido",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c010"
            },
            "primerNombre": "Andrés",
            "primerApellido": "Torres"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c011"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c010"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-05-19T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c010"
            },
            "primerNombre": "Andrés",
            "primerApellido": "Torres"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c012"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c011"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2023-06-22T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c011"
            },
            "primerNombre": "Valeria",
            "primerApellido": "García"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c013"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c012"
        },
        "monto": 0.01,
        "fechaPago": {
            "$date": "2023-07-30T00:00:00Z"
        },
        "metodoPago": "Tarjeta de debito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c012"
            },
            "primerNombre": "Daniel",
            "primerApellido": "Flores"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c014"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c013"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-07-31T00:00:00Z"
        },
        "metodoPago": "Tarjeta de debito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c012"
            },
            "primerNombre": "Daniel",
            "primerApellido": "Flores"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c015"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c014"
        },
        "monto": 4.99,
        "fechaPago": {
            "$date": "2023-08-14T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c013"
            },
            "primerNombre": "Isabella",
            "primerApellido": "Soto"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c016"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c015"
        },
        "monto": 13.99,
        "fechaPago": {
            "$date": "2023-10-07T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c015"
            },
            "primerNombre": "Camila",
            "primerApellido": "Ortega"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c017"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c016"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2023-11-19T00:00:00Z"
        },
        "metodoPago": "Paypal",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c016"
            },
            "primerNombre": "Sebastián",
            "primerApellido": "Vásquez"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c018"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c017"
        },
        "monto": 4.99,
        "fechaPago": {
            "$date": "2024-01-08T00:00:00Z"
        },
        "metodoPago": "Tarjeta de debito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c017"
            },
            "primerNombre": "Natalia",
            "primerApellido": "Castro"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c019"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c018"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2025-01-09T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c017"
            },
            "primerNombre": "Natalia",
            "primerApellido": "Castro"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c020"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c019"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-02-14T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c018"
            },
            "primerNombre": "Josué",
            "primerApellido": "Paredes"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c021"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c019"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2025-02-14T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Pendiente",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c018"
            },
            "primerNombre": "Josué",
            "primerApellido": "Paredes"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c022"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c021"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2024-06-01T00:00:00Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Fallido",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c014"
            },
            "primerNombre": "Miguel",
            "primerApellido": "Hernández"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c023"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c025"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2026-05-30T20:13:54.003Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c006"
            },
            "primerNombre": "Mario",
            "primerApellido": "López"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c024"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c026"
        },
        "monto": 14.99,
        "fechaPago": {
            "$date": "2026-05-30T20:13:54.063Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Fallido",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c007"
            },
            "primerNombre": "Sofia",
            "primerApellido": "Quiroz"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c025"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c027"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2026-05-30T20:13:54.120Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c008"
            },
            "primerNombre": "Carlos",
            "primerApellido": "Ramírez"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c026"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c028"
        },
        "monto": 1.00,
        "fechaPago": {
            "$date": "2026-05-30T20:13:54.187Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Fallido",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c008"
            },
            "primerNombre": "Carlos",
            "primerApellido": "Ramírez"
        }
    },
    {
        "pagoId": {
            "$oid": "65f8c2b3c4d5e6f7a8b9c027"
        },
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c029"
        },
        "monto": 9.99,
        "fechaPago": {
            "$date": "2026-05-31T04:43:41.503Z"
        },
        "metodoPago": "Tarjeta de credito",
        "resultadoPago": "Completado",
        "usuario": {
            "usuarioId": {
                "$oid": "65f1a2b3c4d5e6f7a8b9c021"
            },
            "primerNombre": "Adrian",
            "primerApellido": "Freire"
        }
    }
]);
db.Plan.insertMany([
    {
        "planId": 1,
        "nombrePlan": "Free",
        "precio": 0.00,
        "duracion": "Mensual",
        "descripcionPlan": "Plan gratuito con anuncios y calidad estándar"
    },
    {
        "planId": 2,
        "nombrePlan": "Individual",
        "precio": 9.99,
        "duracion": "Mensual",
        "descripcionPlan": "Plan individual sin anuncios, alta calidad"
    },
    {
        "planId": 3,
        "nombrePlan": "Duo",
        "precio": 13.99,
        "duracion": "Mensual",
        "descripcionPlan": "Plan para dos personas"
    },
    {
        "planId": 4,
        "nombrePlan": "Familiar",
        "precio": 17.99,
        "duracion": "Mensual",
        "descripcionPlan": "Plan para hasta 6 cuentas familiares"
    },
    {
        "planId": 5,
        "nombrePlan": "Estudiante",
        "precio": 4.99,
        "duracion": "Mensual",
        "descripcionPlan": "Plan con descuento para estudiantes verificados"
    }
]);
db.Playlist.insertMany([
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c001"
        },
        "nombrePlaylist": "Mis Favoritas",
        "descripcionPlaylist": "Canciones favoritas de todos los tiempos",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c006"
                },
                "nombreCancion": "She Don't Give a Fo"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c020"
                },
                "nombreCancion": "Despechá"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c021"
                },
                "nombreCancion": "Do I Wanna Know?"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c033"
                },
                "nombreCancion": "Me Porto Bonito"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c042"
                },
                "nombreCancion": "TQG"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c006"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            },
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c007"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Colaborador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c002"
        },
        "nombrePlaylist": "Workout Mix 2024",
        "descripcionPlaylist": "Playlist energética para el gimnasio",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c001"
                },
                "nombreCancion": "Rockstar"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c016"
                },
                "nombreCancion": "Saoko"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c022"
                },
                "nombreCancion": "R U Mine?"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c032"
                },
                "nombreCancion": "Tití Me Preguntó"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c046"
                },
                "nombreCancion": "Bichota"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c006"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c003"
        },
        "nombrePlaylist": "Tarde de Lluvia",
        "descripcionPlaylist": "Canciones tranquilas para días lluviosos",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Privada",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c013"
                },
                "nombreCancion": "Pienso en Tu Mirá"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c015"
                },
                "nombreCancion": "Bagdad"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c029"
                },
                "nombreCancion": "Body Paint"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c007"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c004"
        },
        "nombrePlaylist": "Fiesta Latina",
        "descripcionPlaylist": "Los mejores reggaetoneros para la fiesta",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Colaborativa",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c031"
                },
                "nombreCancion": "Moscow Mule"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c033"
                },
                "nombreCancion": "Me Porto Bonito"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c041"
                },
                "nombreCancion": "PROVENZA"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c042"
                },
                "nombreCancion": "TQG"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c049"
                },
                "nombreCancion": "Mi Cama"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c008"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            },
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c009"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Colaborador"
            },
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c010"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Colaborador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c005"
        },
        "nombrePlaylist": "Indie Vibes",
        "descripcionPlaylist": "Lo mejor del indie y rock alternativo",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c021"
                },
                "nombreCancion": "Do I Wanna Know?"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c025"
                },
                "nombreCancion": "Why'd You Only Call Me When You're High?"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c026"
                },
                "nombreCancion": "There'd Better Be a Mirrorball"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c011"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c006"
        },
        "nombrePlaylist": "Top Hits Globales",
        "descripcionPlaylist": "Las canciones más escuchadas del mundo",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Colaborativa",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c020"
                },
                "nombreCancion": "Despechá"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c021"
                },
                "nombreCancion": "Do I Wanna Know?"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c033"
                },
                "nombreCancion": "Me Porto Bonito"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c037"
                },
                "nombreCancion": "WHERE SHE GOES"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c042"
                },
                "nombreCancion": "TQG"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c012"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            },
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c013"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Colaborador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c007"
        },
        "nombrePlaylist": "Estudio Profundo",
        "descripcionPlaylist": "Música instrumental y ambiental para estudiar",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Privada",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c015"
                },
                "nombreCancion": "Bagdad"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c030"
                },
                "nombreCancion": "The Car"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c015"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c008"
        },
        "nombrePlaylist": "Trap en Español",
        "descripcionPlaylist": "Lo mejor del trap y rap en castellano",
        "fechaCreacion": {
            "$date": "2026-05-30T20:07:15.197Z"
        },
        "tipoVisibilidad": "Publica",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c001"
                },
                "nombreCancion": "Rockstar"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c006"
                },
                "nombreCancion": "She Don't Give a Fo"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c007"
                },
                "nombreCancion": "Goteo"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c009"
                },
                "nombreCancion": "Luna Llena"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c036"
                },
                "nombreCancion": "EL APAGÓN"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c016"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            },
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c018"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Colaborador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c009"
        },
        "nombrePlaylist": "Mis favoritas",
        "descripcionPlaylist": "Canciones que escucho todos los días",
        "fechaCreacion": {
            "$date": "2026-05-30T20:12:47.687Z"
        },
        "tipoVisibilidad": "Privada",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c006"
                },
                "fechaUnion": {
                    "$date": "2026-05-30T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    },
    {
        "playlistId": {
            "$oid": "65f3e2b3c4d5e6f7a8b9c010"
        },
        "nombrePlaylist": "Canciones para bailar",
        "descripcionPlaylist": "Canciones para una fiesta",
        "fechaCreacion": {
            "$date": "2026-05-31T04:40:05.493Z"
        },
        "tipoVisibilidad": "Privada",
        "tipoPlaylist": "Personal",
        "duracionTotal": 0,
        "canciones": [
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c011"
                },
                "nombreCancion": "Malamente"
            },
            {
                "cancionId": {
                    "$oid": "65f5e2b3c4d5e6f7a8b9c037"
                },
                "nombreCancion": "WHERE SHE GOES"
            }
        ],
        "colaboradores": [
            {
                "userId": {
                    "$oid": "65f1a2b3c4d5e6f7a8b9c021"
                },
                "fechaUnion": {
                    "$date": "2026-05-31T00:00:00Z"
                },
                "rolPlaylist": "Creador"
            }
        ]
    }
]);
db.Regalias.insertMany([
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c001"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 4,
        "montoTotalGenerado": 0.02,
        "montoArtista": 0.01,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c002"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 3,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.01,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c003"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 3,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c004"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "México",
        "cantidadReproducciones": 4,
        "montoTotalGenerado": 0.02,
        "montoArtista": 0.01,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c005"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Colombia",
        "cantidadReproducciones": 3,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c046"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Colombia",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Perú",
        "cantidadReproducciones": 3,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Chile",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Venezuela",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c037"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-03",
        "paisReproduccion": "Colombia",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c014"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Colombia",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "México",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c018"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Perú",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c019"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-04",
        "paisReproduccion": "Chile",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c020"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 2,
        "montoTotalGenerado": 0.01,
        "montoArtista": 0.00,
        "montoDiscografica": 0.01,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c021"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c022"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "Ecuador",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c023"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "Colombia",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c024"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "México",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    },
    {
        "regaliaId": {
            "$oid": "65f2a2b3c4d5e6f7a8b9c025"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c022"
        },
        "artistaId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "contratoId": null,
        "periodo": "2024-05",
        "paisReproduccion": "Perú",
        "cantidadReproducciones": 1,
        "montoTotalGenerado": 0.00,
        "montoArtista": 0.00,
        "montoDiscografica": 0.00,
        "fechaCalculo": {
            "$date": "2026-06-13T00:00:00Z"
        }
    }
]);
db.Reproduccion.insertMany([
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c005"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2024-03-02T20:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c112"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:13:53.960Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 60,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c013"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c006"
        },
        "fechaHora": {
            "$date": "2024-03-08T22:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 223,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c014"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "fechaHora": {
            "$date": "2024-03-09T15:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 226,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c007"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2024-03-03T17:30:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 80,
        "fueSaltada": true
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c118"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 137,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c119"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 137,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c120"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 137,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c113"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 193,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c114"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 193,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c115"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 193,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c116"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 193,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c117"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:15:05.010Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 193,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c009"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaHora": {
            "$date": "2024-03-04T21:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 148,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c001"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-03-01T08:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c078"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-04-03T10:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c089"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-05-05T08:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c101"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:12:47.847Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 300,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c103"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2026-03-10T08:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c105"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2026-03-20T14:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c002"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c022"
        },
        "fechaHora": {
            "$date": "2024-03-01T08:06:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 203,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c010"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "fechaHora": {
            "$date": "2024-03-05T08:15:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 163,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c006"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "fechaHora": {
            "$date": "2024-03-03T09:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 355,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c015"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c032"
        },
        "fechaHora": {
            "$date": "2024-03-10T11:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 248,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c003"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-03-01T18:30:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c076"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-04-01T08:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c090"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-05-06T09:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c011"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c037"
        },
        "fechaHora": {
            "$date": "2024-03-06T19:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 175,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c008"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-03-04T12:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c004"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-03-02T07:45:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c077"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-04-02T09:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c012"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c046"
        },
        "fechaHora": {
            "$date": "2024-03-07T10:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 194,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c017"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c011"
        },
        "fechaHora": {
            "$date": "2024-03-02T09:30:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 183,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c016"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "fechaHora": {
            "$date": "2024-03-01T20:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 226,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c091"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "fechaHora": {
            "$date": "2024-05-05T20:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 226,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c018"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2024-03-03T18:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 156,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c021"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2024-03-06T20:30:00Z"
        },
        "pais": "España",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c022"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c018"
        },
        "fechaHora": {
            "$date": "2024-03-07T12:00:00Z"
        },
        "pais": "España",
        "duracionEscuchada": 136,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c023"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c019"
        },
        "fechaHora": {
            "$date": "2024-03-08T11:00:00Z"
        },
        "pais": "España",
        "duracionEscuchada": 60,
        "fueSaltada": true
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c019"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaHora": {
            "$date": "2024-03-04T22:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 148,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c079"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaHora": {
            "$date": "2024-04-01T20:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 148,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c104"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2026-03-11T09:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 300,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c024"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-03-09T10:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c020"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-03-05T07:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c080"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-04-02T21:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c025"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c044"
        },
        "fechaHora": {
            "$date": "2024-03-10T19:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 185,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c031"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2024-03-06T10:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c032"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c007"
        },
        "fechaHora": {
            "$date": "2024-03-07T22:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 195,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c035"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-03-10T18:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c102"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2026-05-30T20:12:47.897Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 45,
        "fueSaltada": true
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c026"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "fechaHora": {
            "$date": "2024-03-01T21:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 355,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c092"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "fechaHora": {
            "$date": "2024-05-05T21:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 355,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c027"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c032"
        },
        "fechaHora": {
            "$date": "2024-03-02T08:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 248,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c028"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-03-03T19:30:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c081"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-04-01T19:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c106"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2026-03-12T10:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c029"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c036"
        },
        "fechaHora": {
            "$date": "2024-03-04T20:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 476,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c030"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c037"
        },
        "fechaHora": {
            "$date": "2024-03-05T17:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 175,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c082"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c037"
        },
        "fechaHora": {
            "$date": "2024-04-02T20:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 175,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c033"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c046"
        },
        "fechaHora": {
            "$date": "2024-03-08T12:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 194,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c034"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c047"
        },
        "fechaHora": {
            "$date": "2024-03-09T11:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 218,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c042"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2024-03-07T22:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 70,
        "fueSaltada": true
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c043"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c031"
        },
        "fechaHora": {
            "$date": "2024-03-08T15:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 355,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c041"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-03-06T07:30:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c107"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2026-03-13T11:00:00Z"
        },
        "pais": "Colombia",
        "duracionEscuchada": 150,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c036"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-03-01T09:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c084"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-04-02T08:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c037"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-03-02T10:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c083"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-04-01T07:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c093"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-05-05T07:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c038"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c043"
        },
        "fechaHora": {
            "$date": "2024-03-03T11:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 210,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c039"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c044"
        },
        "fechaHora": {
            "$date": "2024-03-04T18:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 185,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c040"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c045"
        },
        "fechaHora": {
            "$date": "2024-03-05T20:00:00Z"
        },
        "pais": "México",
        "duracionEscuchada": 228,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c044"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-03-01T14:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c085"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-04-01T14:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c045"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c022"
        },
        "fechaHora": {
            "$date": "2024-03-02T15:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 203,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c094"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c022"
        },
        "fechaHora": {
            "$date": "2024-05-05T14:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 203,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c046"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c023"
        },
        "fechaHora": {
            "$date": "2024-03-03T16:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 237,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c047"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c024"
        },
        "fechaHora": {
            "$date": "2024-03-04T17:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 212,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c048"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "fechaHora": {
            "$date": "2024-03-05T18:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 163,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c049"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c026"
        },
        "fechaHora": {
            "$date": "2024-03-06T19:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 303,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c050"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c027"
        },
        "fechaHora": {
            "$date": "2024-03-07T20:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 254,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c108"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2026-03-14T12:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c056"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c011"
        },
        "fechaHora": {
            "$date": "2024-03-06T16:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 183,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c054"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c013"
        },
        "fechaHora": {
            "$date": "2024-03-04T14:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 226,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c055"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c015"
        },
        "fechaHora": {
            "$date": "2024-03-05T15:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 391,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c051"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-03-01T11:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c095"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c021"
        },
        "fechaHora": {
            "$date": "2024-05-05T11:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 341,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c052"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "fechaHora": {
            "$date": "2024-03-02T12:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 163,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c086"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c025"
        },
        "fechaHora": {
            "$date": "2024-04-01T11:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 163,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c053"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c026"
        },
        "fechaHora": {
            "$date": "2024-03-03T13:00:00Z"
        },
        "pais": "Chile",
        "duracionEscuchada": 303,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c109"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2026-03-15T13:00:00Z"
        },
        "pais": "Perú",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c057"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2024-03-01T09:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c110"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2026-03-22T15:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c058"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c006"
        },
        "fechaHora": {
            "$date": "2024-03-02T10:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 223,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c096"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c006"
        },
        "fechaHora": {
            "$date": "2024-05-05T09:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 223,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c059"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c007"
        },
        "fechaHora": {
            "$date": "2024-03-03T11:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 195,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c087"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c007"
        },
        "fechaHora": {
            "$date": "2024-04-01T09:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 195,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c060"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c009"
        },
        "fechaHora": {
            "$date": "2024-03-04T12:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 205,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c064"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2024-03-04T09:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c111"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2026-03-25T16:00:00Z"
        },
        "pais": "Venezuela",
        "duracionEscuchada": 100,
        "fueSaltada": true
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c061"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-03-01T20:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c088"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c042"
        },
        "fechaHora": {
            "$date": "2024-04-01T20:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 186,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c062"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c043"
        },
        "fechaHora": {
            "$date": "2024-03-02T21:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 210,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c063"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c044"
        },
        "fechaHora": {
            "$date": "2024-03-03T22:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 185,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c097"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c044"
        },
        "fechaHora": {
            "$date": "2024-05-05T20:00:00Z"
        },
        "pais": "Argentina",
        "duracionEscuchada": 185,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c065"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2024-03-05T18:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 156,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c098"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c016"
        },
        "fechaHora": {
            "$date": "2024-05-05T18:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 156,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c066"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c017"
        },
        "fechaHora": {
            "$date": "2024-03-06T19:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c067"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c020"
        },
        "fechaHora": {
            "$date": "2024-03-07T20:00:00Z"
        },
        "pais": "Ecuador",
        "duracionEscuchada": 148,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c068"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c001"
        },
        "fechaHora": {
            "$date": "2024-03-01T10:00:00Z"
        },
        "pais": "Bolivia",
        "duracionEscuchada": 198,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c069"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c002"
        },
        "fechaHora": {
            "$date": "2024-03-02T11:00:00Z"
        },
        "pais": "Bolivia",
        "duracionEscuchada": 204,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c099"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c002"
        },
        "fechaHora": {
            "$date": "2024-05-05T11:00:00Z"
        },
        "pais": "Bolivia",
        "duracionEscuchada": 204,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c070"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c006"
        },
        "fechaHora": {
            "$date": "2024-03-03T12:00:00Z"
        },
        "pais": "Bolivia",
        "duracionEscuchada": 223,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c071"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-03-01T08:00:00Z"
        },
        "pais": "Uruguay",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c100"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c041"
        },
        "fechaHora": {
            "$date": "2024-05-05T08:00:00Z"
        },
        "pais": "Uruguay",
        "duracionEscuchada": 207,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c072"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c045"
        },
        "fechaHora": {
            "$date": "2024-03-02T09:00:00Z"
        },
        "pais": "Uruguay",
        "duracionEscuchada": 228,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c073"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c046"
        },
        "fechaHora": {
            "$date": "2024-03-03T10:00:00Z"
        },
        "pais": "Uruguay",
        "duracionEscuchada": 194,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c074"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c033"
        },
        "fechaHora": {
            "$date": "2024-03-01T22:00:00Z"
        },
        "pais": "Paraguay",
        "duracionEscuchada": 178,
        "fueSaltada": false
    },
    {
        "reproduccionId": {
            "$oid": "65fa12b3c4d5e6f7a8b9c075"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "cancionId": {
            "$oid": "65f5e2b3c4d5e6f7a8b9c034"
        },
        "fechaHora": {
            "$date": "2024-03-02T23:00:00Z"
        },
        "pais": "Paraguay",
        "duracionEscuchada": 314,
        "fueSaltada": false
    }
]);
db.Suscripcion.insertMany([
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c001"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "fechaInicio": {
            "$date": "2023-01-15T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-01-15T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c002"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "fechaInicio": {
            "$date": "2024-01-16T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-01-16T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c003"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "fechaInicio": {
            "$date": "2023-02-20T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-02-20T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c003"
            },
            "nombrePlan": "Duo",
            "precio": 13.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c004"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "fechaInicio": {
            "$date": "2024-02-21T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-02-21T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c005"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "fechaInicio": {
            "$date": "2023-03-10T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-03-10T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c005"
            },
            "nombrePlan": "Estudiante",
            "precio": 4.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c006"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "fechaInicio": {
            "$date": "2024-03-11T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-03-11T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c007"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "fechaInicio": {
            "$date": "2023-04-05T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-04-05T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c004"
            },
            "nombrePlan": "Familiar",
            "precio": 17.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c008"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "fechaInicio": {
            "$date": "2024-04-06T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-04-06T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c004"
            },
            "nombrePlan": "Familiar",
            "precio": 17.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c009"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "fechaInicio": {
            "$date": "2023-05-18T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-05-18T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c005"
            },
            "nombrePlan": "Estudiante",
            "precio": 4.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c010"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "fechaInicio": {
            "$date": "2024-05-19T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-05-19T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c011"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "fechaInicio": {
            "$date": "2023-06-22T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-06-22T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c012"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "fechaInicio": {
            "$date": "2023-07-30T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-07-30T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c001"
            },
            "nombrePlan": "Free",
            "precio": 0.00
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c013"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "fechaInicio": {
            "$date": "2024-07-31T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-07-31T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c014"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "fechaInicio": {
            "$date": "2023-08-14T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-08-14T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c005"
            },
            "nombrePlan": "Estudiante",
            "precio": 4.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c015"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "fechaInicio": {
            "$date": "2023-10-07T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-10-07T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c003"
            },
            "nombrePlan": "Duo",
            "precio": 13.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c016"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "fechaInicio": {
            "$date": "2023-11-19T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-11-19T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c017"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "fechaInicio": {
            "$date": "2024-01-08T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2025-01-08T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c005"
            },
            "nombrePlan": "Estudiante",
            "precio": 4.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c018"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "fechaInicio": {
            "$date": "2025-01-09T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-01-09T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c019"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "fechaInicio": {
            "$date": "2024-02-14T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-02-14T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c020"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "fechaInicio": {
            "$date": "2026-05-30T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-06-02T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c021"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c014"
        },
        "fechaInicio": {
            "$date": "2024-06-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-12-31T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c022"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "fechaInicio": {
            "$date": "2024-07-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2024-12-31T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c003"
            },
            "nombrePlan": "Duo",
            "precio": 13.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c023"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c014"
        },
        "fechaInicio": {
            "$date": "2026-05-30T00:00:00Z"
        },
        "fechaFin": {
            "$date": "9999-12-31T00:00:00Z"
        },
        "estadoSuscripcion": "activa",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c001"
            },
            "nombrePlan": "Free",
            "precio": 0.00
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c024"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "fechaInicio": {
            "$date": "2026-05-30T00:00:00Z"
        },
        "fechaFin": {
            "$date": "9999-12-31T00:00:00Z"
        },
        "estadoSuscripcion": "activa",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c001"
            },
            "nombrePlan": "Free",
            "precio": 0.00
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c025"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "fechaInicio": {
            "$date": "2026-04-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-05-01T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c026"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "fechaInicio": {
            "$date": "2026-04-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-05-01T00:00:00Z"
        },
        "estadoSuscripcion": "inactiva",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c003"
            },
            "nombrePlan": "Duo",
            "precio": 13.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c027"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "fechaInicio": {
            "$date": "2026-04-01T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-05-01T00:00:00Z"
        },
        "estadoSuscripcion": "cancelada",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c028"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "fechaInicio": {
            "$date": "2026-05-30T00:00:00Z"
        },
        "fechaFin": {
            "$date": "9999-12-31T00:00:00Z"
        },
        "estadoSuscripcion": "activa",
        "renovacionAutomatica": false,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c001"
            },
            "nombrePlan": "Free",
            "precio": 0.00
        }
    },
    {
        "suscripcionId": {
            "$oid": "65f3c2b3c4d5e6f7a8b9c029"
        },
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c021"
        },
        "fechaInicio": {
            "$date": "2026-05-31T00:00:00Z"
        },
        "fechaFin": {
            "$date": "2026-06-30T00:00:00Z"
        },
        "estadoSuscripcion": "activa",
        "renovacionAutomatica": true,
        "plan": {
            "planId": {
                "$oid": "65f2c2b3c4d5e6f7a8b9c002"
            },
            "nombrePlan": "Individual",
            "precio": 9.99
        }
    }
]);
db.Usuarios.insertMany([
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c001"
        },
        "cedulaUsuario": "1700000001",
        "primerNombre": "Mauro",
        "primerApellido": "Lombardo",
        "correo": "duki@ecualizer.com",
        "contrasena": "$2a$10$aK9Lm1XqZ8vN3pR7sT2uO",
        "fechaRegistro": {
            "$date": "2022-01-01T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "artista",
        "perfilArtista": {
            "nombreArtistico": "Duki",
            "biografia": "Mauro Ezequiel Lombardo, conocido como Duki, es un rapero y cantante argentino pionero del trap latino en Latinoamérica. Inició su carrera en 2016 y rápidamente se convirtió en referente del género."
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c002"
        },
        "cedulaUsuario": "1700000002",
        "primerNombre": "Rosalía",
        "primerApellido": "Vila",
        "correo": "rosalia@ecualizer.com",
        "contrasena": "$2a$10$bL0Mn2YrA9wO4qS8tU3vP",
        "fechaRegistro": {
            "$date": "2022-01-02T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "artista",
        "perfilArtista": {
            "nombreArtistico": "Rosalía",
            "biografia": "Rosalía Vila Tobella es una cantante y compositora española que fusiona el flamenco tradicional con genres urbanos contemporáneos. Ganadora de múltiples Grammy Latinos."
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c003"
        },
        "cedulaUsuario": "1700000003",
        "primerNombre": "Alex",
        "primerApellido": "Turner",
        "correo": "arcticmonkeys@ecualizer.com",
        "contrasena": "$2a$10$cM1No3ZsB0xP5rT9uV4wQ",
        "fechaRegistro": {
            "$date": "2022-01-03T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "artista",
        "perfilArtista": {
            "nombreArtistico": "Arctic Monkeys",
            "biografia": "Banda de rock alternativo originaria de Sheffield, Inglaterra, formada en 2002. Conocidos por álbumes icónicos como AM y Whatever People Say I Am, That s What I m Not."
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c004"
        },
        "cedulaUsuario": "1700000004",
        "primerNombre": "Benito",
        "primerApellido": "Martínez",
        "correo": "badbunny@ecualizer.com",
        "contrasena": "$2a$10$dN2Op4AtC1yQ6sU0vW5xR",
        "fechaRegistro": {
            "$date": "2022-01-04T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "artista",
        "perfilArtista": {
            "nombreArtistico": "Bad Bunny",
            "biografia": "Benito Antonio Martínez Ocasio, conocido como Bad Bunny, es un cantante y compositor puertorriqueño. Es uno de los artistas de reggaeton y trap latino más influyentes del mundo."
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c005"
        },
        "cedulaUsuario": "1700000005",
        "primerNombre": "Carolina",
        "primerApellido": "Giraldo",
        "correo": "karolg@ecualizer.com",
        "contrasena": "$2a$10$eO3Pq5BuD2zA7tV1wX6yS",
        "fechaRegistro": {
            "$date": "2022-01-05T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "artista",
        "perfilArtista": {
            "nombreArtistico": "Karol G",
            "biografia": "Carolina Giraldo Navarro, conocida como Karol G, es una cantante colombiana de música urbana y reggaeton. Ha sido reconocida como una de las artistas femeninas más importantes del género."
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "cedulaUsuario": "1700000006",
        "primerNombre": "Mario",
        "primerApellido": "López",
        "correo": "mario.lp@gmail.com",
        "contrasena": "$2a$10$uE9Fg1RkS8PQ3JL4HM5NC",
        "fechaRegistro": {
            "$date": "2023-01-15T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "mario.lp",
            "paisUsuario": "Ecuador",
            "fechaNacimiento": {
                "$date": "2001-03-15T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "cedulaUsuario": "1700000007",
        "primerNombre": "Sofia",
        "primerApellido": "Quiroz",
        "correo": "sofia.qs@hotmail.com",
        "contrasena": "$2a$10$gQ5Rs7DwF4BC9vX3yZ8AU",
        "fechaRegistro": {
            "$date": "2023-02-20T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "sofia.qs",
            "paisUsuario": "Ecuador",
            "fechaNacimiento": {
                "$date": "1999-07-22T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "cedulaUsuario": "1700000008",
        "primerNombre": "Carlos",
        "primerApellido": "Ramírez",
        "correo": "carlos.rm@gmail.com",
        "contrasena": "$2a$10$hR6St8ExG5CD0wY4zA9BV",
        "fechaRegistro": {
            "$date": "2023-03-10T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "carlos.rm",
            "paisUsuario": "Colombia",
            "fechaNacimiento": {
                "$date": "2000-11-05T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "cedulaUsuario": "1700000009",
        "primerNombre": "Lucía",
        "primerApellido": "Vargas",
        "correo": "lucia.va@outlook.com",
        "contrasena": "$2a$10$iS7Tu9FyH6DE1xZ5AB0CW",
        "fechaRegistro": {
            "$date": "2023-04-05T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "lucia.va",
            "paisUsuario": "México",
            "fechaNacimiento": {
                "$date": "1998-04-30T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "cedulaUsuario": "1700000010",
        "primerNombre": "Andrés",
        "primerApellido": "Torres",
        "correo": "andres.tp@gmail.com",
        "contrasena": "$2a$10$jT8Uv0GzI7EF2yA6BC1DX",
        "fechaRegistro": {
            "$date": "2023-05-18T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "andres.tp",
            "paisUsuario": "Perú",
            "fechaNacimiento": {
                "$date": "2003-09-12T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "cedulaUsuario": "1700000011",
        "primerNombre": "Valeria",
        "primerApellido": "García",
        "correo": "valeria.gm@gmail.com",
        "contrasena": "$2a$10$kU9Vw1HaJ8FG3zB7CD2EY",
        "fechaRegistro": {
            "$date": "2023-06-22T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "valeria.gm",
            "paisUsuario": "Chile",
            "fechaNacimiento": {
                "$date": "1997-06-18T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "cedulaUsuario": "1700000012",
        "primerNombre": "Daniel",
        "primerApellido": "Flores",
        "correo": "daniel.fc@yahoo.com",
        "contrasena": "$2a$10$lV0Wx2IbK9GH4AC8DE3FZ",
        "fechaRegistro": {
            "$date": "2023-07-30T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "daniel.fc",
            "paisUsuario": "Venezuela",
            "fechaNacimiento": {
                "$date": "2002-01-25T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "cedulaUsuario": "1700000013",
        "primerNombre": "Isabella",
        "primerApellido": "Soto",
        "correo": "isabella.sr@gmail.com",
        "contrasena": "$2a$10$mW1Xy3JcL0HI5BD9EF4GA",
        "fechaRegistro": {
            "$date": "2023-08-14T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "isabella.sr",
            "paisUsuario": "Argentina",
            "fechaNacimiento": {
                "$date": "2000-12-08T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c014"
        },
        "cedulaUsuario": "1700000014",
        "primerNombre": "Miguel",
        "primerApellido": "Hernández",
        "correo": "miguel.hn@gmail.com",
        "contrasena": "$2a$10$nX2Yz4KdM1IJ6CE0FG5HB",
        "fechaRegistro": {
            "$date": "2023-09-01T00:00:00Z"
        },
        "estado": "inactivo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "miguel.hn",
            "paisUsuario": "España",
            "fechaNacimiento": {
                "$date": "1995-05-14T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "cedulaUsuario": "1700000015",
        "primerNombre": "Camila",
        "primerApellido": "Ortega",
        "correo": "camila.or@hotmail.com",
        "contrasena": "$2a$10$oY3Za5LeN2JK7DF1GH6IC",
        "fechaRegistro": {
            "$date": "2023-10-07T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "camila.or",
            "paisUsuario": "Ecuador",
            "fechaNacimiento": {
                "$date": "2001-08-27T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "cedulaUsuario": "1700000016",
        "primerNombre": "Sebastián",
        "primerApellido": "Vásquez",
        "correo": "sebastian.vz@gmail.com",
        "contrasena": "$2a$10$pZ4Ab6MfO3KL8EG2HI7JD",
        "fechaRegistro": {
            "$date": "2023-11-19T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "sebastian.vz",
            "paisUsuario": "Bolivia",
            "fechaNacimiento": {
                "$date": "1999-02-03T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "cedulaUsuario": "1700000017",
        "primerNombre": "Natalia",
        "primerApellido": "Castro",
        "correo": "natalia.cb@gmail.com",
        "contrasena": "$2a$10$qA5Bc7NgP4LM9FH3IJ8KE",
        "fechaRegistro": {
            "$date": "2024-01-08T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "natalia.cb",
            "paisUsuario": "Uruguay",
            "fechaNacimiento": {
                "$date": "2004-10-19T00:00:00Z"
            },
            "genero": "F",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "cedulaUsuario": "1700000018",
        "primerNombre": "Josué",
        "primerApellido": "Paredes",
        "correo": "josue.pm@outlook.com",
        "contrasena": "$2a$10$rB6Cd8OhQ5MN0GI4JK9LF",
        "fechaRegistro": {
            "$date": "2024-02-14T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "josue.pm",
            "paisUsuario": "Paraguay",
            "fechaNacimiento": {
                "$date": "1996-07-31T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c019"
        },
        "cedulaUsuario": "1700000019",
        "primerNombre": "Admin",
        "primerApellido": "General",
        "correo": "admin.general@ecualizer.com",
        "contrasena": "$2a$10$sC7De9PiR6NO1HJ5KL0MG",
        "fechaRegistro": {
            "$date": "2022-01-01T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "admin",
        "perfilAdmin": {
            "rolAdmin": "Administrador general",
            "departamento": "Tecnología"
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c020"
        },
        "cedulaUsuario": "1700000020",
        "primerNombre": "Admin",
        "primerApellido": "Contenido",
        "correo": "admin.content@ecualizer.com",
        "contrasena": "$2a$10$tD8Ef0QjS7OP2IK6LM1NH",
        "fechaRegistro": {
            "$date": "2022-01-01T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "admin",
        "perfilAdmin": {
            "rolAdmin": "Moderador de contenido",
            "departamento": "Contenido"
        }
    },
    {
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c021"
        },
        "cedulaUsuario": "1753494036",
        "primerNombre": "Adrian",
        "primerApellido": "Freire",
        "correo": "adrianfreire05@gmail.com",
        "contrasena": "pbkdf2_sha256$600000$W1axvHnpbULvlkLxXlAwgr$b\/1UiOfWr\/AecSxW+UwyYvBRnUmsYQd9cHr5es8bjfU=",
        "fechaRegistro": {
            "$date": "2026-05-30T00:00:00Z"
        },
        "estado": "activo",
        "tipoUsuario": "oyente",
        "perfilOyente": {
            "alias": "adrianfreire05",
            "paisUsuario": "Ecuador",
            "fechaNacimiento": {
                "$date": "2005-10-02T00:00:00Z"
            },
            "genero": "M",
            "artistasSeguidos": []
        }
    }
]);
db.usuario_album_guardado.insertMany([
    {
        "albumGuardadoId": 1,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b007"
        },
        "tituloAlbum": "Un Verano Sin Ti",
        "artistaNombre": "Bad Bunny",
        "fechaGuardado": {
            "$date": "2024-01-05T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 2,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c006"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b009"
        },
        "tituloAlbum": "MAÑANA SERÁ BONITO",
        "artistaNombre": "Karol G",
        "fechaGuardado": {
            "$date": "2024-01-20T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 3,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b003"
        },
        "tituloAlbum": "El Mal Querer",
        "artistaNombre": "Rosalía",
        "fechaGuardado": {
            "$date": "2024-02-10T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 4,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c007"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b004"
        },
        "tituloAlbum": "MOTOMAMI",
        "artistaNombre": "Rosalía",
        "fechaGuardado": {
            "$date": "2024-02-11T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 5,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b007"
        },
        "tituloAlbum": "Un Verano Sin Ti",
        "artistaNombre": "Bad Bunny",
        "fechaGuardado": {
            "$date": "2024-02-15T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 6,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c008"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b008"
        },
        "tituloAlbum": "nadie sabe lo que va a pasar mañana",
        "artistaNombre": "Bad Bunny",
        "fechaGuardado": {
            "$date": "2024-03-01T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 7,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b009"
        },
        "tituloAlbum": "MAÑANA SERÁ BONITO",
        "artistaNombre": "Karol G",
        "fechaGuardado": {
            "$date": "2024-03-05T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 8,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c009"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b010"
        },
        "tituloAlbum": "Bichota Season",
        "artistaNombre": "Karol G",
        "fechaGuardado": {
            "$date": "2024-03-06T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 9,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b005"
        },
        "tituloAlbum": "AM",
        "artistaNombre": "Arctic Monkeys",
        "fechaGuardado": {
            "$date": "2024-03-10T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 10,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c010"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b006"
        },
        "tituloAlbum": "The Car",
        "artistaNombre": "Arctic Monkeys",
        "fechaGuardado": {
            "$date": "2024-03-11T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 11,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c011"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b005"
        },
        "tituloAlbum": "AM",
        "artistaNombre": "Arctic Monkeys",
        "fechaGuardado": {
            "$date": "2024-04-01T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 12,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b001"
        },
        "tituloAlbum": "Super Sangre Joven",
        "artistaNombre": "Duki",
        "fechaGuardado": {
            "$date": "2024-04-05T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 13,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c012"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b002"
        },
        "tituloAlbum": "Desde el Fin del Mundo",
        "artistaNombre": "Duki",
        "fechaGuardado": {
            "$date": "2024-04-06T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 14,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c013"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b009"
        },
        "tituloAlbum": "MAÑANA SERÁ BONITO",
        "artistaNombre": "Karol G",
        "fechaGuardado": {
            "$date": "2024-04-10T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 15,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b004"
        },
        "tituloAlbum": "MOTOMAMI",
        "artistaNombre": "Rosalía",
        "fechaGuardado": {
            "$date": "2024-05-01T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 16,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c015"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b003"
        },
        "tituloAlbum": "El Mal Querer",
        "artistaNombre": "Rosalía",
        "fechaGuardado": {
            "$date": "2024-05-02T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 17,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b001"
        },
        "tituloAlbum": "Super Sangre Joven",
        "artistaNombre": "Duki",
        "fechaGuardado": {
            "$date": "2024-05-10T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 18,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c016"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b002"
        },
        "tituloAlbum": "Desde el Fin del Mundo",
        "artistaNombre": "Duki",
        "fechaGuardado": {
            "$date": "2024-05-11T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 19,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c017"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b009"
        },
        "tituloAlbum": "MAÑANA SERÁ BONITO",
        "artistaNombre": "Karol G",
        "fechaGuardado": {
            "$date": "2024-05-20T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 20,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c018"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b007"
        },
        "tituloAlbum": "Un Verano Sin Ti",
        "artistaNombre": "Bad Bunny",
        "fechaGuardado": {
            "$date": "2024-06-01T00:00:00Z"
        }
    },
    {
        "albumGuardadoId": 21,
        "usuarioId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9c021"
        },
        "albumId": {
            "$oid": "65f1a2b3c4d5e6f7a8b9b003"
        },
        "tituloAlbum": "El Mal Querer",
        "artistaNombre": "Rosalía",
        "fechaGuardado": {
            "$date": "2026-05-31T00:00:00Z"
        }
    }
]);

print("¡Éxito! Base de datos inicializada correctamente.");