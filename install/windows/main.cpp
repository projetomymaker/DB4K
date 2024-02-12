#include <iostream>
#include <fstream>
#include <cstdlib>
#include <windows.h>

bool verificaConexaoInternet() {
    const char* comandoPing = "ping -n 1 www.google.com > nul";
    int resultado = std::system(comandoPing);
    return resultado == 0;
}

int main() {
    char buffer[MAX_PATH];
    GetModuleFileName(NULL, buffer, MAX_PATH);
    std::string diretorioAtual = buffer;
    size_t pos = diretorioAtual.find_last_of("\\");
    diretorioAtual = diretorioAtual.substr(0, pos + 1);

    std::string nomeArquivo = diretorioAtual + "flag.dat";

    if (std::ifstream(nomeArquivo)) {
        int runPythonResult = std::system("start ./DB4K-main/start.py");

        if (runPythonResult != 0) {
            std::cerr << "erro ao executar o script python.\n";
            return 1;
        }
    } else {
        std::ofstream novoArquivo(nomeArquivo);
        if (novoArquivo.is_open()) {
            novoArquivo << "....MyMaker Flag System\n";

            const char* caminho_do_exe = verificaConexaoInternet() ? "Bin\\install.exe" : "Bin\\installOffline.exe";

            std::ifstream arquivo(caminho_do_exe);
            if (arquivo.is_open()) {
                std::string comando = std::string("start \"\" \"") + caminho_do_exe + "\"";
                system(comando.c_str());
            }
        } else {
            std::cerr << "Erro ao criar o arquivo.\n";
            return 1;
        }
    }

    return 0;
}
