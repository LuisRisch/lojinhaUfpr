import { StyleSheet, StatusBar } from 'react-native'
import Colors from '../../data/Colors';
import FontSizes from '../../data/FontSizes';
import Spacing from '../../data/Spacing';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        marginTop: StatusBar.currentHeight,
        backgroundColor: Colors.backgroundWhite,
    },
    title: {
        fontFamily: 'ralway-regular-bold',
        color: Colors.mainRed,
        fontSize: 25
    },
    subTitle: {
        fontFamily: 'ralway-regular-semi',
        fontSize: FontSizes.Normal,
        color: Colors.mainGrey
    },
    instructions: {
        fontFamily: 'ralway-regular',
        fontSize: FontSizes.Lower,
        color: Colors.lightGrey
    },
    inputs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: FontSizes.Tall,
        // fontWeight: "bold",
    },
    SubTitleModalStyle: {
        alignSelf: "center",
        color: Colors.lightGrey,
        fontFamily: "ralway-regular-semi",
        fontSize: FontSizes.Normal,
        // fontWeight: "500",
        textAlign: "justify",
    },
    timerWarning:{
        color: Colors.mainGrey,
        fontFamily: "ralway-regular-semi",
        fontSize: FontSizes.Lower,
        textAlign : 'center'
    },
    timer: { 
        marginTop: 9,
        fontFamily: 'Mplus-semi',
        fontSize: FontSizes.Tall,
        textAlign: 'center', 
        color: Colors.mainRed
    }
})

export { styles }