import {connect} from 'react-redux';
import EditFood from './edit-food.component';
import {fetchFoodlog} from '../Home/actions';

const mapStateToProps = (state) => ({
  food: state.homeReducer.food,
});

const mapDispatchToProps = {
  fetchFoodlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
