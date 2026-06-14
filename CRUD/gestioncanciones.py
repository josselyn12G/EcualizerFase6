# =====================================================================
# GESTION DE CANCIONES - OPERACIONES CRUD
# =====================================================================
# Contiene la logica de Crear, Listar, Actualizar y Eliminar canciones
# de la coleccion "Cancion".
#
# Relaciones (segun los esquemas de Hackolade):
#   - Cada cancion referencia a su album mediante "albumId".
#   - El artista NO se pide aparte: se toma del album seleccionado, ya que
#     la coleccion "Albums" guarda "artistaId" y "nombreArtistico" de forma
#     desnormalizada. Esos datos se embeben en el arreglo "artistas".
# =====================================================================

from datetime import datetime, timezone

from pymongo.errors import PyMongoError, DuplicateKeyError
from bson import ObjectId

# Valores permitidos segun el $jsonSchema de la coleccion Cancion
ESTADOS_VALIDOS = ["activa", "bloqueada", "eliminada", "inactiva"]
CALIDADES_VALIDAS = [128, 192, 256, 320]


# =====================================================================
# UTILIDADES DE ENTRADA POR CONSOLA
# =====================================================================
def leer_texto(mensaje, obligatorio=True, permite_vacio_como_none=False):
    """Lee un string. Si no es obligatorio y se deja vacio devuelve None/''."""
    while True:
        valor = input(mensaje).strip()
        if valor:
            return valor
        if not obligatorio:
            return None if permite_vacio_como_none else ""
        print("  -> Este campo es obligatorio.")


def leer_numero(mensaje, minimo=None, entero=False):
    """Lee un numero validando que sea numerico y respete el minimo."""
    while True:
        dato = input(mensaje).strip()
        try:
            valor = int(dato) if entero else float(dato)
        except ValueError:
            print("  -> Ingresa un numero valido.")
            continue
        if minimo is not None and valor < minimo:
            print(f"  -> El valor debe ser >= {minimo}.")
            continue
        return valor


def leer_opcion(mensaje, opciones):
    """Obliga a elegir uno de los valores de 'opciones' (lista)."""
    while True:
        valor = input(mensaje).strip()
        if valor in [str(o) for o in opciones]:
            return valor
        print(f"  -> Opciones validas: {', '.join(str(o) for o in opciones)}")


def leer_fecha(mensaje):
    """Lee una fecha en formato YYYY-MM-DD y la convierte a datetime (UTC)."""
    while True:
        dato = input(mensaje).strip()
        try:
            fecha = datetime.strptime(dato, "%Y-%m-%d")
            return fecha.replace(tzinfo=timezone.utc)
        except ValueError:
            print("  -> Formato invalido. Usa YYYY-MM-DD (ej. 2024-05-20).")


# =====================================================================
# AYUDAS PARA MOSTRAR / SELECCIONAR DATOS
# =====================================================================
def seleccionar_album(bd):
    """
    Muestra los albumes disponibles y devuelve el documento elegido.
    Del album obtenemos albumId + artistaId + nombreArtistico para
    asociarlos a la cancion. Devuelve None si no hay albumes o se cancela.
    """
    albumes = list(bd.Albums.find(
        {},
        {"tituloAlbum": 1, "artistaId": 1, "nombreArtistico": 1}
    ).sort("tituloAlbum", 1))

    if not albumes:
        print("No existen albumes registrados. Crea un album antes de la cancion.")
        return None

    print("\n--- ALBUMES DISPONIBLES ---")
    for i, alb in enumerate(albumes, start=1):
        artista = alb.get("nombreArtistico", "(sin artista)")
        print(f"  {i}. {alb.get('tituloAlbum')}  |  Artista: {artista}")
    print("  0. Cancelar")

    while True:
        idx = leer_numero("Elige el numero del album: ", minimo=0, entero=True)
        if idx == 0:
            return None
        if 1 <= idx <= len(albumes):
            return albumes[idx - 1]
        print(f"  -> Elige un numero entre 0 y {len(albumes)}.")


def leer_generos():
    """Lee uno o varios generos (la coleccion exige al menos 1)."""
    generos = []
    print("\n--- GENEROS DE LA CANCION (minimo 1) ---")
    while True:
        nombre = leer_texto("  Nombre del genero: ")
        descripcion = leer_texto("  Descripcion del genero (opcional): ",
                                 obligatorio=False)
        genero = {"nombreGenero": nombre}
        if descripcion:
            genero["descripcionGenero"] = descripcion
        generos.append(genero)

        if input("  Agregar otro genero? (s/n): ").strip().lower() != "s":
            break
    return generos


def mostrar_cancion(doc):
    """Imprime el detalle completo de un documento de cancion."""
    if not doc:
        print("(No se encontro la cancion)")
        return
    artistas = ", ".join(a.get("nombreArtistico", "")
                         for a in doc.get("artistas", [])) or "(sin artista)"
    generos = ", ".join(g.get("nombreGenero", "")
                        for g in doc.get("generos", [])) or "(sin genero)"
    print("\n----------- DETALLE DE LA CANCION -----------")
    print(f"  _id            : {doc.get('_id')}")
    print(f"  Titulo         : {doc.get('tituloCancion')}")
    print(f"  Artista(s)     : {artistas}")
    print(f"  albumId        : {doc.get('albumId')}")
    print(f"  Duracion       : {doc.get('duracion')} s")
    print(f"  Fecha lanz.    : {doc.get('fechaLanzamiento')}")
    print(f"  Estado         : {doc.get('estadoCancion')}")
    print(f"  Calidad        : {doc.get('calidadKbps')} kbps")
    print(f"  Reproducciones : {doc.get('totalReproducciones')}")
    print(f"  Numero pista   : {doc.get('numeroPista')}")
    print(f"  Generos        : {generos}")
    print(f"  Letra          : {doc.get('letraCancion')}")
    print("---------------------------------------------\n")


# =====================================================================
# 1. CREAR CANCION
# =====================================================================
def crear_cancion(bd):
    print("\n========== CREAR CANCION ==========")

    # 1) Elegir el album -> de aqui sale el artista asociado
    album = seleccionar_album(bd)
    if album is None:
        print("Operacion cancelada.\n")
        return

    print(f"Album seleccionado: {album.get('tituloAlbum')} "
          f"(Artista: {album.get('nombreArtistico')})")

    # 2) Datos propios de la cancion
    titulo = leer_texto("Titulo de la cancion: ")
    duracion = leer_numero("Duracion en segundos: ", minimo=1)
    fecha = leer_fecha("Fecha de lanzamiento (YYYY-MM-DD): ")

    print(f"Estados validos: {', '.join(ESTADOS_VALIDOS)}")
    estado = leer_opcion("Estado de la cancion: ", ESTADOS_VALIDOS)

    print(f"Calidades validas (kbps): {', '.join(str(c) for c in CALIDADES_VALIDAS)}")
    calidad = int(leer_opcion("Calidad en kbps: ", CALIDADES_VALIDAS))

    reproducciones = leer_numero("Total de reproducciones (0 si es nueva): ",
                                 minimo=0, entero=True)
    numero_pista = leer_numero("Numero de pista dentro del album: ",
                               minimo=1, entero=True)
    letra = leer_texto("Letra de la cancion (Enter para dejar vacia): ",
                       obligatorio=False, permite_vacio_como_none=True)
    generos = leer_generos()

    # 3) Construir el documento embebiendo album + artista
    documento = {
        "cancionId": ObjectId(),
        "tituloCancion": titulo,
        "duracion": duracion,
        "fechaLanzamiento": fecha,
        "estadoCancion": estado,
        "calidadKbps": calidad,
        "totalReproducciones": reproducciones,
        "letraCancion": letra,                     # puede ser None
        "albumId": album["_id"],                   # referencia al album
        "numeroPista": numero_pista,
        "generos": generos,
        "artistas": [                              # artista tomado del album
            {
                "artistaId": album.get("artistaId"),
                "nombreArtistico": album.get("nombreArtistico")
            }
        ]
    }

    try:
        resultado = bd.Cancion.insert_one(documento)
    except DuplicateKeyError:
        print("\nYa existe una cancion con ese titulo (indice unico). No se creo.\n")
        return
    except PyMongoError as e:
        print(f"\nError al crear la cancion: {e}\n")
        return

    print(f"\nCancion creada correctamente. _id = {resultado.inserted_id}")
    mostrar_cancion(bd.Cancion.find_one({"_id": resultado.inserted_id}))


# =====================================================================
# 2. LISTAR CANCIONES
# =====================================================================
def _listar_para_seleccion(bd):
    """
    Lista compacta (ID + titulo + artista) usada por actualizar/eliminar para
    que el usuario ubique la cancion. Devuelve la lista de documentos.
    """
    canciones = list(bd.Cancion.find(
        {},
        {"tituloCancion": 1, "estadoCancion": 1,
         "artistas.nombreArtistico": 1}
    ).sort("tituloCancion", 1))

    if not canciones:
        print("\nNo hay canciones registradas.\n")
        return canciones

    print("\n=============== CANCIONES REGISTRADAS ===============")
    for c in canciones:
        artistas = ", ".join(a.get("nombreArtistico", "")
                             for a in c.get("artistas", [])) or "(sin artista)"
        print(f"  ID: {c['_id']}  |  {c.get('tituloCancion')}  |  {artistas}")
    print(f"Total: {len(canciones)} cancion(es).\n")
    return canciones


def listar_canciones(bd):
    """
    Lista canciones con TODA su informacion (documento completo).
    Permite elegir: listar todas o buscar por titulo de la cancion.
    """
    print("\n--- LISTAR CANCIONES ---")
    print("  1. Listar todas")
    print("  2. Buscar por titulo de la cancion")
    opcion = leer_opcion("Elige una opcion (1-2): ", ["1", "2"])

    if opcion == "1":
        filtro = {}
    else:
        texto = leer_texto("Titulo (o parte) de la cancion a buscar: ")
        # Busqueda parcial e insensible a mayusculas/minusculas
        filtro = {"tituloCancion": {"$regex": texto, "$options": "i"}}

    # Sin proyeccion: se trae el documento completo tal como esta en la coleccion
    canciones = list(bd.Cancion.find(filtro).sort("tituloCancion", 1))

    if not canciones:
        print("\nNo se encontraron canciones.\n")
        return

    print(f"\n=============== RESULTADO: {len(canciones)} cancion(es) ===============")
    for c in canciones:
        mostrar_cancion(c)


# =====================================================================
# 3. ACTUALIZAR CANCION
# =====================================================================
def actualizar_cancion(bd):
    print("\n========== ACTUALIZAR CANCION ==========")

    # Mostrar la lista con id para que el usuario ubique la cancion
    canciones = _listar_para_seleccion(bd)
    if not canciones:
        return

    # El usuario escribe el TITULO de la cancion que quiere editar
    titulo_buscar = leer_texto("Escribe el titulo EXACTO de la cancion a editar: ")
    cancion = bd.Cancion.find_one({"tituloCancion": titulo_buscar})

    if not cancion:
        print("No se encontro ninguna cancion con ese titulo.\n")
        return

    print(f"\nEditando: '{cancion['tituloCancion']}' (_id: {cancion['_id']})")
    print("Deja el campo vacio (Enter) para conservar el valor actual.\n")

    cambios = {}

    nuevo_titulo = leer_texto(f"Titulo [{cancion.get('tituloCancion')}]: ",
                              obligatorio=False)
    if nuevo_titulo:
        cambios["tituloCancion"] = nuevo_titulo

    dur = input(f"Duracion en seg [{cancion.get('duracion')}]: ").strip()
    if dur:
        try:
            cambios["duracion"] = float(dur)
        except ValueError:
            print("  -> Duracion ignorada (no numerica).")

    print(f"Estado actual: {cancion.get('estadoCancion')} "
          f"(validos: {', '.join(ESTADOS_VALIDOS)})")
    est = input("Nuevo estado (Enter = sin cambio): ").strip()
    if est:
        if est in ESTADOS_VALIDOS:
            cambios["estadoCancion"] = est
        else:
            print("  -> Estado invalido, se ignora.")

    print(f"Calidad actual: {cancion.get('calidadKbps')} "
          f"(validas: {', '.join(str(c) for c in CALIDADES_VALIDAS)})")
    cal = input("Nueva calidad kbps (Enter = sin cambio): ").strip()
    if cal:
        if cal in [str(c) for c in CALIDADES_VALIDAS]:
            cambios["calidadKbps"] = int(cal)
        else:
            print("  -> Calidad invalida, se ignora.")

    rep = input(f"Total reproducciones [{cancion.get('totalReproducciones')}]: ").strip()
    if rep:
        try:
            cambios["totalReproducciones"] = max(0, int(rep))
        except ValueError:
            print("  -> Reproducciones ignoradas (no numerica).")

    letra = input("Nueva letra (Enter = sin cambio): ").strip()
    if letra:
        cambios["letraCancion"] = letra

    if not cambios:
        print("\nNo se realizaron cambios.\n")
        return

    try:
        bd.Cancion.update_one({"_id": cancion["_id"]}, {"$set": cambios})
    except PyMongoError as e:
        print(f"\nError al actualizar: {e}\n")
        return

    print("\nCancion actualizada. Asi quedo:")
    mostrar_cancion(bd.Cancion.find_one({"_id": cancion["_id"]}))


# =====================================================================
# 4. ELIMINAR CANCION
# =====================================================================
def eliminar_cancion(bd):
    print("\n========== ELIMINAR CANCION ==========")

    canciones = _listar_para_seleccion(bd)
    if not canciones:
        return

    titulo_buscar = leer_texto("Escribe el titulo EXACTO de la cancion a eliminar: ")
    cancion = bd.Cancion.find_one({"tituloCancion": titulo_buscar})

    if not cancion:
        print("No se encontro ninguna cancion con ese titulo.\n")
        return

    mostrar_cancion(cancion)
    confirmar = input(f"Seguro que deseas ELIMINAR '{cancion['tituloCancion']}'? "
                      "(s/n): ").strip().lower()
    if confirmar != "s":
        print("Eliminacion cancelada.\n")
        return

    try:
        resultado = bd.Cancion.delete_one({"_id": cancion["_id"]})
    except PyMongoError as e:
        print(f"\nError al eliminar: {e}\n")
        return

    if resultado.deleted_count == 1:
        print("Cancion eliminada correctamente.\n")
    else:
        print("No se elimino ninguna cancion.\n")
