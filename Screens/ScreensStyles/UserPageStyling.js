import { StyleSheet } from 'react-native'; 
import Colors from '../../Constants/Colors'; 
import Spacing from '../../Constants/Spacing';
import FontSize from '../../Constants/FontSizes';
import Color from '../../Constants/Colors';
const Style = StyleSheet.create({
    PhotoContainer : {
        justifyContent : 'center' , 
        alignItems : 'center'  , 
        height : 150 , 
        width : 150 , 
        backgroundColor : Colors.lightGrey , 
        padding : 10, 
        borderRadius : 75 , alignSelf : 'center' , 
        marginVertical : Spacing.MainMargin,
    },
    TextBox : {
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
    screen : {flex : 1}, 
    header : { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '55%' },
    titleStyle : { fontSize: FontSize.SuperTall, color: Color.mainGrey, fontWeight: '500' }, 
    nameAndChangePhotoBox : { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }, 
    personNameStyle : { fontSize: FontSize.Tall, color: Color.mainGrey, fontWeight: 'bold' },
    changePhotoStyle : { color: Color.mainRed, fontSize: FontSize.Lower, fontWeight: '500' },
    logoStyle : { alignSelf: "center", width: 70, height: 70, bottom: 0 }
}) 

export { Style };