import React from 'react';

export default function SearchBox({ searchText, onChange }) {
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