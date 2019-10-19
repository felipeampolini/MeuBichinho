# 1 - Instalar react-native
	
1. Instalar [Chocolatey](https://chocolatey.org/install) (usar o powershell como admin, e nao o cmd)
2. Rodar no cmd como admin: `choco install -y nodejs.install python2 jdk8`
3. Rodar no cmd como admin: `npm install -g react-native-cli`

# 2 - Configurar as variaveis e ambiente ( arquivo cezar )
    1º - Meu computador -> Botão direito -> Propriedades 
    -> Configurações Avançadas do Sistema -> Aba Avançado 
    -> Variáveis de Ambiente
    2º -> Variáveis de usuário para Administrador -> Novo
    3º -> Adicionar: 
    Nome da variável: ANDROID_HOME
    Valor da variável: C:\Users\Administrador\AppData\Local\Android\Sdk
    ATENÇÃO: No valor da variável adicionar o path do sdk da sua máquina
    
    Variáveis do sistema
    1º - Selecionar Variável "Path" e clicar em editar
    2º - Clicar em Novo e adiconar: C:\Users\Administrador\AppData\Local\Android\Sdk\platform-tools
    ATENÇÃO: O path é o do sdk da sua máquina
    
    Ainda em variáveis do sistema clicar em novo e adicionar:
    Nome da variável: ANDROID_HOME
    Valor da variável: C:\Users\Administrador\AppData\Local\Android\Sdk
    ATENÇÃO: No valor da variável adicionar o path do sdk da sua máquina
    
    Aceitar as licenças do sdk android:
    C:\Users\Administrador\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
    Selecionar yes para todas
    
    Nas máquinas da Uno matar o processo que estiver na porta 8081, 
    não tenha piedade, com os comandos abaixo:
     
    netstat -a -n -o | findstr :8081	
    taskKill.exe /F /PID NumeroDoPiDPodeSerQualquerUm
    
    criar um projeto com react-native
    react-native init NomeDoProjeto
    
    abrir um emulador no avd
    
    fazer build da aplicação
    react-native run-android

# 3 - Instalar gitbash (no windows)
[GitBash](https://gitforwindows.org/)

# 4 - Clonando projeto
1. Ir para pasta desejada
2. Botao direito, git bash here, 
3. Dar o comando: `git clone https://gitlab.com/felipeampolini/appmeubichinho.git`

# 5 - Atualizando npm do projeto
1. Ir para pasta do projeto clonado
2. Dar o comando: `npm install`

# 6 - Se der erro de keystore:  
* Keystore file 'C:\Users\Administrador\MeuProjeto\android\app\debug.keystore' not found for signing config 'debug'.

https://github.com/facebook/react-native/issues/25629

Va para pasta \android\app
rodar comando: `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`

# 7 - Se der pau no react-native start : voltar versao do node

* no powershell com admin
`choco uninstall nodejs`
`choco install nodejs --version=12.10.0`