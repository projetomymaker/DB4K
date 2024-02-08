#!/bin/bash

echo "DEVELOPER BY DANIEL RODRIGUES"
# CHECA SE O ARDUINO ESTÁ INSTALADO
if ! command -v arduino &> /dev/null; then #CASO NÃO ESTEJA, INSTALA. 
    echo "Instalando Arduino IDE"
    wget https:downloads.arduino.cc/arduino-1.8.19-linux64.tar.xz
    rm -rf arduino-1.8.19-linux64.tar.xz
    tar -xvf arduino-1.8.19-linux64.tar.xz
    cd arduino-1.8.19

fi

#CHECA SE O PYTHON ESTA INSTALADO
if ! command -v python2 &> /dev/null; then #CASO NÃO ESTEJA, ISTALA.
    sudo apt-add-repository universe
    sudo apt install python2-minimal

fi

# CHECA SE O REPO JÁ FOI CLONADO 
if [ ! -e "./DB4K" ]; then
    git --version >/dev/null 2>&1 
    GIT_IS_INSTALLED=$?

    if [ $GIT_IS_INSTALLED -ne 0 ]; then
        sudo apt-get install git
    fi
    
    git clone https://github.com/projetomymaker/DB4K
fi

# RODA O PROJETO
if [ -e "./DB4K" ]; then
    cd DB4K
    sudo chmod 777 /dev/tty*
    python2 start.py

fi

