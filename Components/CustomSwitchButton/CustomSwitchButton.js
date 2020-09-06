import React , { useState } from 'react'; 
import { Switch } from 'react-native'; 

export default function CustomSwitchButton(){ 

    const [isEnabled , setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState) 

    return (
        <Switch
            style = {{alignSelf : 'center'}}
            trackColor={{ false: "#b9b9b9", true: "#FA8072" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}