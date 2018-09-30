import React, { Component } from 'react';
import moment from 'moment';

import DisplayTime from './components/display-time';
import SearchBox from './components/search-box';
import Create from './components/create';

const getCurrentTimeString = () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

class App extends Component {
  state = {
    time: getCurrentTimeString(),
    searchText: '',
  }

  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.setState({
      time: getCurrentTimeString(),
    }), 1000);
  }

  onSearchTextChange(text) {
    this.setState({
      searchText: text,
    })
  }

  render() {
    return (
      <div className="App">
        <DisplayTime time={this.state.time} />
        <SearchBox searchText={this.state.searchText} onChange={this.onSearchTextChange} />
        <Create onSubmit={(text) => {
          console.log(text);
        }}/>
      </div>
    );
  }
}

export default App;
