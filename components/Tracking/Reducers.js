export const INIT_TRACKING = 'INIT_TRACKING';
import update from 'immutability-helper';
import ReactGA from 'react-ga';

export default function trackingReducer(state = { initalizedTracking: false }, action) {
  switch (action.type) {
    case INIT_TRACKING:
      return update(state, {
        initalizedTracking: { $set: true },
      });
      break;
    default:
      return state;
  }
}

// export function initTracking() {
//   ReactGA.initialize('UA-121642711-1');
//   return {
//     type: INIT_TRACKING,
//     initalizedTracking: true,
//   };
// }

// export const initTracking = (store) => (
//   store.dispatch({
//     type: INIT_TRACKING,
//     firebaseIntialized: true,
//   })
// )
