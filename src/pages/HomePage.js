import React, { useState } from 'react';
import booksData from '../books.json';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f9f0', // Light pastel green
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  title: {
    color: '#52734d', // Earthy green
    fontSize: '2.5rem',
    marginTop: '20px',
  },
  bookList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  }
};

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Book Library</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div style={styles.bookList}>
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
