import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Push from 'push.js';
import addNotification from 'react-push-notification';


class Name extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Push.create("Estoy vivo perrrass!!", {
      body: "Como llegue aqui?",
      icon: '../public/favicon.ico',
      timeout: 5000,
      onClick: function () {
          window.focus();
          this.close();
      }
  });
  }
  render() {
    return <button onClick={this.handleClick}>notificacion pushJS</button>;
  }
}

class Hellow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'red',
      backgroundTop: 'green', 
      // native: true, // when using native, your OS will handle theming.
      backgroundBottom: 'darkgreen', //optional, background color of bottom container.
      colorTop: 'green', //optional, font color of top container.
      colorBottom: 'darkgreen',
  });
  }
  render() {
    return <button onClick={this.handleClick}>notificacion push Rect-push</button>;
  }
}



function App() {
  return (
    <div>
    <Name/>
    <Hellow/>
    </div>
  );
}

export default App;
