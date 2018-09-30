import React from 'react';

export default class Child extends React.Component {
  render() {
    console.log(this.props.children);

    return <p>This is child</p>
  }
}