import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable, IconButton, Colors} from 'react-native-paper';

export default class ListItem extends Component {
  render() {
    const {food, addFood} = this.props;

    return (
      <View>
        <DataTable.Row>
          <DataTable.Cell>{food.food_name}</DataTable.Cell>
          <DataTable.Cell>{food.nf_calories}</DataTable.Cell>

          <IconButton
            icon="plus"
            color={Colors.red500}
            size={20}
            onPress={() => addFood(food)}
          />
        </DataTable.Row>
      </View>
    );
  }
}
