// src/pages/BookDetailsPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../books.json';
import { LibraryContext } from '../context/LibraryContext';

function BookDetailsPage() {
  const { id } = useParams();
  const book = booksData.books.find((b) => b.id === parseInt(id));
  const { addToLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
}

export default BookDetailsPage;
