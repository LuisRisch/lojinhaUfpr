import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Screens/ScreensFullComponents/Home";
import Register from "./Screens/ScreensFullComponents/Register";
import Spacing from "./Constants/Spacing";
import Colors from "./Constants/Colors";
import MainProducts from "./Screens/ScreensFullComponents/MainProducts";
import UserPage from "./Screens/ScreensFullComponents/UserPage";
import ProductScreen from "./Screens/ScreensFullComponents/ProductScreen";
import ChatScreen from "./Screens/ScreensFullComponents/ChatScreen";
import CreateAnnouncement from "./Screens/ScreensFullComponents/CreataAnnouncement";
import ConfirmAnnouncement from "./Screens/ScreensFullComponents/ConfirmAnnouncement";
const App = () => {
  return (
    <View style={styles.screen}>
      {/* <ConfirmAnnouncement/> */}
      <MainProducts />
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
