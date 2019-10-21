import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native'


export default class Home extends React.Component {

    render() {
        return(
            <View>
                <Text style={styles.textoBichinho}>Como está o seu bichinho hoje?</Text>
                <View style={styles.grupo_imagem}>
                    <View style={styles.elemento_imagem}>
                        <Image
                            style={styles.imagemBichinho}
                            source={{uri: 'https://rickey-6652.kxcdn.com/wp-content/uploads/2017/02/Watermelon-Bird-Is-Perfect.png'}}
                        />
                    </View>
                    

                    <View style={styles.elemento_imagem}>
                        <Image
                            style={styles.imagemBichinho}
                            source={{uri: 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Add-icon.png'}}
                        />
                    </View>
                </View>
            </View>
        ) 
    }

}

const styles = StyleSheet.create({

    grupo_imagem: {
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center'
    },

    elemento_imagem: {
        flex:1
    },

    textoBichinho: {
        color: '#4C2104',
        fontSize: 30,
        fontWeight: 'bold',
        width: '60%',
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'center'
    },
    imagemBichinho: {
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3,
        borderRadius: 100,
        marginLeft: 20,
        marginRight: 20,   
    }
})