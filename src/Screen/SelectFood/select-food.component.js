import * as React from 'react';
import {DataTable, Searchbar} from 'react-native-paper';
import {searchFood} from '../../Api/NutritionixApi';
import {View, FlatList} from 'react-native';
import ListItem from './listitem';
import {logFoodTest} from '../../Api/Api';

export default class SelectFood extends React.Component {
  state = {
    searchQuery: '',
    foods: [],
  };

  _onChangeSearch = async (query) => {
    if (query) {
      this.setState({searchQuery: query});
      const searchedFood = await searchFood(query);
      this.setState({foods: searchedFood});
    } else {
      this.setState({foods: []});
      this.setState({searchQuery: query});
    }
  };

  addFood = async (food) => {
    try {
      await logFoodTest(food);
      this.props.fetchFoodlog();
      this.props.navigation.navigate('Home');
      this.props.openToast('Foodlog Inserted');
    } catch (err) {
      this.props.openToast('Error in Foodlog Insertion.');
    }
  };

  renderListItem = ({item, index}) => (
    <ListItem
      food={item}
      navigation={this.props.navigation}
      addFood={this.addFood}
      index={index}
    />
  );
  keyExtractor = (item, index) => index.toString();
  render() {
    const {searchQuery, foods} = this.state;
    const {branded} = foods;
    return (
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={this._onChangeSearch}
          value={searchQuery}
        />
        <DataTable>
          <FlatList
            ListHeaderComponent={
              <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Calories</DataTable.Title>
                <DataTable.Title>View Detail</DataTable.Title>
              </DataTable.Header>
            }
            data={branded}
            renderItem={this.renderListItem}
            keyExtractor={this.keyExtractor}
          />
        </DataTable>
      </View>
    );
  }
}
