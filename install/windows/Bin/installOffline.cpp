#include <iostream>
#include <cstdlib>
#include <shlobj.h>
#include <fstream>
#include <windows.h>


bool is64Bit() {
    #ifdef _WIN64
        return true;  // Compilado como 64 bits
    #else
        return false; // Compilado como 32 bits
    #endif
}

bool fileExists(const std::string& filename) {
    std::ifstream file(filename);
    return file.good();
}

const char* pythonCommand = "python --version";

bool isPythonInstalled() {
    FILE* pipe = _popen(pythonCommand, "r");
    if (!pipe) return false;

    char buffer[128];
    std::string result = "";

    while (!feof(pipe)) {
        if (fgets(buffer, 128, pipe) != NULL)
            result += buffer;
    }

    _pclose(pipe);

    return result.find("Python") != std::string::npos;
}

bool isArduinoInstalled() {
    HKEY hKey;
    const char* regPath = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Arduino";

    if (RegOpenKeyEx(HKEY_LOCAL_MACHINE, regPath, 0, KEY_READ, &hKey) == ERROR_SUCCESS) {
        RegCloseKey(hKey);
        return true;
    }

    return false;
}

int main() {
    // 1. Descompactar a pasta
    if (!fileExists("./DB4K-main")) {
        int unzipResult = std::system("tar -xf ./install-offline/DB4K-main.zip -C ./");

        if (unzipResult != 0) {
            std::cerr << "erro ao descompactar a pasta.\n";
            system("pause");
            return 1;
        }
    } else {
        std::cout << "pasta ja descompactada. pulando a etapa de descompactação.\n";
    }

    // 2. Verificar se o Python já está instalado
    if (!isPythonInstalled()) {
        std::cout << "python nao encontrado.\n";

        const char* pythonInstaller = is64Bit() ? "install-offline\\python64.msi" : "install-offline\\python86.msi";
        
        int installPythonResult = std::system(pythonInstaller);

        if (installPythonResult != 0) {
            std::cerr << "erro ao instalar o python.\n";
            system("pause");
            return 1;
        }

        std::cout << "python instalado com sucesso.\n";
    } else {
        std::cout << "python ja instalado. pulando a etapa de instalação do Python.\n";
    }


    // 3. Verificar se o Arduino IDE está instalado
    const char* arduinoExePath = "Bin\\arduino.exe";

    if (isArduinoInstalled()) {
        std::cout << "arduino IDE ja instalado. pulando a etapa da instalação do arduino IDE.\n";
    } else {
        std::cout << "arduino IDE nao encontrado\n";

        if (system(arduinoExePath) == 0) {
            std::cout << "arduino IDE instalado com sucesso.\n";
        } else {
            std::cerr << "erro ao instalar arduino IDE.\n";
            return 1;
        }
    }
    
    // 4. Iniciar o Start.py
    int runPythonResult = std::system("start ./DB4K-main/start.py");

    if (runPythonResult != 0) {
        std::cerr << "erro ao executar o script python.\n";
        return 1;
    }

    return 0;
    
}
