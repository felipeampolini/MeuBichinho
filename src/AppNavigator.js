import React from 'react'
import {Button} from 'react-native'
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
                <Button
                    // PRECISA FAZER UM BOTAO PRA RETORNAR PRA TELA DE LOGIN (LoginScreen)
                    // onPress={() => <LoginScreen navigation={this.navigation} />}
                    title="<"
                    color="white"
                />
            ),
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTintColor: 'black'
        })
    },
    MainScreen: {
        screen: MainScreen,
        navigationOptions: () => ({
            title: 'Meu Bichinho',
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTintColor: 'black'
        })
    }
})

const AppNavigator = createAppContainer(stack)

export default AppNavigator;