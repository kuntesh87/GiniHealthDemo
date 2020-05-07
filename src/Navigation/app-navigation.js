import React from 'react';
import Header from '../Components/header';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
// Declare Default Header Component
const navigationOptions = ({navigation}) => ({
  header: (
    <Header
      navigationProps={navigation}
      hideRightIcon={navigation.getParam('hideRightIcon')}
      hideLeftIcon={navigation.getParam('hideLeftIcon')}
      title={navigation.getParam('headerTitle')}
      titleElement={navigation.getParam('titleElement')}
      hasSubheader={navigation.getParam('subheader')}
      isBack={navigation.getParam('isBack')}
      previousScreen={navigation.getParam('previousScreen')}
    />
  ),
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
