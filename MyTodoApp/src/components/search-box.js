import React from 'react';

export default class SearchBox extends React.Component {
  render() {
    const { searchText, onChange } = this.props;

    return (
      <div>
        <input
          className="form-control"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            onChange(e.target.value);
          }}
        />
      </div>
    );
  }
}
