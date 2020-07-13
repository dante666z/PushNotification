import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Push from 'push.js';

class Name extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Push.create('Hello World!');
  }
  render() {
    return <button onClick={this.handleClick}>Clickéame</button>;
  }
}

function App() {
  return (
    <Name></Name>
  );
}

export default App;
