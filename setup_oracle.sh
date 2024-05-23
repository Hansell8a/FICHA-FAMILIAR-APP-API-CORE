#!/bin/bash

# Verificar los permisos de libnnz19.so
echo "Verificando los permisos de libnnz19.so..."
ls -l /opt/

# Ajustar permisos si es necesario
chmod 755 /opt/

# Verificar los permisos después de ajustar
echo "Permisos después de ajustar:"
ls -l /opt/





echo "Descomprimiendo Oracle Instant Client..."
unzip -o oracle_linux.zip -d /opt/

# Establecer la ruta de Oracle Instant Client
ORACLE_INSTANT_CLIENT_PATH=/opt/oracle/instantclient_19_19

# Exportar las variables de entorno de forma segura
if [ -z "$LD_LIBRARY_PATH" ]; then
    export LD_LIBRARY_PATH=$ORACLE_INSTANT_CLIENT_PATH
else
    export LD_LIBRARY_PATH=$ORACLE_INSTANT_CLIENT_PATH:$LD_LIBRARY_PATH
fi

export ORACLE_HOME=$ORACLE_INSTANT_CLIENT_PATH

echo "LD_LIBRARY_PATH configurado como: $LD_LIBRARY_PATH"
echo "ORACLE_HOME configurado como: $ORACLE_HOME"

# Instalar libaio1 localmente si necesario (en Render.com no es necesario sudo)
echo "Actualizando el sistema e instalando libaio1..."
apt-get update && apt-get install -y libaio1

if [ $? -eq 0 ]; then
    echo "libaio1 instalado correctamente."
else
    echo "Error al instalar libaio1."
    #exit 1
fi

# Confirmar que las librerías estén en su lugar
echo "Verificando que las librerías de Oracle Instant Client estén en su lugar..."
ls $ORACLE_INSTANT_CLIENT_PATH

# Verificar la presencia de libnnz19.so
if [ -f $ORACLE_INSTANT_CLIENT_PATH/libnnz19.so ]; then
    echo "libnnz19.so encontrado."
else
    echo "libnnz19.so no encontrado."
    #exit 1
fi

# Verificar los permisos de libnnz19.so
echo "Verificando los permisos de libnnz19.so..."
ls -l $ORACLE_INSTANT_CLIENT_PATH/libnnz19.so

# Ajustar permisos si es necesario
chmod 755 $ORACLE_INSTANT_CLIENT_PATH/libnnz19.so

# Verificar los permisos después de ajustar
echo "Permisos después de ajustar:"
ls -l $ORACLE_INSTANT_CLIENT_PATH/libnnz19.so

# Instalar dependencias de npm
echo "Instalando dependencias de npm..."
npm install

if [ $? -eq 0 ]; then
    echo "Dependencias de npm instaladas correctamente."
else
    echo "Error al instalar dependencias de npm."
    #exit 1
fi

echo "Configuración completada con éxito."


