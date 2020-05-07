import {connect} from 'react-redux';
import {fetchFoodlog} from './actions';
import Home from './home.component';

const mapStateToProps = (state) => ({
  foodLog: state.homeReducer.foodLog,
});

const mapDispatchToProps = {
  fetchFoodlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
