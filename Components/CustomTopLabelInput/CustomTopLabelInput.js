import React from 'react'; 
import { Text , StyleSheet } from 'react-native'; 

export default function CustomTopLabelInput( props ){
    return(
        <Text style = { styles.normalText }> { props.label } </Text>
    );
} 

const styles = StyleSheet.create({
    normalText : {
        color : '#666666', 
        fontSize : 16, 
        fontWeight : '500'
    },
})