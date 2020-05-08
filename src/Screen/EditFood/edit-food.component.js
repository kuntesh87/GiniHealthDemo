import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {updateLogTest} from '../../Api/Api';

export default class EditFood extends React.Component {
  state = {};

  updateFood = async (food) => {
    await updateLogTest(food);
    this.props.fetchFoodlog();
    this.props.navigation.navigate('Home');
  };

  render() {
    return <View />;
  }
}
