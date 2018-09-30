import React, { Component } from 'react';
import Child from './child';
import GrandChild from './grand-child';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child>
          <h1> This is child Title</h1>
          <GrandChild />
        </Child>
      </div>
    );
  }
}

export default App;
