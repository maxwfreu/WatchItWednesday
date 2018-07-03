import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import trackingReducer from './components/Tracking/Reducers';
import firebaseReducer from './components/Firebase/Reducers';

const reducer = combineReducers({
  trackingReducer,
  firebaseReducer
});

export function initializeStore () {
  return createStore(reducer)
}