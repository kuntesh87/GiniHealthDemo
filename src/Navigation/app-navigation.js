import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import SelectFood from '../Screen/Foods/select-food';
// Declare Default Header Component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectFood" component={SelectFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
