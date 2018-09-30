import React, { Component } from 'react';
import moment from 'moment';

import DisplayTime from './components/display-time';
import SearchBox from './components/search-box';
import Create from './components/create';
import ItemList from './components/item-list';

const getCurrentTimeString = () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

class App extends Component {
  state = {
    time: getCurrentTimeString(),
    searchText: '',
    items: [],
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
          this.setState({
            items: [ ...this.state.items, {
              text,
              createdAt: this.state.time,
            }],
          });
        }}/>
        <ItemList items={this.state.items} searchText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
