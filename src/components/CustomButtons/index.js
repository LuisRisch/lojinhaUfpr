import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './Styles';
import { Link } from 'react-router-native';

export default function CustomButtons(props) {
    console.log(props.href)
    return (
        <View style={{ ...styles.buttonContainer, ...props.Color }} >
            <Link to={{ pathname: '/MainProducts' }}>
                <Text style={styles.buttonLabel}>{props.Label}</Text>
            </Link>
        </View>
    );
};

