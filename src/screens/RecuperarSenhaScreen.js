import React from 'react'
import {View, TextInput, TouchableHighlight, StyleSheet, Text, Image} from 'react-native'
import { withNavigation } from 'react-navigation'

export class RecuperarSenhaScreen extends React.Component {

    render() {
        return (
            <View>
                <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>

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

                <TouchableHighlight onPress={() => {
                    this.props.navigation.replace('MainScreen')
                }} style={styles.login}>
                    <Text style={styles.loginText}>Enviar</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

export default withNavigation(RecuperarSenhaScreen);

const styles = StyleSheet.create({
    esqueceuSenha: {
        fontSize: 30,
        fontWeight: 'bold',
        width: '33%',
        marginLeft: '33%',
        marginRight: '33%',
    },
    esqueceuSenhaText:{
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
});