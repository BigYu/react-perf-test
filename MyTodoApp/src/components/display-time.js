import React from 'react';

export default class DisplayTime extends React.Component {
  render() {
    const { time } = this.props;

    return <h3>{time}</h3>
  }
}