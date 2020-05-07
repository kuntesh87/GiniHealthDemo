import React, {Component} from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class ListItem extends Component {
  render() {
    const {food} = this.props;
    console.log(food);
    return (
      <View>
        <DataTable.Row>
          <DataTable.Cell>{food.food_name}</DataTable.Cell>
          <DataTable.Cell>{food.nf_calories}</DataTable.Cell>
          <DataTable.Cell>{food.serving_qty}</DataTable.Cell>
        </DataTable.Row>
      </View>
    );
  }
}
