import React from 'react';

export default class ChildCount extends React.Component {
  shouldComponentUpdate () {
    return false;
  }

  render() {
    console.log('render child count');

    return <div>{this.props.count}</div>
  }
}