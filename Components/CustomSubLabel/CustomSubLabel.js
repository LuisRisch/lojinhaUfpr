import React from 'react';
import { Text } from 'react-native'; 
import { Styles } from './Styles';

const CustomSubLabel = (props) => {
    return (
        <Text style={Styles.text_style}>
            {props.content}
        </Text>
    );
}

export default CustomSubLabel; 