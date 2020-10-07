import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './Styles';
import { Link } from 'react-router-native';

export default function CustomButtons(props) {
    return (
        <View style={{ ...styles.buttonContainer}} >
            <Link to={props.link}>
                <Text style={styles.buttonLabel}>
                    {props.Label}
                </Text>
            </Link>
        </View>
    );
};

