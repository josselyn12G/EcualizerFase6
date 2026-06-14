# =====================================================================
# MAIN - MENU PRINCIPAL DEL CRUD (ALBUMES Y CANCIONES)
# =====================================================================
# Punto de entrada de la aplicacion. Solo se encarga de:
#   - Abrir y cerrar la conexion (modulo conexion.py)
#   - Mostrar el menu principal (Album / Cancion) y delegar cada opcion
#     a su submenu CRUD en gestionalbumes.py / gestioncanciones.py
#
# Ejecutar con:   python main.py
# Requisitos:     pip install pymongo dnspython
# =====================================================================

from pymongo.errors import PyMongoError

from conexion import conectar
import gestioncanciones as canciones
import gestionalbumes as albumes


def submenu_albumes(bd):
    """Submenu CRUD para la coleccion Albums."""
    opciones = {
        "1": albumes.crear_album,
        "2": albumes.actualizar_album,
        "3": albumes.listar_albumes,
        "4": albumes.eliminar_album,
    }
    while True:
        print("\n=====================================")
        print("        CRUD DE ALBUMES")
        print("=====================================")
        print("  1. Crear album")
        print("  2. Actualizar album")
        print("  3. Listar albumes")
        print("  4. Eliminar album")
        print("  0. Volver al menu principal")
        print("-------------------------------------")

        opcion = input("Elige una opcion: ").strip()
        if opcion == "0":
            break
        elif opcion in opciones:
            opciones[opcion](bd)
        else:
            print("Opcion invalida. Intenta de nuevo.\n")


def submenu_canciones(bd):
    """Submenu CRUD para la coleccion Cancion."""
    opciones = {
        "1": canciones.crear_cancion,
        "2": canciones.actualizar_cancion,
        "3": canciones.listar_canciones,
        "4": canciones.eliminar_cancion,
    }
    while True:
        print("\n=====================================")
        print("        CRUD DE CANCIONES")
        print("=====================================")
        print("  1. Crear cancion")
        print("  2. Actualizar cancion")
        print("  3. Listar canciones")
        print("  4. Eliminar cancion")
        print("  0. Volver al menu principal")
        print("-------------------------------------")

        opcion = input("Elige una opcion: ").strip()
        if opcion == "0":
            break
        elif opcion in opciones:
            opciones[opcion](bd)
        else:
            print("Opcion invalida. Intenta de nuevo.\n")


def menu_principal(bd):
    """Menu inicial: elegir con que coleccion trabajar."""
    while True:
        print("\n======================================")
        print("        ECUALIZER - CRUD")
        print("======================================")
        print("  1. Album")
        print("  2. Cancion")
        print("  0. Salir")
        print("-------------------------------------")

        opcion = input("Elige una opcion: ").strip()
        if opcion == "0":
            print("Saliendo de la aplicacion. Hasta luego!")
            break
        elif opcion == "1":
            submenu_albumes(bd)
        elif opcion == "2":
            submenu_canciones(bd)
        else:
            print("Opcion invalida. Intenta de nuevo.\n")


def main():
    cliente = None
    try:
        cliente, bd = conectar()
        menu_principal(bd)
    except PyMongoError as e:
        print(f"No se pudo conectar a la base de datos: {e}")
    finally:
        if cliente is not None:
            cliente.close()


if __name__ == "__main__":
    main()
