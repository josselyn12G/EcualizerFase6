// =====================================================================
// CONSULTAS CON ÍNDICES - BASE DE DATOS ECUALIZER (Fase 6, Sección 1.1.1)
// =====================================================================


use("Ecualizer");

// ---------------------------------------------------------------------
// Consulta #1: Canciones activas con alta calidad.
//   Índice     : estadoCancion + calidadKbps (compuesto).
//   Condiciones: estado activa + calidad 320 kbps (=).
//   Proyección : solo título, calidad y total de reproducciones.
//   Orden      : reproducciones de mayor a menor (-1).
// ---------------------------------------------------------------------
print("Index #1: Canciones activas con calidad 320kbps");
db.Cancion.find(
  {
    estadoCancion: "activa",
    calidadKbps: 320
  },
  { _id: 0, tituloCancion: 1, calidadKbps: 1, totalReproducciones: 1 }
).sort({ totalReproducciones: -1 })
.explain("executionStats");

// ---------------------------------------------------------------------
// Consulta #2: Pagos completados dentro de un rango de fechas.
//   Índice     : resultadoPago + fechaPago (compuesto).
//   Condiciones: resultado Completado + fechaPago entre 2024-01-01 y
//                2024-12-31 ($gte / $lte).
//   Proyección : monto, fecha, método y resultado del pago.
//   Orden      : fecha de pago del más nuevo al más antiguo (-1).
// ---------------------------------------------------------------------
print("Index #2: Pagos completados durante el año 2024");
db.Pagos.find(
  {
    resultadoPago: "Completado",
    fechaPago: {
      $gte: new Date("2024-01-01"),
      $lte: new Date("2024-12-31")
    }
  },
  { _id: 0, monto: 1, fechaPago: 1, metodoPago: 1, resultadoPago: 1 }
).sort({ fechaPago: -1 })
.explain("executionStats");

// ---------------------------------------------------------------------
// Consulta #3: Usuarios oyentes activos (con su país).
//   Índice     : tipoUsuario + estado (compuesto).
//   Condiciones: tipoUsuario oyente + estado activo.
//   Proyección : nombre, apellido, correo, fecha de registro y país;
//                se ocultan datos sensibles (contraseña y cédula).
//   Orden      : fecha de registro del más nuevo al más antiguo (-1).
// ---------------------------------------------------------------------
print("Index #3: Usuarios oyentes activos con su país");
db.Usuarios.find(
  {
    tipoUsuario: "oyente",
    estado: "activo"
  },
  {
    _id: 0, primerNombre: 1, primerApellido: 1,
    correo: 1, fechaRegistro: 1,
    "perfilOyente.paisUsuario": 1,
    contrasena: 0, cedulaUsuario: 0
  }
).sort({ fechaRegistro: -1 })
.explain("executionStats");

// ---------------------------------------------------------------------
// Consulta #4: Suscripciones activas con renovación automática.
//   Índice     : estadoSuscripcion.
//   Condiciones: estado activa + renovacionAutomatica true.
//   Proyección : usuario, estado, nombre y precio del plan y fecha de
//                inicio.
//   Orden      : fecha de inicio del más nuevo al más antiguo (-1).
// ---------------------------------------------------------------------
print("Index #4: Suscripciones activas con renovación automática");
db.Suscripcion.find(
  {
    estadoSuscripcion: "activa",
    renovacionAutomatica: true
  },
  {
    _id: 0,
    usuarioId: 1,
    estadoSuscripcion: 1,
    "plan.nombrePlan": 1,
    "plan.precio": 1,
    fechaInicio: 1
  }
).sort({ fechaInicio: -1 })
.explain("executionStats");

// ---------------------------------------------------------------------
// Consulta #5: Álbumes activos por artista.
//   Índice     : estadoAlbum + artistaId (compuesto).
//   Condiciones: estado activo + artistaId > 0 ($gt).
//   Proyección : título, estado, artista, fecha de lanzamiento y tipo.
//   Orden      : fecha de lanzamiento del más nuevo al más antiguo (-1).
// ---------------------------------------------------------------------
print("Index #5: Álbumes activos por artista");
db.Albums.find(
  {
    estadoAlbum: "activo",
    artistaId: { $gt: 0 }
  },
  {
    _id: 0,
    tituloAlbum: 1,
    estadoAlbum: 1,
    nombreArtistico: 1,
    fechaLanzamiento: 1,
    "tipoAlbum.nombreTipo": 1
  }
).sort({ fechaLanzamiento: -1 })
.explain("executionStats");

print("¡Consultas con Índices ejecutadas correctamente!");
