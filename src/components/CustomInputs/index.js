import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./Styles";
import Colors from "../../data/Colors";
import fontSize from "../../data/FontSizes";
import FontSizes from "../../data/FontSizes";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

export default function CustomInputs(props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={{ width: "100%" }}>
        <View
          style={
            props.error ? styles.errorContainer : styles.textInputContainer
          }
        >
          <TextInput
            multiline={true}
            placeholder={props.hintText}
            onChangeText={(this, props.onChangeText)}
            value={props.value}
            style={styles.textInputStyle}
            maxLength={300}
          />
        </View>
        {props.error ? (
          <Text style={styles.errorMessage}>* {props.errorMessage}</Text>
        ) : null}
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
