import React from 'react'; 
import { Text  } from 'react-native'; 
import { styles } from './Styles'; 

export default function CustomTopLabelInput( props ){
    return(
        <Text style = { styles.normalText }>{ props.label } </Text>
    );
} 
