import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    imageBack: { height: "100%", width: DEVICE_WIDTH },
    circlesContainer: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    wihiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff",
    },
    currCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 5,
        backgroundColor: "#fff",
    }
});  

export {styles};
