import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { authStack } from "./StackNavigator"

import DrawerItem from "./DrawerItem";

// opções da barra de navegação
const tabNavigator = createBottomTabNavigator(
    {
        // homeStack
        authStack, //remover
    },
    {
        // initialRouteName: 'homeStack'
        initialRouteName: 'authStack' //remover
    }
)

tabNavigator.navigationOptions = {
    drawerLabel: ({ focused }) => null,
}

export default tabNavigator
