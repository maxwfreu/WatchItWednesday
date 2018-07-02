import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import firebase from "firebase";

class MyApp extends App {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCIYEvXUu1a9EKZ1-k_aqTv1d45o6XdQkg",
      authDomain: "watch-it-wednesday.firebaseapp.com",
      databaseURL: "https://watch-it-wednesday.firebaseio.com",
      projectId: "watch-it-wednesday",
      storageBucket: "watch-it-wednesday.appspot.com",
      messagingSenderId: "1051247859804"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     console.log(uid);
    //   } else {
    //     console.log('signedOut')
    //   }
    // });
  }
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)