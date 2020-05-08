import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import SelectFood from '../Screen/Foods';
import EditFood from '../Screen/EditFood';

// Declare Default Header Component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectFood" component={SelectFood} />
        <Stack.Screen name="EditFood" component={EditFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
