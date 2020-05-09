import {combineReducers} from 'redux';
import homeReducer from './home';
import toastReducer from './toast';

export default combineReducers({
  homeReducer,
  toastReducer,
});
