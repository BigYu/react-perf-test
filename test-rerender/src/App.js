import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';
import PureChild from './pure-child'
import ChildCount from './child-count';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display", count: this.state.count + 1 }
        });
    }, 1000);
}

  render() {
    console.log('render called');
    return (
      <div>
        <Child />
        <PureChild count={Math.floor(this.state.count / 10)} />
        <ChildCount count={this.state.count} />
        Hello
      </div>
    );
  }
}

export default App;
