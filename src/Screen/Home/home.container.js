import {connect} from 'react-redux';
import {fetchFoodlog, fetchFood} from './actions';
import {openToast} from '../../Actions/toast';

import Home from './home.component';

const mapStateToProps = (state) => ({
  foodLog: state.homeReducer.foodLog,
});

const mapDispatchToProps = {
  fetchFoodlog,
  fetchFood,
  openToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
