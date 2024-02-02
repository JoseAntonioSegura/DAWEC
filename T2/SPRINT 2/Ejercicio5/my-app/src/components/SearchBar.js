import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => (
  <div>
    <input
      type="text"
      placeholder="Buscar imágenes"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button onClick={onSearch}>Buscar</button>
  </div>
);

export default SearchBar;