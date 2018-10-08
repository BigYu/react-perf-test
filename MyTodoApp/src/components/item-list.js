import React from 'react';

export default class ItemList extends React.Component {
  render() {
    const { items, searchText } = this.props;

    const tbody = items.filter(item => item.text.indexOf(searchText) !== -1).map((item, index) => (
      <tr key={index}>
        <td>{item.text}</td>
        <td>{item.createdAt}</td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              text
            </th>
            <th>
              createdAt
            </th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    );
  }
}
