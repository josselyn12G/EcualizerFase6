# =====================================================================
# CONEXION A LA BASE DE DATOS ECUALIZER (MongoDB Atlas)
# =====================================================================
# Centraliza la cadena de conexion y la apertura de la base para que el
# resto de modulos (main.py, gestioncanciones.py) la reutilicen.
#
# Requisitos:
#   pip install pymongo dnspython
# =====================================================================

import json
import os

from pymongo import MongoClient

# Carga las credenciales desde un archivo JSON externo ubicado junto a este
# modulo, de modo que la cadena de conexion no quede escrita en el codigo.
RUTA_CREDENCIALES = os.path.join(os.path.dirname(__file__), "credenciales.json")

with open(RUTA_CREDENCIALES, "r", encoding="utf-8") as archivo:
    _credenciales = json.load(archivo)

# Cadena de conexion al cluster en la nube y nombre de la base de datos
URI = _credenciales["uri"]
NOMBRE_BD = _credenciales["nombre_bd"]


def conectar():
    """
    Crea el cliente, verifica la conexion con un ping y devuelve una tupla
    (cliente, base_de_datos). El cliente se devuelve para poder cerrarlo
    al finalizar la aplicacion.
    """
    cliente = MongoClient(URI, serverSelectionTimeoutMS=8000)
    cliente.admin.command("ping")  # lanza excepcion si no logra conectar
    print("Conexion exitosa a MongoDB Atlas (base 'Ecualizer').\n")
    return cliente, cliente[NOMBRE_BD]
