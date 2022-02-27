import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = () => {
  return(
      // <NavigationContainer independent={true}>
      <NavigationContainer >  
        <Tabs/>
      </NavigationContainer>
  )
}

export default App;