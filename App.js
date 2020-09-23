import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './Screens/ScreensFullComponents/Home';
import Register from './Screens/ScreensFullComponents/Register';
import Spacing from './Constants/Spacing'; 
import Colors from './Constants/Colors';
import MainProducts from './Screens/ScreensFullComponents/MainProducts'; 
import ProductScreen from './Screens/ScreensFullComponents/ProductScreen'; 
import ChatScreen from './Screens/ScreensFullComponents/ChatScreen'; 
const App = () => {
    return (
        <View style={styles.screen}>
            <ChatScreen/>
        </View>
    );
}

var styles = StyleSheet.create({
    screen: {
        paddingTop: Spacing.TopSpacingScreen,
        paddingHorizontal: Spacing.MainPadding,
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
    }
});

export default App; 
