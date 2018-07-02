export const INIT_TRACKING = 'INIT_TRACKING';
import update from 'immutability-helper';
import ReactGA from 'react-ga';

export default function trackingReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case INIT_TRACKING:
      return update(state, {
        initalizedTracking: { $set: action.payload.initalizedTracking },
      });
      break;
    default:
      return state;
  }
}

export function initTracking(contacts) {
  ReactGA.initialize('UA-121642711-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return {
    type: INIT_TRACKING,
    initalizedTracking: true,
  };
}
