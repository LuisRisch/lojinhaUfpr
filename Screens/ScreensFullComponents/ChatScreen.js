import React, { useState } from 'react'; 
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import CustomTextInput from '../../Components/CustomInputs/CustomInputs'; 
import Colors from '../../Constants/Colors';
import Spacing from '../../Constants/Spacing'; 
import Icon from "react-native-vector-icons/FontAwesome"; 


const ChatScreen = () => {
    const [text , setText ] = useState(''); 
    const [MessageList , setMessageList ] = useState([]); 
    
    const onChangeText = ( EnteredText ) => {
        setText(EnteredText); 
    } 

    const onSubmitted = () => {
        if(text.length >= 1){
            const messages = [...MessageList]; 
            messages.push({
                content : text,  
                id : messages.length+1,
            })
            setMessageList(messages); 
            setText('');
        } 
        // console.log(MessageList);  
        // console.log(MessageList.length)
    } 

    const RenderMessage = ({item}) => {
        return(
            <Text>{item.content}</Text>
        ); 
    }
    return(
        <View style={{flexDirection:'column-reverse' , flex:1}}>
            <View style={{flexDirection:'row' , alignItems :'center'}}>
                <CustomTextInput 
                    hintText='Digite algo...' 
                    onChangeText={(text) => onChangeText(text)}
                    value={text}
                /> 
                <TouchableOpacity onPress={onSubmitted}>
                <Icon 
                    style={{paddingLeft: Spacing.MainPadding}}
                    name='paper-plane'  
                    color={text.length >= 1 ? Colors.mainRed : 'grey'}
                    size={20}
                /> 
                </TouchableOpacity>
            </View> 
            <FlatList 
                data={MessageList} 
                renderItem={RenderMessage}
                keyExtractor={(item) => item.id} 
                scrollEnabled={true}
            />
        </View>
    );
} 

export default ChatScreen;