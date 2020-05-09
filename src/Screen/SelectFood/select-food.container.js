import {connect} from 'react-redux';
import {fetchFoodlog} from '../Home/actions';
import SelectFood from './select-food.component';
import {openToast} from '../../Actions/toast';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchFoodlog,
  openToast
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFood);
