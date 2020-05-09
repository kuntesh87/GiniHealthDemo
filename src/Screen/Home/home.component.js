import * as React from 'react';
import {DataTable, Button} from 'react-native-paper';
import {View, FlatList} from 'react-native';
import ListItem from './listitem';
import {deleteLogTest, getAnalysisForFood} from '../../Api/Api';

export default class Home extends React.Component {
  onAddClick = () => {
    this.props.navigation.navigate('SelectFood');
  };

  deleteFood = async (food) => {
    try {
      const {id} = food;
      await deleteLogTest(id);
      this.props.fetchFoodlog();
      this.props.openToast('Foodlog Deleted.');
    } catch (err) {
      this.props.openToast('Error in Foodlog Deletion.');
    }
  };

  updateFood = async (food) => {
    this.props.fetchFood(food);
    this.props.navigation.navigate('EditFood');
  };

  analysisFood = async (food) => {
    try {
      await getAnalysisForFood(food);
      this.props.openToast('Food submit for Analysis.');
    } catch (err) {
      this.props.openToast('Error in Food Analysis.');
    }
  };
  renderListItem = ({item, index}) => (
    <ListItem
      food={item}
      deleteFood={this.deleteFood}
      analysisFood={this.analysisFood}
      updateFood={this.updateFood}
      index={index}
    />
  );
  keyExtractor = (item, index) => index.toString();

  componentDidMount() {
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
                  <DataTable.Title
                    style={{
                      marginRight: 50,
                    }}>
                    Name
                  </DataTable.Title>
                  <DataTable.Title>Calories</DataTable.Title>
                  <DataTable.Title
                    style={{
                      marginLeft: 90,
                    }}>
                    Analysis
                  </DataTable.Title>
                  <DataTable.Title>Edit</DataTable.Title>
                  <DataTable.Title>Delete</DataTable.Title>
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
