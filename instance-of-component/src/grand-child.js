import React from 'react';

export default class GrandChild extends React.Component {
  render() {
    console.log(this.props.children);

    return <p>This is grand child</p>
  }
}