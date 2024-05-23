#!/bin/bash

# Comprobar si libnnz19.so se puede cargar
if [ -f /opt/render/project/src/oracle/instantclient_19_19/libnnz19.so ]; then
    echo "libnnz19.so found"
else
    echo "libnnz19.so not found"
fi

