import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';
const moment = require('moment');

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      firebaseReady: false,
    }
    this.postMessage = this.postMessage.bind(this);
    this.initalize = this.initalize.bind(this);
    this.firebaseInterval = null;
    this.initScroll = true;
  }

  componentDidUpdate() {
    if(this.props.firebaseReducer.firebaseIntialized && !this.state.firebaseReady) {
      this.initalize();
    }
    if(this.initScroll && typeof document !== 'undefined') {
      if (document.querySelector('.main-chat img')) {
        const element = document.querySelector('.main-chat');
        element.scrollTop = element.scrollHeight;
        this.initScroll = false;
      }
    }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  initalize() {
    const that = this;
    const ref = firebase.database().ref().child('chatroom').limitToLast(50);
    ref.on('value', function(snapshot) {
      if(snapshot && snapshot.val()) {
        const messages = Object.values(snapshot.val());
        that.setState({
          messages,
          firebaseReady: true,
        });
      }
    });
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
        timestamp: (new Date()).getTime(),
      });
      document.querySelector('.chat-room input').value = '';
    }
  }
  render() {
    if (this.state.messages.length > 0 && this.state.firebaseReady) {
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
          {this.state.messages.map((message, idx) => {
            let style = {};
            if(message.uid === firebase.auth().currentUser.uid){
              style = {backgroundColor: '#129490'}
            }
            return (
              <div key={`${message.text}${idx}`} style={style}>
                <img src="../../static/images/favicon-blue-circle-2x.png" />
                <p>{message.text}</p>
                {message.timestamp &&
                  <span>{moment.duration(message.timestamp - (new Date().getTime()), "milliseconds").humanize(true)}</span>
                }
              </div>
            )
          })}
        </div>
        <input type="text" placeholder="Say something.." onKeyDown={this.postMessage}></input>
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({firebaseReducer}) => ({firebaseReducer})

export default connect(mapStateToProps)(ChatRoom);
