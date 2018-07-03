import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { initalizeFirebase } from '../components/Firebase';
// import { initTracking } from '../components/Tracking/Reducers';
import withReduxStore from '../lib/with-redux-store'

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
    initalizeFirebase(config, this.props.reduxStore);
    // initTracking(this.props.reduxStore);
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