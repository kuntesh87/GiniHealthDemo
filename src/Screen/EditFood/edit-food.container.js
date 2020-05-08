import {connect} from 'react-redux';
import EditFood from './edit-food.component';

const mapStateToProps = (state) => ({
  food: state.homeReducer.food,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
