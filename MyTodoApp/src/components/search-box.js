import React from 'react';

export default function SearchBox({ searchText, onChange }) {
  return (
    <div>
      <span>Search</span>
      <input
        value={searchText}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    </div>
  );
}