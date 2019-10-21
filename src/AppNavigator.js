import React from 'react'
import { Button, View, Image, StyleSheet} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import RecuperarSenhaScreen from './screens/RecuperarSenhaScreen'
import CadastroScreen from './screens/CadastroScreen'

const stack = createStackNavigator({
    LoginScreen: {
        screen: () => <LoginScreen navigation={this.navigation} />
    },
    CadastroScreen: {
        screen: CadastroScreen,
        navigationOptions: {
            header: null,
        }
    },
    RecuperarSenhaScreen: {
        screen: RecuperarSenhaScreen,
        navigationOptions: () => ({
            headerLeft: (
                <View>
                    <Button
                        title="<"
                        color="black"
                    />
                </View>
                ),
            headerRight: (
                <Image
                    style={styles.icone_bichinho}
                    source={{uri: 'https://rickey-6652.kxcdn.com/wp-content/uploads/2017/02/Watermelon-Bird-Is-Perfect.png'}}
                />
            ),
            title: 'Recuperar senha',
            headerStyle: {
                backgroundColor: 'white',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            headerTintColor: '#4C2104'
        })
    },
        
    MainScreen: {
        screen: MainScreen,
        navigationOptions: () => ({
            headerLeft: (
                <View>
                    <Button
                        title="<"
                        color="black"
                    />
                </View>
                ),
            headerRight: (
                <Image
                    style={styles.icone_bichinho}
                    source={{uri: 'https://rickey-6652.kxcdn.com/wp-content/uploads/2017/02/Watermelon-Bird-Is-Perfect.png'}}
                />
            ),
            title: 'Meu Bichinho',
            headerStyle: {
                backgroundColor: 'white',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            headerTintColor: '#4C2104'
        })
    }
})

const AppNavigator = createAppContainer(stack)

export default AppNavigator;

const styles = StyleSheet.create({
    texto_Topo: {
    textAlign: 'center'        
    },

    icone_bichinho: {
        width: 45, 
        height: 45, 
        borderRadius: 100,
        marginRight: 5
    }
})