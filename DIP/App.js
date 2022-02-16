import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs'
import TopBar from './navigation/TopBar';


const App = () => {
  return(
      <NavigationContainer independent={true}>
        <Tabs/>
      </NavigationContainer>
  )
}

export default App;