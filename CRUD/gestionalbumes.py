# =====================================================================
# GESTION DE ALBUMES - OPERACIONES CRUD
# =====================================================================
# Contiene la logica de Crear, Listar, Actualizar y Eliminar albumes
# de la coleccion "Albums".
#
# Relaciones (segun los esquemas de Hackolade):
#   - Cada album referencia a su artista mediante "artistaId" y guarda de
#     forma desnormalizada "nombreArtistico". El artista se elige de la
#     coleccion "Usuarios" entre los usuarios con tipoUsuario = "artista".
#
# Se reutilizan las utilidades de entrada definidas en gestioncanciones.py
# para no duplicar codigo.
# =====================================================================

from pymongo.errors import PyMongoError
from bson import ObjectId

from gestioncanciones import leer_texto, leer_numero, leer_opcion, leer_fecha

# Valores permitidos segun el $jsonSchema de la coleccion Albums
ESTADOS_VALIDOS = ["activo", "eliminado", "inactivo"]
TIPOS_VALIDOS = ["Single", "EP", "Album"]


# =====================================================================
# AYUDAS PARA SELECCIONAR / MOSTRAR
# =====================================================================
def seleccionar_artista(bd):
    """
    Muestra los usuarios con tipoUsuario = 'artista' y devuelve el elegido.
    De aqui se obtienen artistaId (_id del usuario) y nombreArtistico.
    Devuelve None si no hay artistas o si se cancela.
    """
    artistas = list(bd.Usuarios.find(
        {"tipoUsuario": "artista"},
        {"perfilArtista.nombreArtistico": 1, "primerNombre": 1, "primerApellido": 1}
    ).sort("perfilArtista.nombreArtistico", 1))

    if not artistas:
        print("No existen usuarios de tipo 'artista'. Registra uno primero.")
        return None

    print("\n--- ARTISTAS DISPONIBLES ---")
    for i, art in enumerate(artistas, start=1):
        nombre_artistico = art.get("perfilArtista", {}).get("nombreArtistico",
                                                             "(sin nombre)")
        nombre_real = f"{art.get('primerNombre', '')} {art.get('primerApellido', '')}".strip()
        print(f"  {i}. {nombre_artistico}  |  {nombre_real}")
    print("  0. Cancelar")

    while True:
        idx = leer_numero("Elige el numero del artista: ", minimo=0, entero=True)
        if idx == 0:
            return None
        if 1 <= idx <= len(artistas):
            return artistas[idx - 1]
        print(f"  -> Elige un numero entre 0 y {len(artistas)}.")


def mostrar_album(doc):
    """Imprime el detalle completo de un documento de album."""
    if not doc:
        print("(No se encontro el album)")
        return
    tipo = doc.get("tipoAlbum", {})
    print("\n----------- DETALLE DEL ALBUM -----------")
    print(f"  _id            : {doc.get('_id')}")
    print(f"  Titulo         : {doc.get('tituloAlbum')}")
    print(f"  Artista        : {doc.get('nombreArtistico')}")
    print(f"  artistaId      : {doc.get('artistaId')}")
    print(f"  Fecha lanz.    : {doc.get('fechaLanzamiento')}")
    print(f"  Estado         : {doc.get('estadoAlbum')}")
    print(f"  Tipo           : {tipo.get('nombreTipo')}")
    print(f"  Desc. tipo     : {tipo.get('descripcionTipo')}")
    print(f"  Descripcion    : {doc.get('descripcionAlbum')}")
    print("-----------------------------------------\n")


# =====================================================================
# 1. CREAR ALBUM
# =====================================================================
def crear_album(bd):
    print("\n========== CREAR ALBUM ==========")

    # 1) Elegir el artista -> de aqui salen artistaId + nombreArtistico
    artista = seleccionar_artista(bd)
    if artista is None:
        print("Operacion cancelada.\n")
        return

    nombre_artistico = artista.get("perfilArtista", {}).get("nombreArtistico")
    print(f"Artista seleccionado: {nombre_artistico}")

    # 2) Datos propios del album
    titulo = leer_texto("Titulo del album (max 40 caracteres): ")
    while len(titulo) > 40:
        print("  -> El titulo no debe superar los 40 caracteres.")
        titulo = leer_texto("Titulo del album (max 40 caracteres): ")

    fecha = leer_fecha("Fecha de lanzamiento (YYYY-MM-DD): ")
    descripcion = leer_texto("Descripcion del album (Enter para dejar vacia): ",
                             obligatorio=False, permite_vacio_como_none=True)

    print(f"Estados validos: {', '.join(ESTADOS_VALIDOS)}")
    estado = leer_opcion("Estado del album: ", ESTADOS_VALIDOS)

    print(f"Tipos validos: {', '.join(TIPOS_VALIDOS)}")
    nombre_tipo = leer_opcion("Tipo de album: ", TIPOS_VALIDOS)
    desc_tipo = leer_texto("Descripcion del tipo (Enter para dejar vacia): ",
                           obligatorio=False, permite_vacio_como_none=True)

    # 3) Construir el documento embebiendo el artista
    documento = {
        "albumId": ObjectId(),
        "tituloAlbum": titulo,
        "fechaLanzamiento": fecha,
        "descripcionAlbum": descripcion,           # puede ser None
        "estadoAlbum": estado,
        "artistaId": artista["_id"],               # referencia al artista
        "nombreArtistico": nombre_artistico,       # desnormalizado
        "tipoAlbum": {
            "nombreTipo": nombre_tipo,
            "descripcionTipo": desc_tipo           # puede ser None
        }
    }

    try:
        resultado = bd.Albums.insert_one(documento)
    except PyMongoError as e:
        print(f"\nError al crear el album: {e}\n")
        return

    print(f"\nAlbum creado correctamente. _id = {resultado.inserted_id}")
    mostrar_album(bd.Albums.find_one({"_id": resultado.inserted_id}))


# =====================================================================
# 2. LISTAR ALBUMES
# =====================================================================
def _listar_para_seleccion(bd):
    """
    Lista compacta (ID + titulo + artista) usada por actualizar/eliminar para
    que el usuario ubique el album. Devuelve la lista de documentos.
    """
    albumes = list(bd.Albums.find(
        {},
        {"tituloAlbum": 1, "estadoAlbum": 1, "nombreArtistico": 1}
    ).sort("tituloAlbum", 1))

    if not albumes:
        print("\nNo hay albumes registrados.\n")
        return albumes

    print("\n=============== ALBUMES REGISTRADOS ===============")
    for a in albumes:
        artista = a.get("nombreArtistico", "(sin artista)")
        print(f"  ID: {a['_id']}  |  {a.get('tituloAlbum')}  |  {artista}")
    print(f"Total: {len(albumes)} album(es).\n")
    return albumes


def listar_albumes(bd):
    """
    Lista albumes con TODA su informacion (documento completo).
    Permite elegir: listar todos o buscar por titulo del album.
    """
    print("\n--- LISTAR ALBUMES ---")
    print("  1. Listar todos")
    print("  2. Buscar por titulo del album")
    opcion = leer_opcion("Elige una opcion (1-2): ", ["1", "2"])

    if opcion == "1":
        filtro = {}
    else:
        texto = leer_texto("Titulo (o parte) del album a buscar: ")
        # Busqueda parcial e insensible a mayusculas/minusculas
        filtro = {"tituloAlbum": {"$regex": texto, "$options": "i"}}

    # Sin proyeccion: se trae el documento completo tal como esta en la coleccion
    albumes = list(bd.Albums.find(filtro).sort("tituloAlbum", 1))

    if not albumes:
        print("\nNo se encontraron albumes.\n")
        return

    print(f"\n=============== RESULTADO: {len(albumes)} album(es) ===============")
    for a in albumes:
        mostrar_album(a)


# =====================================================================
# 3. ACTUALIZAR ALBUM
# =====================================================================
def actualizar_album(bd):
    print("\n========== ACTUALIZAR ALBUM ==========")

    albumes = _listar_para_seleccion(bd)
    if not albumes:
        return

    titulo_buscar = leer_texto("Escribe el titulo EXACTO del album a editar: ")
    album = bd.Albums.find_one({"tituloAlbum": titulo_buscar})

    if not album:
        print("No se encontro ningun album con ese titulo.\n")
        return

    print(f"\nEditando: '{album['tituloAlbum']}' (_id: {album['_id']})")
    print("Deja el campo vacio (Enter) para conservar el valor actual.\n")

    cambios = {}

    nuevo_titulo = input(f"Titulo [{album.get('tituloAlbum')}]: ").strip()
    if nuevo_titulo:
        if len(nuevo_titulo) <= 40:
            cambios["tituloAlbum"] = nuevo_titulo
        else:
            print("  -> Titulo ignorado (supera 40 caracteres).")

    desc = input("Nueva descripcion (Enter = sin cambio): ").strip()
    if desc:
        cambios["descripcionAlbum"] = desc

    print(f"Estado actual: {album.get('estadoAlbum')} "
          f"(validos: {', '.join(ESTADOS_VALIDOS)})")
    est = input("Nuevo estado (Enter = sin cambio): ").strip()
    if est:
        if est in ESTADOS_VALIDOS:
            cambios["estadoAlbum"] = est
        else:
            print("  -> Estado invalido, se ignora.")

    tipo_actual = album.get("tipoAlbum", {}).get("nombreTipo")
    print(f"Tipo actual: {tipo_actual} (validos: {', '.join(TIPOS_VALIDOS)})")
    tipo = input("Nuevo tipo (Enter = sin cambio): ").strip()
    if tipo:
        if tipo in TIPOS_VALIDOS:
            cambios["tipoAlbum.nombreTipo"] = tipo
        else:
            print("  -> Tipo invalido, se ignora.")

    if not cambios:
        print("\nNo se realizaron cambios.\n")
        return

    try:
        bd.Albums.update_one({"_id": album["_id"]}, {"$set": cambios})
    except PyMongoError as e:
        print(f"\nError al actualizar: {e}\n")
        return

    print("\nAlbum actualizado. Asi quedo:")
    mostrar_album(bd.Albums.find_one({"_id": album["_id"]}))


# =====================================================================
# 4. ELIMINAR ALBUM
# =====================================================================
def eliminar_album(bd):
    print("\n========== ELIMINAR ALBUM ==========")

    albumes = _listar_para_seleccion(bd)
    if not albumes:
        return

    titulo_buscar = leer_texto("Escribe el titulo EXACTO del album a eliminar: ")
    album = bd.Albums.find_one({"tituloAlbum": titulo_buscar})

    if not album:
        print("No se encontro ningun album con ese titulo.\n")
        return

    mostrar_album(album)

    # Avisar si el album tiene canciones asociadas
    asociadas = bd.Cancion.count_documents({"albumId": album["_id"]})
    if asociadas:
        print(f"ATENCION: este album tiene {asociadas} cancion(es) asociada(s).")

    confirmar = input(f"Seguro que deseas ELIMINAR '{album['tituloAlbum']}'? "
                      "(s/n): ").strip().lower()
    if confirmar != "s":
        print("Eliminacion cancelada.\n")
        return

    try:
        resultado = bd.Albums.delete_one({"_id": album["_id"]})
    except PyMongoError as e:
        print(f"\nError al eliminar: {e}\n")
        return

    if resultado.deleted_count == 1:
        print("Album eliminado correctamente.\n")
    else:
        print("No se elimino ningun album.\n")
