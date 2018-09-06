import React, { Component } from 'react';
import moment from 'moment';

import DisplayTime from './components/display-time';

const getCurrentTimeString = () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

class App extends Component {
  state = {
    time: getCurrentTimeString(),
  }

  componentDidMount() {
    setInterval(() => this.setState({
      time: getCurrentTimeString(),
    }), 1000);
  }

  render() {
    return (
      <div className="App">
        <DisplayTime time={this.state.time} />
      </div>
    );
  }
}

export default App;
