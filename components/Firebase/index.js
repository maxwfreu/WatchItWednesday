import firebase from "firebase";
import { firebaseIntialized } from './Actions';

export const initalizeFirebase = (config, store) => {
	 if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);
    }).then(() => {
      firebaseIntialized(store);
    });
}