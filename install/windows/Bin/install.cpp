#include <iostream>
#include <cstdlib>
#include <shlobj.h>
#include <fstream>
#include <windows.h>


bool fileExists(const std::string& filename) {
    std::ifstream file(filename);
    return file.good();
}

bool is64Bit() {
    #ifdef _WIN64
        return true;  // Compilado como 64 bits
    #else
        return false; // Compilado como 32 bits
    #endif
}


// bool verificaConexaoInternet() {
//     #ifdef _WIN32
//         const char* comandoPing = "ping -n 1 www.google.com > nul";
//     #else
//         const char* comandoPing = "ping -c 1 www.google.com > /dev/null 2>&1";
//     #endif

//     int resultado = std::system(comandoPing);

//     return resultado == 0;
// }

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

bool fileOrDirectoryExists(const std::string& path) {
    DWORD fileAttributes = GetFileAttributesA(path.c_str());

    return (fileAttributes != INVALID_FILE_ATTRIBUTES &&
            (fileAttributes & FILE_ATTRIBUTE_DIRECTORY) != 0);
}


int main() {

    // if(verificaConexaoInternet()){
        // 1. Verificar se o arquivo já foi baixado
        const char* repoUrl = "https://github.com/projetomymaker/DB4K/archive/main.tar.gz";
        if (!fileExists("DB4K-main.tar.gz")) {
            int downloadResult = std::system(("curl -LJO " + std::string(repoUrl)).c_str());

            if (downloadResult != 0) {
                std::cerr << "erro ao baixar o arquivo.\n";
                return 1;
            }
        } else {
            std::cout << "arquivo baixado. pulando a etapa de download.\n";
        }

        // 2. Verificar se o Python já está instalado
        if (!isPythonInstalled()) {
        std::cout << "python nao encontrado.\n";

        const char* pythonInstaller = is64Bit() ? "install-offline\\python64.msi" : "install-offline\\python86.msi";
        
        int installPythonResult = std::system(pythonInstaller);

        if (installPythonResult != 0) {
            std::cerr << "erro ao instalar o python.\n";
            return 1;
        }

        std::cout << "python instalado com sucesso.\n";
        } else {
            std::cout << "python ja instalado. pulando a etapa de instalação do python.\n";
        }

        const std::string DB4K_main = "./DB4K-main";

        // 3. Verificar se a pasta já foi descompactada
        if (!fileOrDirectoryExists(DB4K_main)) {
            int unzipResult = std::system("tar -xzf ./DB4K-main.tar.gz");

            if (unzipResult != 0) {
                std::cerr << "erro ao descompactar a pasta.\n";
                return 1;
            }
        } else {
            std::cout << "pasta ja descompactada. pulando a etapa de descompactacao.\n";
        }


        // 4. Verificar se o Arduino IDE está instalado
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

        // 5. Inicia o Start.py
        int runPythonResult = std::system("start ./DB4K-main/start.py");

        if (runPythonResult != 0) {
            std::cerr << "erro ao executar o script Python.\n";
            return 1;
        }
    // }
    // else{
    //     int installOff = std::system("installoffline.exe");

    //     if (installOff == 0) {
    //         std::cout << "programa executado com sucesso.\n";
    //     } else {
    //         std::cerr << "erro ao executar o programa.\n";
    //     }
    // }


    return 0;
}
