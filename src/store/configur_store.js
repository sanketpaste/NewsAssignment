import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
const initialState = {};
let middleware;
if (__DEV__) {
  middleware = applyMiddleware(thunk, createLogger());
} else {
  middleware = applyMiddleware(thunk);
}
const store = createStore(rootReducer, initialState, middleware);
export default store;