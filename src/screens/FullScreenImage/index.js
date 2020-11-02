import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from './styles';

const FullScreenImage = ({ navigation: { goBack }, route }) => {
    const images = [...route.params.params]
    const [currIndex, setCurrIndex] = useState(0);

    const HandleScroll = (event) => {
        const VIEW_SIZE = event.nativeEvent.layoutMeasurement.width;
        const CONTENT_OF_SET = event.nativeEvent.contentOffset.x;
        const SELECTED_INDEX = Math.round(CONTENT_OF_SET / VIEW_SIZE);
        console.log()
        console.log(SELECTED_INDEX);
        setCurrIndex(SELECTED_INDEX);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView horizontal pagingEnabled onMomentumScrollEnd={HandleScroll} showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                    <Image key={index} source={{ uri: image.url }} style={styles.imageBack} />
                ))}
            </ScrollView>
            <View style={styles.circlesContainer}>
                {images.map((img, i) => (
                    <View
                        key={i}
                        style={[
                            currIndex === i ? styles.currCircle : styles.wihiteCircle,
                            { opacity: i === currIndex ? 1 : 0.5 }
                        ]}
                    />
                ))}
            </View>
            <TouchableOpacity
                style={{ position: 'absolute', top: 42, left: 18 }}
                onPress={() => goBack()}
            >
                <Icon
                    name="chevron-left"
                    size={20}
                    color="#c4c4c4"
                />
            </TouchableOpacity>
        </View>
    );
};

export default FullScreenImage;
