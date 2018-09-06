import React from 'react';

export default class DisplayName extends React.Component {
  render() {
    const { time } = this.props;

    return <h3>{time}</h3>
  }
}