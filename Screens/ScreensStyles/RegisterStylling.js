import { StyleSheet , Dimensions } from 'react-native'; 
import Colors from '../../Constants/Colors';
import FontSizes from '../../Constants/FontSizes'; 
import Spacing from '../../Constants/Spacing';

const widht = Dimensions.get('window').width; 

const styles = StyleSheet.create({
    screen : {
        flex : 1 , 
        justifyContent : 'space-between' , 
    },  

    topContaine : {
        flexDirection : 'row',
        alignItems : 'center',
        position : 'relative',  
        width : '100%', 
    }, 

    normalTextTitle : {
        color : Colors.mainGrey, 
        fontSize : FontSizes.SuperTall, 
        fontWeight : 'bold',  
        alignContent : 'center', 
        left : widht / 3.3
    }, 

    backIcon : { 
        top : 0, 
        left : 0, 
    }, 
    
    lowerTexT : {
        color : Colors.mainGrey , 
        fontSize : FontSizes.TooLower , 
        fontWeight : '500', 
    },

    lowerTextUnderline : {
        color : Colors.mainGrey , 
        fontSize : FontSizes.TooLower , 
        fontWeight : '500', 
        textDecorationLine : 'underline',
        flexShrink : 1, 
    }, 

    sizedBox : {
        height : 18
    },   
    BackModalScreen: {
        paddingVertical : Spacing.TopSpacingScreen,
        flex: 1,
        backgroundColor: '#bfbfbf',
        opacity: 0.88,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BackModalAlert: {
        backgroundColor: 'white',
        marginHorizontal: Spacing.MainMargin,
        padding: Spacing.MainPadding,
        width: '90%',
        opacity: 1,
        borderRadius: 28
    },
    TitleModalStyle: {
        alignSelf: 'center',
        color: Colors.mainGrey,
        fontSize: FontSizes.Tall,
        fontWeight: 'bold'
    },
    SubTitleModalStyle: {
        alignSelf: 'center',
        color: Colors.lightGrey,
        fontSize: FontSizes.Normal,
        fontWeight: '500', 
        textAlign : 'justify'
    }, 
    ChoosePhoto : {
        justifyContent : 'center' , 
        alignItems : 'center'  , 
        height : 150 , 
        width : 150 , 
        backgroundColor : Colors.lightGrey , 
        borderRadius : 75 , alignSelf : 'center' , 
        marginVertical : Spacing.MainMargin,
    }, 
    CheckBoxContainer : {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginVertical: 18,
    }
}); 

export {styles};