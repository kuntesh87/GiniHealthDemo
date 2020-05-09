import {connect} from 'react-redux';
import EditFood from './edit-food.component';
import {fetchFoodlog} from '../Home/actions';
import {openToast} from '../../Actions/toast';

const mapStateToProps = (state) => ({
  food: state.homeReducer.food,
});

const mapDispatchToProps = {
  fetchFoodlog,
  openToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
