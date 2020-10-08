import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

// import Spacing from "./src/data/Spacing";
// import Colors from "./src/data/Colors";

import Routes from "./src/routes";

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
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
