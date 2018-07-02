import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      firebaseReady: false,
    }
    this.postMessage = this.postMessage.bind(this);
    this.initalize = this.initalize.bind(this);
    this.initalized = false;
    this.firebaseInterval = null;
    this.initScroll = true;
  }

  componentDidMount() {
    const that = this;
    this.firebaseInterval = setInterval(() => {
      if(firebase.apps.length) {
        console.log("FIREBASE READY")
        that.setState({firebaseReady: true})
        clearInterval(that.firebaseInterval)
      }
    }, 1000);
  }

  componentDidUpdate() {
    if(this.initScroll && typeof document !== 'undefined') {
      console.log(document.querySelector('.main-chat img'));
      if (document.querySelector('.main-chat img')) {
        const element = document.querySelector('.main-chat');
        element.scrollTop = element.scrollHeight;
        this.initScroll = false;
      }
    }
  }

  initalize() {
    if (!firebase.apps.length) return;
    console.log("initalized")
    const that = this;
    const ref = firebase.database().ref().child('chatroom').limitToLast(50);
    ref.on('value', function(snapshot) {
      if(snapshot && snapshot.val()) {
        const messages = Object.values(snapshot.val());
        that.setState({
          messages,
        });
      }
    });
    if (!this.initalized) {
      this.initalized = true;
    }
  }

  postMessage(e) {
    if(e.keyCode === 13) {
      let uid = '';
      if (firebase.auth().currentUser) {
        uid = firebase.auth().currentUser.uid;
      }
      const newPostKey = firebase.database().ref().child('chatroom').push().key;
      firebase.database().ref('chatroom/' + newPostKey).set({
        text: e.target.value,
        uid: uid,
      });
      document.querySelector('.chat-room input').value = '';
    }
  }
  render() {
    console.log("RERENDER")
    if (!this.initalized && this.state.firebaseReady) {
      console.log("TRYING TO INIT")
      this.initalize();
    } else if (this.state.messages.length > 0 && firebase.apps.length) {
      if(this.state.messages[this.state.messages.length-1].uid === firebase.auth().currentUser.uid) {
        const element = document.querySelector('.main-chat');
        if (element) {
          // HACK: scroll to bottom of did but need ot wait for messages to be rendered so there
          // is always on off by 1. By delaying we can avoid this issue;
          setTimeout(() => {
            element.scrollTop = element.scrollHeight;
          }, 100);
        }
      }
    }
    return (
      <React.Fragment>
      <h5 id="talk" className="section-title">Talk About It</h5>
      <div className="chat-room">
        <div className="main-chat">
            {this.state.messages.map((message, idx) => (
              <div key={`${message.text}${idx}`}>
                <img src="../../static/images/favicon-blue-circle-2x.png" />
                <p>{message.text}</p>
              </div>
            ))}
        </div>
        <input type="text" placeholder="Say something.." onKeyDown={this.postMessage}></input>
      </div>
      </React.Fragment>
    )
  }
}