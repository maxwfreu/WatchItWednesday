import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import trackingReducer from './components/Tracking/Reducers';

const reducer = combineReducers({
  trackingReducer
});

export function initializeStore () {
  return createStore(reducer)
}