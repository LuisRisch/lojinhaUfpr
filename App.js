import React, { useState } from 'react';
import { StyleSheet, Text, View , Modal } from 'react-native';

import AppNavigator from "./src/navigation/AppNavigator"

import Colors from 'constants/Colors';

const App = () => { 
  let { signed, setSigned } = useState(true);
  let Drawer = AppNavigator(signed)

  return (
    <View style={styles.container}>
      <Drawer />
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
