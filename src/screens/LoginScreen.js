import React from 'react'
import {View, TextInput, TouchableHighlight, StyleSheet, Text, Image} from 'react-native'
import { withNavigation } from 'react-navigation'

export class LoginScreen extends React.Component {


    render() {
        return (
        <View>
            {/*<Image*/}
                {/*style={{width: 50, height: 50}}*/}
                {/*source={require('./../images/iconMomentanea.PNG')}*/}
            {/*/>*/}

            <Text style={styles.LogoText}>Meu Bichinho</Text>

            <Text style={styles.loginSenha}>Email</Text>
            <TextInput
                editable = {true}
                autoCapitalize = 'none'
                style={{
                    backgroundColor: 'lightgrey',
                    marginLeft: '10%',
                    marginRight: '10%',
                    marginBottom: 10,
                    width: '80%',
                    height: 35
                }}
            >
            </TextInput>

            <Text style={styles.loginSenha}>Senha</Text>
            <TextInput
                secureTextEntry= {true}
                editable = {true}
                autoCapitalize = 'none'
                style={{
                    backgroundColor: 'lightgrey',
                    marginLeft: '10%',
                    marginRight: '10%',
                    width: '80%',
                    height: 35
                }}
            >
            </TextInput>

            <TouchableHighlight onPress={() => {this.props.navigation.replace('RecuperarSenhaScreen')}}>
                <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                this.props.navigation.replace('MainScreen')
                }} style={styles.login}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                this.props.navigation.replace('MainScreen')
            }} style={styles.face}>
                <Text style={styles.faceText}>Login com Facebook</Text>
            </TouchableHighlight>

            <Text style={styles.temConta}>Você não possui uma conta?</Text>
            <TouchableHighlight onPress={() => {this.props.navigation.replace('CadastroScreen')}}>
                <Text style={styles.cadastrar}>Cadastre-se</Text>
            </TouchableHighlight>

        </View>
        )
    }
}

export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
    LogoText: {
        fontSize: 30,
        fontWeight: 'bold',
        width: '33%',
        marginLeft: '33%',
        marginRight: '33%',
    },
    esqueceuSenha:{
        textAlign: 'right',
        marginRight: '10%'
    },
    loginSenha: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    login: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: 40,
        padding: 20,
        width: '80%',
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white'
    },
    loginText: {
        color: 'white'
    },
    face: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: 15,
        padding: 20,
        width: '80%',
        backgroundColor: '#3b5998',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white'
    },
    faceText: {
        color: 'white'
    },
    temConta: {
        marginTop: 30,
        color: 'grey',
        marginLeft: '10%',
    },
    cadastrar: {
        textAlign: 'right',
        marginRight: '17%',
        color: 'brown',
    }
})