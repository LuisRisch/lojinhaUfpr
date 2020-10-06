import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Styles';
import { Link } from 'react-router-native';

export default function CustomButtons(props) {
    console.log(props.href)
    return (
        <TouchableOpacity onPress={props.onButtonPressed} style={{ ...styles.buttonContainer, ...props.Color }} >
            <Link to={props.link}>
                <Text>
                    {props.Label}
                </Text>
            </Link>
        </TouchableOpacity>
    );
};

