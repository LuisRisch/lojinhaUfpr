import { StyleSheet } from 'react-native'; 
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
    textInputContainer : { 
        justifyContent :  'center',
        width : '100%',
        backgroundColor : Colors.ultraLightGrey , 
        height : 35 , 
        borderRadius : 16 , 
        paddingStart : 8 , 
        marginVertical : 5, 
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 2
        },   
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5
    }
})

export {styles};
