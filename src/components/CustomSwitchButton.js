import React, { useState } from 'react'; 
import { Switch } from 'react-native'; 

import Colors from '../constants/Colors'

export default function CustomSwitchButton(){ 

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState) 

    return (
        <Switch
            style = {{alignSelf: 'center'}}
            trackColor={{ false: Colors.lightGrey, true: Colors.mainPink }}
            thumbColor={isEnabled ? Colors.ultraLightGrey: Colors.ultraLightGrey}
            ios_backgroundColor={Colors.darkGrey}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}