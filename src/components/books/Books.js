import React from 'react';
import './Books.css';
import BookCard from './book-card/BookCard.js';
import BOOKS from './books.json';

function Books(props) {

  const book_cards = BOOKS.map((book_data) => {
    return (
      <BookCard key={book_data.title} bookData={book_data} />
    );
  });

  return (
    <div id="books" className="books section">
      <div className="section-title">Libros que recomiendo</div>
      <div className="book-cards">
        {book_cards}
      </div>
    </div>
  );
}

export default Books;