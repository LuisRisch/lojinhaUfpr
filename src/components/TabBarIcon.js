import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function TabBarIcon(props) {
    let src = props.src;
    let size = props.size;
    return (
        <Image
            source={src}
            style={size} />
    );
}
