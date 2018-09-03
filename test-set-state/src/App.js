import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      anotherCount: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickSetTimeout = this.handleClickSetTimeout.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(`callback of setState inside handle click handler: ${this.state.count}`);
    });

    console.log(`next line of handle click event: ${this.state.count}`);
  }

  handleClickSetTimeout() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      }, () => {
        console.log(`callback of setState inside handle click handler with setTimeout: ${this.state.count}`);
      });

      console.log(`next line of handle click event with setTimeout: ${this.state.count}`);
    }, 100);
  }

  handleClickDom() {
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(`callback of setState inside handle click handler with dom addEventListener: ${this.state.count}`);
    });

    console.log(`next line of handle click event with dom addEventListener: ${this.state.count}`);
  }

  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log(`callback of setState inside handle click handler in componentDidMount: ${this.state.count}`);
    });

    console.log(`next line of handle click event in componentDidMount: ${this.state.count}`);

    document.getElementsByClassName('testDomButton')[0].addEventListener('click', this.handleClickDom.bind(this), false);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Test react event</button>
        <button onClick={this.handleClickSetTimeout}>Test react event with setTimeout</button>
        <button className="testDomButton">Test dom attach event</button>
      </div>
    );
  }
}

export default App;
