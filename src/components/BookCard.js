// src/components/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
  bookCard: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    padding: '15px',
    textAlign: 'center',
  },
  bookCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  title: {
    color: '#52734d', // Earthy green
    fontSize: '1.2rem',
    margin: '15px 0 5px 0',
  },
  text: {
    color: '#7c9473', // Soft pastel green
    fontSize: '0.9rem',
  }
};

function BookCard({ book }) {
  return (
    <div style={styles.bookCard}>
      <h2 style={styles.title}>{book.title}</h2>
      <p style={styles.text}>by {book.author}</p>
      <p style={styles.text}>Genre: {book.genre}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
