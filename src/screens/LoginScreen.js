import React from 'react'
import {View, TextInput, TouchableHighlight, StyleSheet, Text} from 'react-native'
import { withNavigation } from 'react-navigation'

export class LoginScreen extends React.Component {


    render() {
        return (
        <View>
            <Text style={styles.loginSenha}>Usuario</Text>
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

            <Text>Você não possui uma conta?</Text>
            <TouchableHighlight onPress={() => {this.props.navigation.replace('MainScreen')}}> //MUDAR POR TELA DE CADASTRO
                <Text>Cadastre-se</Text>
            </TouchableHighlight>

        </View>
        )
    }
}

export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
    loginSenha:{
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
    }
})