import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable, IconButton, Colors} from 'react-native-paper';
import {logFoodTest} from '../../Api/Api';

export default class ListItem extends Component {
  addFood = async (food) => {
    await logFoodTest(food);
    this.props.navigation.navigate('Home');
  };
 
  render() {
    const {food, deleteFood} = this.props;
    return (
      <View>
        <DataTable.Row>
          <DataTable.Cell>{food.data.food_name}</DataTable.Cell>
          <DataTable.Cell>{food.data.nf_calories}</DataTable.Cell>
          <IconButton
            icon="pencil-outline"
            color={Colors.red500}
            size={20}
            onPress={() => this.addFood(food)}
          />

          <IconButton
            icon="trash-can"
            color={Colors.red500}
            size={20}
            onPress={() => deleteFood(food)}
          />
        </DataTable.Row>
      </View>
    );
  }
}
