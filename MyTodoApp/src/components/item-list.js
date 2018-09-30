import React from 'react';

export default function({ items, searchText }) {
  const tbody = items.filter(item => item.text.indexOf(searchText) !== -1).map(item => (
    <tr key={item.createdAt}>
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