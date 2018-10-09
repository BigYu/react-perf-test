import React from 'react';

export default class DisplayTime extends React.PureComponent {
  render() {
    const { time } = this.props;

    return <h3>{time}</h3>
  }
}