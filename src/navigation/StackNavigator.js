import React, { Component } from "react"
import { createStackNavigator } from "react-navigation-stack"
import DrawerItem from "./DrawerItem"
import TabBarIcon from "components/TabBarIcon"
// ============================== import das telas ============================== 
// import { LoginScreen } from "screens/Auth"
import { LoginScreen } from "../screens/Auth"

import Colors from "constants/Colors"

const bottomTabsStyle = {
    backgroundColor: Colors.backgroundWhite,
};
// ============================== criação das stacks ============================== 
// stack de autenticação
export const authStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            title: 'Login',
            headerShown: false
        }
    }
);

authStack.navigationOptions = {
    tabBarLabel: "Login",
};

// // stack nova
// export const homeStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//     },
//     {
//         initialRouteName: 'Home',
//         defaultNavigationOptions: {
//             title: 'Home Screen',
//             headerShown: false
//         }
//     }
// );

// Stack.navigationOptions = {
//     tabBarLabel: "Home",
//     drawerLabel: ({ focused }) => (
//         <DrawerItem focused={focused} title="Home" name="Home" />
//     ),
//     tabBarVisible: true,
//     tabBarOptions: {
//         activeTintColor: Colors.mainRed,
//         inactiveTintColor: Colors.mainPink,
//         labelStyle: {
//             fontSize: 10
//         },
//         style: bottomTabsStyle
//     },
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon
//             src={focused ? require("assets/icons/icon.png") : require("assets/icons/icon2.png")}
//             size={{ height: 30, width: 30, marginTop: 10 }}
//         />
//     )
// };
