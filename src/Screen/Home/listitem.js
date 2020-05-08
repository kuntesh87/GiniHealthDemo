import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable, IconButton, Colors} from 'react-native-paper';

export default class ListItem extends Component {
  render() {
    const {food, analysisFood, updateFood, deleteFood} = this.props;
    console.log(food);
    return (
      <View>
        <DataTable.Row>
          <DataTable.Cell>{food.data.food_name}</DataTable.Cell>
          <DataTable.Cell>{food.data.nf_calories}</DataTable.Cell>
          <IconButton
            icon="google-analytics"
            color={Colors.red500}
            size={20}
            onPress={() => analysisFood(food)}
          />
          <IconButton
            icon="pencil-outline"
            color={Colors.red500}
            size={20}
            onPress={() => updateFood(food)}
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
