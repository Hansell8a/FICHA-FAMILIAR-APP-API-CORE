#!/bin/bash

# Descomprimir Oracle Instant Client
unzip -o oracle_linux.zip -d /opt/render/project/src/oracle/

# Exportar las variables de entorno
export LD_LIBRARY_PATH=/opt/render/project/src/oracle/instantclient_19_19:$LD_LIBRARY_PATH
export ORACLE_HOME=/opt/render/project/src/oracle/instantclient_19_19

# Instalar libaio1
sudo apt-get update && sudo apt-get install -y libaio1
