import React from "react";
import * as Notifications from "expo-notifications";
import { StyleSheet, View } from "react-native";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

// import Spacing from "./src/data/Spacing";
// import Colors from "./src/data/Colors";

import Routes from "./src/routes";

import { store, persistor } from "./src/store/index";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: false,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
// var styles = StyleSheet.create({
//   screen: {
//     paddingTop: Spacing.TopSpacingScreen,
//     paddingHorizontal: Spacing.MainPadding,
//     flex: 1,
//     backgroundColor: Colors.backgroundWhite,
//   },
// });

export default App;
