// =====================================================================
// CONSULTAS FIND - BASE DE DATOS ECUALIZER
// =====================================================================

use("Ecualizer");

// =====================================================================
// CONSULTAS findOne  (UN solo documento)
// =====================================================================

// ---------------------------------------------------------------------
// findOne #1: Una canción de Reggaeton, activa, de máxima calidad y de
//             más de 180 segundos.
//   Condiciones: género Reggaeton + estado activa + calidad >= 320 (=)
//                + duración > 180 ($gt).
//   Proyección : se ocultan los arreglos "generos" y "artistas".
// ---------------------------------------------------------------------
print("FindOne #1: Canción de Reggaeton, activa, 320kbps y > 180s");
db.Cancion.findOne(
  {
    "generos.nombreGenero": "Reggaeton",
    estadoCancion: "activa",
    calidadKbps: { $gte: 320 },
    duracion: { $gt: 180 }
  },
  { generos: 0, artistas: 0 } // campos que NO se muestran
);

// ---------------------------------------------------------------------
// findOne #2: Un oyente, hombre, activo y residente en Ecuador.
//   Condiciones: tipoUsuario oyente + estado activo + país Ecuador
//                + género "M".
//   Proyección : se ocultan datos sensibles (contraseña y cédula).
// ---------------------------------------------------------------------
print("FindOne #2: Un oyente activo, hombre y de Ecuador");
db.Usuarios.findOne(
  {
    tipoUsuario: "oyente",
    estado: "activo",
    "perfilOyente.paisUsuario": "Ecuador",
    "perfilOyente.genero": "M"
  },
  { contrasena: 0, cedulaUsuario: 0 }
);

// ---------------------------------------------------------------------
// findOne #3: Un pago completado, con tarjeta de crédito y monto alto.
//   Condiciones: resultado Completado + método Tarjeta de credito
//                + monto >= 9.99 ($gte).
//   Proyección : solo se muestran monto, método y resultado.
// ---------------------------------------------------------------------
print("FindOne #3: Un pago completado con tarjeta de crédito >= 9.99");
db.Pagos.findOne(
  {
    resultadoPago: "Completado",
    metodoPago: "Tarjeta de credito",
    monto: { $gte: 9.99 }
  },
  { _id: 0, monto: 1, metodoPago: 1, resultadoPago: 1 }
);

// =====================================================================
// CONSULTAS find  (VARIOS documentos)
// =====================================================================

// ---------------------------------------------------------------------
// find #1: Canciones cuyo SEGUNDO género es "Hip Hop" (ejemplo de buscar
//          por una posición concreta del arreglo: generos.1).
//   Condiciones: 2do género Hip Hop ("generos.1.nombreGenero")
//                + estado activa + reproducciones > 50 millones ($gt).
//   Proyección : solo título, duración y reproducciones.
//   Orden      : reproducciones de mayor a menor (-1).
//   Resultado  : Rockstar, Loca, She Don't Give a Fo, EL APAGÓN.
// ---------------------------------------------------------------------
print("Find #1: Canciones con 'Hip Hop' como segundo género (> 50M reprod.)");
db.Cancion.find(
  {
    "generos.1.nombreGenero": "Hip Hop",
    estadoCancion: "activa",
    totalReproducciones: { $gt: 50000000 }
  },
  { _id: 0, tituloCancion: 1, duracion: 1, totalReproducciones: 1 }
).sort({ totalReproducciones: -1 });

// ---------------------------------------------------------------------
// find #2: Canciones que pertenecen A LA VEZ a los géneros "Reggaeton"
//          y "Latin Pop", usando el operador $all 
//   Condiciones: $all ["Reggaeton","Latin Pop"] + estado activa
//                + calidad >= 256 ($gte).
//   Proyección : solo título, géneros y calidad.
//   Orden      : por título alfabético (1).
//   Resultado  : Bichota, Me Porto Bonito, PROVENZA, TQG.
// ---------------------------------------------------------------------
print("Find #2: Canciones con géneros Reggaeton Y Latin Pop ($all)");
db.Cancion.find(
  {
    "generos.nombreGenero": { $all: ["Reggaeton", "Latin Pop"] },
    estadoCancion: "activa",
    calidadKbps: { $gte: 256 }
  },
  { _id: 0, tituloCancion: 1, "generos.nombreGenero": 1, calidadKbps: 1 }
).sort({ tituloCancion: 1 });

// ---------------------------------------------------------------------
// find #3: Reproducciones hechas FUERA de Ecuador, escuchadas completas
//          y de larga duración.
//   Condiciones: país != Ecuador ($ne) + no saltada (fueSaltada false)
//                + duración escuchada >= 180 ($gte).
//   Proyección : se ocultan _id, usuarioId y reproduccionId.
//   Orden      : duración escuchada de mayor a menor (-1).
// ---------------------------------------------------------------------
print("Find #3: Reproducciones fuera de Ecuador, no saltadas y >= 180s");
db.Reproduccion.find(
  {
    pais: { $ne: "Ecuador" },
    fueSaltada: false,
    duracionEscuchada: { $gte: 180 }
  },
  { _id: 0, usuarioId: 0, reproduccionId: 0 }
).sort({ duracionEscuchada: -1 });

// ---------------------------------------------------------------------
// find #4: Contratos vigentes favorables al artista.
//   Condiciones: estado Activo + porcentajeArtista >= 25 ($gte)
//                + porcentajeDiscografica <= 75 ($lte).
//   Proyección : estado, porcentajes y nombre del artista.
//   Orden      : porcentaje del artista de mayor a menor (-1).
//   Resultado  : contratos de Bad Bunny, Rosalía, Karol G y Arctic Monkeys.
// ---------------------------------------------------------------------
print("Find #4: Contratos activos con artista >= 25% y discográfica <= 75%");
db.ContratosDiscograficos.find(
  {
    estadoContrato: "Activo",
    porcentajeArtista: { $gte: 25 },
    porcentajeDiscografica: { $lte: 75 }
  },
  {
    _id: 0,
    estadoContrato: 1,
    porcentajeArtista: 1,
    porcentajeDiscografica: 1,
    "artistaAsociado.nombreArtistico": 1
  }
).sort({ porcentajeArtista: -1 });

// ---------------------------------------------------------------------
// find #5: Oyentes activos de varios países, usando el operador $in.
//   Condiciones: tipoUsuario oyente + estado activo
//                + país $in ["Ecuador","Colombia","México"].
//   Proyección : solo nombre, alias, país y fecha de registro.
//   Orden      : fecha de registro del más nuevo al más antiguo (-1).
// ---------------------------------------------------------------------
print("Find #5: Oyentes activos de Ecuador, Colombia o México ($in)");
db.Usuarios.find(
  {
    tipoUsuario: "oyente",
    estado: "activo",
    "perfilOyente.paisUsuario": { $in: ["Ecuador", "Colombia", "México"] }
  },
  {
    _id: 0,
    primerNombre: 1,
    "perfilOyente.alias": 1,
    "perfilOyente.paisUsuario": 1,
    fechaRegistro: 1
  }
).sort({ fechaRegistro: -1 });

print("¡Consultas Find ejecutadas correctamente!");
