// =====================================================================
// CONSULTAS LOOKUP - BASE DE DATOS ECUALIZER
// =====================================================================


use("Ecualizer");

// ---------------------------------------------------------------------
// lookup #1: Canciones muy populares JUNTO CON su álbum.
//   Unión      : Cancion.albumId  =  Albums.albumId
//   Condiciones: estado activa + reproducciones > 100 millones ($gt).
//   Proyección : título de la canción, reproducciones, título y artista
//                del álbum.
//   Orden      : reproducciones de mayor a menor (-1).
// ---------------------------------------------------------------------
print("Lookup #1: Canciones (> 100M) con su álbum");
db.Cancion.aggregate([
  {
    $match: {
      estadoCancion: "activa",
      totalReproducciones: { $gt: 100000000 }
    }
  },
  {
    $lookup: {
      from: "Albums",
      localField: "albumId",
      foreignField: "albumId",
      as: "album"
    }
  },
  { $unwind: "$album" }, // convierte el arreglo "album" en objeto
  {
    $project: {
      _id: 0,
      tituloCancion: 1,
      totalReproducciones: 1,
      "album.tituloAlbum": 1,
      "album.nombreArtistico": 1
    }
  },
  { $sort: { totalReproducciones: -1 } }
]);

// ---------------------------------------------------------------------
// lookup #2: Likes JUNTO CON la canción a la que pertenecen.
//   Unión      : Likes.cancionId  =  Cancion.cancionId
//   Proyección : usuario que dio el like, fecha y título de la canción.
//   Orden      : fecha del like más reciente primero (-1).
//   Límite     : 10 documentos.
// ---------------------------------------------------------------------
print("Lookup #2: Likes con el título de la canción");
db.Likes.aggregate([
  {
    $lookup: {
      from: "Cancion",
      localField: "cancionId",
      foreignField: "cancionId",
      as: "cancion"
    }
  },
  { $unwind: "$cancion" },
  {
    $project: {
      _id: 0,
      usuarioId: 1,
      fechaLike: 1,
      "cancion.tituloCancion": 1
    }
  },
  { $sort: { fechaLike: -1 } },
  { $limit: 10 }
]);

// ---------------------------------------------------------------------
// lookup #3: Suscripciones ACTIVAS JUNTO CON el nombre del usuario.
//   Unión      : Suscripcion.usuarioId  =  Usuarios.usuarioId
//   Condiciones: estado activa.
//   Proyección : estado, plan y nombre/apellido del usuario.
// ---------------------------------------------------------------------
print("Lookup #3: Suscripciones activas con su usuario");
db.Suscripcion.aggregate([
  { $match: { estadoSuscripcion: "activa" } },
  {
    $lookup: {
      from: "Usuarios",
      localField: "usuarioId",
      foreignField: "usuarioId",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      estadoSuscripcion: 1,
      "plan.nombrePlan": 1,
      "usuario.primerNombre": 1,
      "usuario.primerApellido": 1
    }
  }
]);

// ---------------------------------------------------------------------
// lookup #4: Pagos completados JUNTO CON los datos de su suscripción.
//   Unión      : Pagos.suscripcionId  =  Suscripcion.suscripcionId
//   Condiciones: resultado Completado.
//   Proyección : monto, fecha, nombre del usuario (embebido en el pago)
//                y plan de la suscripción.
//   Orden      : monto de mayor a menor (-1).
// ---------------------------------------------------------------------
print("Lookup #4: Pagos completados con el plan de su suscripción");
db.Pagos.aggregate([
  { $match: { resultadoPago: "Completado" } },
  {
    $lookup: {
      from: "Suscripcion",
      localField: "suscripcionId",
      foreignField: "suscripcionId",
      as: "suscripcion"
    }
  },
  { $unwind: "$suscripcion" },
  {
    $project: {
      _id: 0,
      monto: 1,
      fechaPago: 1,
      "usuario.primerNombre": 1,
      "suscripcion.plan.nombrePlan": 1
    }
  },
  { $sort: { monto: -1 } }
]);

// ---------------------------------------------------------------------
// lookup #5: Reproducciones en Ecuador JUNTO CON la canción escuchada.
//   Unión      : Reproduccion.cancionId  =  Cancion.cancionId
//   Condiciones: país Ecuador + no saltada (fueSaltada false).
//   Proyección : país, duración escuchada, título y duración total
//                de la canción.
//   Orden      : duración escuchada de mayor a menor (-1).
//   Límite     : 10 documentos.
// ---------------------------------------------------------------------
print("Lookup #5: Reproducciones en Ecuador con la canción escuchada");
db.Reproduccion.aggregate([
  { $match: { pais: "Ecuador", fueSaltada: false } },
  {
    $lookup: {
      from: "Cancion",
      localField: "cancionId",
      foreignField: "cancionId",
      as: "cancion"
    }
  },
  { $unwind: "$cancion" },
  {
    $project: {
      _id: 0,
      pais: 1,
      duracionEscuchada: 1,
      "cancion.tituloCancion": 1,
      "cancion.duracion": 1
    }
  },
  { $sort: { duracionEscuchada: -1 } },
  { $limit: 10 }
]);

print("¡Consultas Lookup ejecutadas correctamente!");
