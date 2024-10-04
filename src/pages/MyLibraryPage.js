import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookCard from '../components/BookCard';

function MyLibraryPage() {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>My Library</h1>
      {myLibrary.length > 0 ? (
        <div className="book-list">
          {myLibrary.map(book => (
            <BookCard key={book.id} book={book} removeFromLibrary={removeFromLibrary} />
          ))}
        </div>
      ) : (
        <p>Your library is empty</p>
      )}
    </div>
  );
}

export default MyLibraryPage;
