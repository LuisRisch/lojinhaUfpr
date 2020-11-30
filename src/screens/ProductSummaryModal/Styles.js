import { StyleSheet, Dimensions } from 'react-native';
import Spacing from '../../data/Spacing';
import Colors from '../../data/Colors';
import FontSize from '../../data/FontSizes';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: Spacing.MainPadding,
        paddingTop : Spacing.TopSpacingScreen,
        paddingBottom : Spacing.MainMargin,
        backgroundColor: Colors.backgroundWhite, 
        justifyContent : 'space-between'
    },
    title: {
        textAlign: 'center',
        fontSize: FontSize.SuperTall, 
        fontFamily : 'ralway-regular-semi',
        // fontWeight: '500',
        color: Colors.mainGrey
    },
    sizedBox: {
        height: Spacing.MainMargin
    },
    imageStyle: {
        height: width - 36,
        width: width - 36,
        borderRadius: 16,
    },
    BoxInfo: {
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
    }, 
    TitleInfo:{
        color : Colors.mainRed,  
        fontFamily : 'ralway-regular-semi',
        // fontWeight : '500', 
        fontSize : FontSize.Tall, 
        textDecorationLine : 'underline'
    }, 
    subTitle:{
        fontSize : FontSize.Lower, 
        // fontWeight : '500' 
        fontFamily : 'ralway-regular-semi',
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
      },
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
}) 

export {styles}