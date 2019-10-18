import React from 'react'
import {View, PixelRatio, TextInput, TouchableHighlight, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation'
import ImagePicker from "react-native-image-picker";

export class CadastroScreen extends React.Component {

    state = {
        imageSource: null
    }

    constructor(props) {
        super(props);
        this.selectPhoto = this.selectPhoto.bind(this);
    }

    selectPhoto() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }


        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('Usuário cancelou!')
            } else if (response.error) {
                console.log("ImagePicker erro: "+response.error)
            } else {
                let source = {uri: response.uri};

                this.setState({imageSource: source})
                console.log('ImageSource: '+this.state.imageSource)
            }
        })
    }

    render() {
        return (
            <View>

                <TouchableOpacity  onPress={this.selectPhoto.bind(this)}>
                    <View style={[styles.img, styles.imgContainer, {alignItems:'center', marginTop: 30, marginBottom: 30}]}>
                        {this.state.imageSource === null ?
                            <Text>
                                Selecione uma foto!
                            </Text> :
                            (<Image style={styles.img} source={this.state.imageSource}></Image>)
                        }
                    </View>
                </TouchableOpacity>


                <Text style={styles.cadastrarSenha}>Nome</Text>
                <TextInput
                    editable = {true}
                    autoCapitalize = 'none'
                    style={styles.input}
                >
                </TextInput>

                <Text style={styles.cadastrarSenha}>Email</Text>
                <TextInput
                    editable = {true}
                    autoCapitalize = 'none'
                    style={styles.input}
                >
                </TextInput>

                <Text style={styles.cadastrarSenha}>Senha</Text>
                <TextInput
                    secureTextEntry= {true}
                    editable = {true}
                    autoCapitalize = 'none'
                    style={styles.input}
                >
                </TextInput>

                <Text style={styles.cadastrarSenha}>Confirme a senha</Text>
                <TextInput
                    secureTextEntry= {true}
                    editable = {true}
                    autoCapitalize = 'none'
                    style={styles.input}
                >
                </TextInput>

                <TouchableHighlight onPress={() => {
                    this.props.navigation.replace('MainScreen')
                }} style={styles.cadastrar}>
                    <Text style={styles.cadastrarText}>Registrar</Text>
                </TouchableHighlight>

                <Text style={styles.temConta}>Já possui uma conta? Faça o</Text>
                <TouchableHighlight onPress={() => {this.props.navigation.replace('LoginScreen')}}>
                    <Text style={styles.login}>Login</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

export default withNavigation(CadastroScreen);

const styles = StyleSheet.create({

    imgContainer: {
        borderColor: '#000',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'

    },
    img: {
        borderRadius: 75,
        width: 150,
        height: 150
    },
    input: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: 10,
        width: '80%',
        height: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    cadastrarSenha: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    cadastrar: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: 20,
        padding: 20,
        width: '80%',
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        borderBottomColor: 'blue',
    },
    cadastrarText: {
        color: 'white',
        textAlign: 'center'
    },
    temConta: {
        marginTop: 30,
        color: 'grey',
        marginLeft: '10%',
    },
    login: {
        textAlign: 'right',
        marginRight: '17%',
        color: 'brown',
    }
})