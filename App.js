import React from 'react';
import { StyleSheet, Text, View , Modal } from 'react-native';
import Home from './Screens/Home'; 
import Register from './Screens/Register';

const App = () => { 
  return (
    <View style = {styles.screen}>
      <Register/>
    </View>
  );
}

var styles = StyleSheet.create({
  screen : {
    paddingTop : 48,
    paddingHorizontal : 18, 
    flex : 1,  
    backgroundColor : '#fcf1e1'
  }
});

export default App; 
