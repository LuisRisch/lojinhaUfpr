import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
import FontSizes from '../../Constants/FontSizes';
import Spacing from '../../Constants/Spacing'; 

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor : Colors.mainRed,
        marginTop : Spacing.MainMargin,  
        height : 35, 
        justifyContent : 'center', 
        alignItems : 'center' , 
        borderRadius : 16
    }, 

    buttonLabel : {
        color : 'white' ,  
        fontSize : FontSizes.Normal, 
        fontWeight : '500'
    }
}); 

export {styles};
