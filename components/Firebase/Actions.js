import Constants from './Constants';

export const firebaseIntialized = (store) => (
  store.dispatch({
    type: Constants.FIREBASE_INITIALIZED,
    firebaseIntialized: true,
  })
)
