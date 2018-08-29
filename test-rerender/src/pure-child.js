import React from 'react';
import Child from './child';

export default class PureChild extends React.PureComponent {
  render() {
    console.log('render pure child');

    return (
      <div>
        This is a pure child
        <Child />
      </div>
    );
  }
}