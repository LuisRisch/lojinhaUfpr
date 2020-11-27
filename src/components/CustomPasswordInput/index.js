import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Styles";

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

export default function CustomPasswordInput(props) {
  const [isHidden, setIsHidden] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const changeStateHidden = () => {
    setIsHidden(!isHidden);
  };

  if (fontsLoaded) {
    return (
      <View>
        <View
          style={
            props.error ? styles.errorContainer : styles.textInputContainer
          }
        >
          <TextInput
            placeholder={props.hintText}
            onChangeText={(this, props.onChangeText)}
            secureTextEntry={isHidden}
            value={props.value}
            style={styles.textInputStyle}
          />
          <TouchableWithoutFeedback onPress={changeStateHidden}>
            <Icon
              name={isHidden ? "eye" : "eye-slash"}
              size={18}
              color={"#666666"}
            />
          </TouchableWithoutFeedback>
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
