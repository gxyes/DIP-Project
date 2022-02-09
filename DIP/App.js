import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs'



const App = () => {
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App;