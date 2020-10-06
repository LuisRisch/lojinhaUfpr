import React from "react";
import { StyleSheet, View } from "react-native";

import Spacing from "./src/data/Spacing";
import Colors from "./src/data/Colors";

import Routes from "./src/routes";

const App = () => {
  return (
    <View style={styles.screen}>
      <Routes/>
    </View>
  );
};
var styles = StyleSheet.create({
  screen: {
    paddingTop: Spacing.TopSpacingScreen,
    paddingHorizontal: Spacing.MainPadding,
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },

});

export default App;
