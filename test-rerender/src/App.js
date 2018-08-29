import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    setInterval(() => {
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }, 1000);
}

  render() {
    console.log('render called');
    return (<div>Hello</div>);
  }
}

export default App;
