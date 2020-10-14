import FontSizes from "../../data/FontSizes";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    Screen: {
        flex: 1,
    },
    Title: { fontSize: 25, color: Colors.mainRed, fontWeight: "500" },
    SubTitle: {
        fontSize: FontSizes.Tall,
        color: Colors.mainGrey,
        fontWeight: "500",
    },
    buttonContainer: {
        backgroundColor: Colors.mainRed,
        marginTop: Spacing.MainMargin,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    buttonLabel: {
        color: "white",
        fontSize: FontSizes.Normal,
        fontWeight: "500",
    },
    Instructions: {
        color: Colors.lightGrey,
        fontSize: FontSizes.Lower,
        fontWeight: "500",
    },
    RestOfScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    inputsContainer: {
        borderRadius: 16,
        backgroundColor: "white",
        paddingHorizontal: Spacing.MainPadding,
        paddingVertical: Spacing.MainPadding + 6, // 24
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        width: "100%",
    },
    BackModalScreen: {
        paddingVertical: Spacing.TopSpacingScreen,
        flex: 1,
        backgroundColor: "#bfbfbf",
        opacity: 0.88,
        justifyContent: "center",
        alignItems: "center",
    },
    BackModalAlert: {
        backgroundColor: "white",
        marginHorizontal: Spacing.MainMargin,
        padding: Spacing.MainPadding,
        width: "90%",
        opacity: 1,
        borderRadius: 28,
    },
    TitleModalStyle: {
        alignSelf: "center",
        color: Colors.mainGrey,
        fontSize: FontSizes.Tall,
        fontWeight: "bold",
    },
    SubTitleModalStyle: {
        alignSelf: "center",
        color: Colors.lightGrey,
        fontSize: FontSizes.Normal,
        fontWeight: "500",
        textAlign: "justify",
      },
    ChoosePhoto: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: 150,
        backgroundColor: Colors.lightGrey,
        borderRadius: 75,
        alignSelf: "center",
        marginVertical: Spacing.MainMargin,
    },
});

export { styles }