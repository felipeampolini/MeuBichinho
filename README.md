# 1 - Instalar react-native
	
1. Instalar [Chocolatey](https://chocolatey.org/install) (usar o powershell como admin, e nao o cmd)
2. Rodar no cmd como admin: `choco install -y nodejs.install python2 jdk8`
3. Rodar no cmd como admin: `npm install -g react-native-cli`

# 2 - Configurar as variaveis e ambiente ( arquivo cezar )

# 3 - Instalar gitbash

# 4 - Clonando projeto
1. Ir para pasta desejada
2. Botao direito, git bash here, 
3. Dar o comando: ``it clone https://gitlab.com/felipeampolini/appmeubichinho.git`

# 5 - Atualizando npm do projeto
1. Ir para pasta do projeto clonado
2. Dar o comando: `npm install`

# 6 - Se der erro de keystore:  
* Keystore file 'C:\Users\Administrador\MeuProjeto\android\app\debug.keystore' not found for signing config 'debug'.

https://github.com/facebook/react-native/issues/25629

Va para pasta \android\app
rodar comando: `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`