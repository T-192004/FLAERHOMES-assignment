// src/components/SearchBar.js
import React from 'react';

const styles = {
  searchBar: {
    margin: '20px auto',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    width: '50%',
    maxWidth: '600px',
    border: '2px solid #cfe0c3', // Light pastel green
    borderRadius: '20px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }
};

function SearchBar({ setSearchTerm }) {
  return (
    <div style={styles.searchBar}>
      <input
        style={styles.input}
        type="text"
        placeholder="Search for books by title, author, or genre..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
