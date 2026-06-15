
// Selecciona la base de datos a usar.
use('Ecualizer');

// =====================================================================
// CREATE - Insertar una sola cancion
// =====================================================================
db.getCollection('Cancion').insertOne({
  cancionId: new ObjectId(),
  tituloCancion: 'Mi Cancion de Prueba',
  duracion: 215,                              // segundos
  fechaLanzamiento: new Date('2024-05-20'),
  estadoCancion: 'activa',                    // activa | bloqueada | eliminada | inactiva
  calidadKbps: 320,                           // 128 | 192 | 256 | 320
  totalReproducciones: 0,
  letraCancion: 'Esta es la letra de ejemplo...',
  numeroPista: 1,
  generos: [{ nombreGenero: 'Pop', descripcionGenero: 'Musica popular' }],
  artistas: [{ artistaId: new ObjectId(), nombreArtistico: 'Artista Demo' }]
});

// =====================================================================
// READ - Ver las canciones
// =====================================================================
// Buscar una cancion por titulo.
db.getCollection('Cancion').find({ tituloCancion: 'Mi Cancion de Prueba' });

// Ver todas las canciones ordenadas por titulo.
db.getCollection('Cancion').find({}).sort({ tituloCancion: 1 });

// =====================================================================
// UPDATE - Actualizar una cancion
// =====================================================================
db.getCollection('Cancion').updateOne(
  { tituloCancion: 'Mi Cancion de Prueba' },
  {
    $set: {
      estadoCancion: 'inactiva',
      calidadKbps: 256,
      letraCancion: 'Letra actualizada desde el Playground'
    },
    $inc: { totalReproducciones: 1 }
  }
);

// =====================================================================
// DELETE - Eliminar una cancion
// =====================================================================
db.getCollection('Cancion').deleteOne({ tituloCancion: 'Mi Cancion de Prueba' });

// Contar cuantas canciones quedan.
const total = db.getCollection('Cancion').find({}).count();
console.log(`Quedan ${total} canciones en la coleccion.`);
