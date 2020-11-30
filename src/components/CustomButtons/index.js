import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
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


export default function CustomButtons(props) { 
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <TouchableOpacity
        style={{ ...styles.buttonContainer }}
        onPress={props.onButtonPressed}
      >
        <Text style={styles.buttonLabel}>{props.Label}</Text>
      </TouchableOpacity>
    );
  } else {
    return <AppLoading 
      startAsync={getFonts} 
      onFinish={() => setFontsLoaded(true)}
    />
  }
  
}
