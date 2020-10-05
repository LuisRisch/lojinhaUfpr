import { StyleSheet } from "react-native";
import Spacing from "../../Constants/Spacing";
import FontSize from "../../Constants/FontSizes";
import Color from "../../Constants/Colors";

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    sizedBox: {
        height: Spacing.MainMargin,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textCategoryStyle: {
        fontSize: FontSize.Normal,
        color: Color.mainGrey,
        fontWeight: "500",
    },
    popUpContainer: { 
        justifyContent: "center", 
        alignItems: "center" 
    },
    deleteAnnoucement: {
        color: Color.mainRed,
        fontWeight: "500",
        fontSize: FontSize.Lower,
    },
    divider: {
        width: "100%",
        borderColor: Color.mainGrey,
        borderWidth: 0.2,
        marginVertical: 2.5,
    },
    editAnnoucement: { 
        fontSize: FontSize.Lower, 
        fontWeight: "500" 
    },
    imageStyle: { 
        height: 200, 
        borderRadius: 16, 
        width: "100%" 
    },
    title: { 
        fontSize: FontSize.Tall, 
        fontWeight: "bold", 
        color: Color.mainGrey 
    },
    priceBox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    priceStyle: {
        color: Color.mainRed,
        fontWeight: "bold",
        fontSize: FontSize.Tall,
    },
    perUnity: {
        color: Color.mainGrey,
        fontWeight: "500",
        fontSize: FontSize.Tall,
    },
    AnnouncedBy: {
        color: Color.mainGrey,
        fontWeight: "500",
        fontSize: FontSize.Lower,
    },
    boxInformation: { 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },
    labelStyle: {
        fontSize: FontSize.Tall,
        color: Color.mainRed,
        fontWeight: "500",
        textDecorationLine: "underline",
    },
    subLabel: {
        color: Color.mainGrey,
        fontSize: FontSize.Lower,
        fontWeight: "500",
    },
    logoBox: { 
        flexDirection: "column-reverse", 
        flex: 1 
    },
    logoStyle: { 
        alignSelf: "center", 
        width: 70,
        height: 70, 
        bottom: 0 
    },
});

export { Styles };
