import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const store = createStore(reducer, data, middleware);

  return {store};
};
