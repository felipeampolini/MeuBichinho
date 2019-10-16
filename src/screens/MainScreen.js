import React from 'react'
import { Text } from 'react-native'
import Component1 from '../components/Component1'
import Newsfeed from '../components/Newsfeed'
import Carteirinha from '../components/Carteirinha'
import Configuracoes from '../components/Configuracoes'
import Home from '../components/Home'
import CamComponent from '../components/CamComponent'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default createMaterialBottomTabNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor}) => (
                <Icon name="bell-outline" color={tintColor} size={24}></Icon>
            )
        }
    },
    Newsfeed: {
        screen: Newsfeed,
        navigationOptions: {
            tabBarLabel: 'Newsfeed',
            tabBarIcon:({tintColor}) => (
                <Icon name="bell-outline" color={tintColor} size={24}></Icon>
            )
        }
    },
    // CamComponent: {
    //     screen: CamComponent,
    //     navigationOptions: {
    //         tabBarLabel: 'Cam Component',
    //         tabBarIcon:({tintColor}) => (
    //             <Icon name="calendar" color={tintColor} size={24}></Icon>
    //         )
    //     }
    // },
    Component3: {
        screen: Carteirinha,
        navigationOptions: {
            tabBarLabel: 'Carteirinha',
            tabBarIcon:({tintColor}) => (
                <Icon name="pencil" color={tintColor} size={24}></Icon>
            )
        }
    },
    Component4: {
        screen: Configuracoes,
        navigationOptions: {
            tabBarLabel: 'Componente 4',
            tabBarIcon:({tintColor}) => (
                <Icon name="pencil" color={tintColor} size={24}></Icon>
            )
        }
    }
}, {
    initialRouteName: 'Home',
    activeColor: 'blue',
    inactiveColor: 'red',
    barStyle: {backgroundColor: '#fff'}
})