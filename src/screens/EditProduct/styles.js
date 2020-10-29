import Colors from '../../data/Colors';
import FontSize from '../../data/FontSizes';
import Spacing from '../../data/Spacing'; 
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-between',
    },
    category_box: {
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        width: "100%",
        backgroundColor: Colors.ultraLightGrey,
        height: 35,
        borderRadius: 16,
        paddingHorizontal: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5,
    },
    icon_box: {
        backgroundColor: Colors.mainRed,
        justifyContent: "center",
        alignItems: "center",
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    category_text: {
        color: Colors.mainRed,
        fontSize: FontSize.Tall,
        fontFamily: "ralway-regular-semi",
        // fontWeight: "500",
    },
    sizedBox: {
        height: 18,
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
        fontFamily: "ralway-regular-bold",
        fontSize: FontSize.Tall,
        // fontWeight: "bold",
    },
    SubTitleModalStyle: {
        alignSelf: "center",
        color: Colors.lightGrey,
        fontSize: FontSize.Normal,
        // fontWeight: "500",
        fontFamily: "ralway-regular-semi",
        textAlign: "justify",
    },
    pictureBox: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        borderStyle: "dashed",
        borderRadius: 10,
        borderColor: Colors.mainRed,
        borderWidth: 2,
        marginVertical: 20,
    },
    pictureComponent: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
}) 

export { styles }