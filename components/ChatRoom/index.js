import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initalized: false,
      messages: [],
    }
    this.postMessage = this.postMessage.bind(this);
    this.initalize = this.initalize.bind(this);
  }

  initalize() {
    if (!firebase.apps.length) return;
    const that = this;
    const ref = firebase.database().ref().child('chatroom');
    ref.on('value', function(snapshot) {
      if(snapshot && snapshot.val()) {
        const messages = Object.values(snapshot.val());
        that.setState({
          messages,
        });
      }
    });
    if (!this.state.initalized) {
      that.setState({
        initalized: true,
      });
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
    if (!this.state.initalized) {
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
    console.log("RENDER")
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