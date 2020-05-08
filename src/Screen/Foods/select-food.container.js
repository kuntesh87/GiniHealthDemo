import {connect} from 'react-redux';
import {fetchFoodlog} from '../Home/actions';
import SelectFood from './select-food.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchFoodlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFood);
