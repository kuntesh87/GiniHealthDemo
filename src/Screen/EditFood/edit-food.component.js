import * as React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, SafeAreaView} from 'react-native';
import {updateLogTest} from '../../Api/Api';

export default class EditFood extends React.Component {
  state = {
    id: '',
    food_name: '',
    nf_calories: '',
    brand_name: '',
    brand_name_item_name: '',
    isOldValue: true,
  };

  updateFood = async () => {
    try {
      const {id} = this.props.food;
      const {
        food_name,
        nf_calories,
        brand_name,
        brand_name_item_name,
      } = this.state;
      const food = {
        id,
        food_name,
        nf_calories: Number(nf_calories),
        brand_name,
        brand_name_item_name,
      };
      await updateLogTest(food);
      this.props.fetchFoodlog();
      this.props.navigation.navigate('Home');
      this.props.openToast('Foodlog updated.');
    } catch (err) {
      this.props.openToast(' Erro in Foodlog update.');
    }
  };

  cancelFood = async () => {
    this.props.navigation.navigate('Home');
  };

  static getDerivedStateFromProps(props, state) {
    if (state.isOldValue) {
      return {
        id: props.food.id,
        food_name: props.food.data.food_name,
        nf_calories: props.food.data.nf_calories.toString(),
        brand_name: props.food.data.brand_name,
        brand_name_item_name: props.food.data.brand_name_item_name,
        isOldValue: false,
      };
    }
    return state;
  }
  render() {
    return (
      <SafeAreaView style={{margin: 15, flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <TextInput
              label="Food name"
              value={this.state.food_name}
              onChangeText={(text) => this.setState({food_name: text})}
            />
            <TextInput
              label="Calories"
              value={this.state.nf_calories}
              onChangeText={(text) => this.setState({nf_calories: text})}
            />
            <TextInput
              label="Brand name"
              value={this.state.brand_name}
              onChangeText={(text) => this.setState({brand_name: text})}
            />
            <TextInput
              label="Brand Name-Item Name"
              value={this.state.brand_name_item_name}
              onChangeText={(text) =>
                this.setState({brand_name_item_name: text})
              }
            />
          </View>
          <View style={{flex: 1, marginTop: 20, flexDirection: 'row'}}>
            <View style={{marginLeft: 100}}>
              <Button mode="contained" onPress={() => this.cancelFood()}>
                Cancel
              </Button>
            </View>
            <View style={{marginRight: 50, marginLeft: 10}}>
              <Button mode="contained" onPress={() => this.updateFood()}>
                Submit
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
