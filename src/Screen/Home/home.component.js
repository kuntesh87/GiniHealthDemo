import * as React from 'react';
import {DataTable, Button} from 'react-native-paper';
import {View, FlatList} from 'react-native';
import ListItem from './listitem';

export default class Home extends React.Component {

  onAddClick = () => {
    this.props.navigation.navigate('SelectFood');
  };
  renderListItem = ({item, index}) => <ListItem food={item} index={index} />;
  keyExtractor = (item, index) => index.toString();

  componentDidUpdate() {
    this.props.fetchFoodlog();
  }
  render() {
    const {foodLog} = this.props;
    return (
      <View>
        <Button icon="plus" mode="contained" onPress={() => this.onAddClick()}>
          Add New
        </Button>
        {foodLog.length > 0 ? (
          <DataTable>
            <FlatList
              ListHeaderComponent={
                <DataTable.Header>
                  <DataTable.Title>Name</DataTable.Title>
                  <DataTable.Title>Calories</DataTable.Title>
                  <DataTable.Title>View Detail</DataTable.Title>
                </DataTable.Header>
              }
              data={foodLog}
              renderItem={this.renderListItem}
              keyExtractor={this.keyExtractor}
            />
          </DataTable>
        ) : null}
      </View>
    );
  }
}
