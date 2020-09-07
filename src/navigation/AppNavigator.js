import { createAppContainer, createSwitchNavigator } from "react-navigation"
import DrawerNavigator from "./DrawerNavigator"
import { authStack } from "./StackNavigator"

// inicia controle de navegação do app com menu e barra
export default AppNavigator = (signed = false) => {
    console.log('appnavigator')
    return createAppContainer(
        // navegador pelo menu e de autenticação
        createSwitchNavigator(
            {
                // Main: DrawerNavigator,
                Auth: authStack
            },
            {
                headerMode: 'none',
                mode: 'modal',
                // initialRouteName: signed ? 'Main' : 'Auth',
                initialRouteName: 'Auth',
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        )
    )
}