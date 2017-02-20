import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers';
import Thunk from 'redux-thunk';
// other imports...

// create store...
const middleware = [Thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default store
