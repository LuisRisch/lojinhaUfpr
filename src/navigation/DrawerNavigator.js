import { createDrawerNavigator } from "react-navigation-drawer"
import { healthStack, scheduleStack, consultStack, sharedActStack, assignedActStack, emergencyStack, contactsStack, profileStack, groupsStack, configStack } from "./StackNavigator"
import tabNavigator from "./TabNavigator"
// import MainMenu from "./MainMenu"

// opções do menu de navegação
export default createDrawerNavigator(
    {
        Home: tabNavigator,
        // Health: healthStack,
        // Schedule: scheduleStack,
        // Consult: consultStack,
        // SharedAct: sharedActStack,
        // AssignedAct: assignedActStack,
        // Emergency: emergencyStack,
        // Contacts: contactsStack,
        // Profile: profileStack,
        // Groups: groupsStack,
        // Config: configStack
    },
    // MainMenu
)

