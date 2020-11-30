import React, {useState} from 'react';
import { Text } from 'react-native'; 
import { Styles } from './Styles'; 

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


const CustomSubLabel = (props) => { 
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if(fontsLoaded){
        return (
            <Text style={Styles.text_style}>
                {props.content}
            </Text>
        );
    } else {
        return <AppLoading 
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
        />
    }
    
}

export default CustomSubLabel; 