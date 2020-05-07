import * as React from 'react';
import {DataTable, Button} from 'react-native-paper';
import {getLogTest} from '../Api/Api';
import {View, FlatList} from 'react-native';
import ListItem from './Foods/listitem';

export default class Home extends React.Component {
  state = {
    searchQuery: '',
    foods: [],
  };

  onAddClick = () => {
    this.props.navigation.navigate('SelectFood');
  };
  renderListItem = ({item, index}) => <ListItem food={item} index={index} />;
  keyExtractor = (item, index) => index.toString();
  render() {
    const {foods} = this.state;
    return (
      <View>
        <Button icon="plus" mode="contained" onPress={() => this.onAddClick()}>
          Add New
        </Button>
        {foods.length > 0 ? (
          <DataTable>
            <FlatList
              ListHeaderComponent={
                <DataTable.Header>
                  <DataTable.Title>Name</DataTable.Title>
                  <DataTable.Title>Calories</DataTable.Title>
                  <DataTable.Title>View Detail</DataTable.Title>
                </DataTable.Header>
              }
              data={foods}
              renderItem={this.renderListItem}
              keyExtractor={this.keyExtractor}
            />
          </DataTable>
        ) : null}
      </View>
    );
  }
}
