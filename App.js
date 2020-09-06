import React from 'react';
import { StyleSheet, Text, View , Modal } from 'react-native';
import LoginScreen from './src/screens/Auth/LoginScreen'; 

import Colors from './src/constants/Colors';

const App = () => { 
  return (
    <View style = {styles.screen}>
      <LoginScreen/>
    </View>
  );
}

var styles = StyleSheet.create({
  screen : {
    paddingTop : 48,
    paddingHorizontal : 18, 
    flex : 1,  
    backgroundColor : Colors.backgroundWhite,
  }
});

export default App; 
