export const FIREBASE_INITIALIZED = 'FIREBASE_INITIALIZED';
import update from 'immutability-helper';
import ReactGA from 'react-ga';

export default function firebaseReducer(state = { firebaseIntialized: false }, action) {
  switch (action.type) {
    case FIREBASE_INITIALIZED:
      return update(state, {
        firebaseIntialized: { $set: true },
      });
      break;
    default:
      return state;
  }
}