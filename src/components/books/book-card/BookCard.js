import React from 'react';
import './BookCard.css';

function BookCard(props) {

  const BOOK_DATA = props.bookData;
  const cover_img = require("../images/" + BOOK_DATA.image);

  return (
    <div className="book-card">
      <div className="book-cover-container">
        <a href={BOOK_DATA.url_buy}>
          <img src={cover_img} alt={"Portada del libro: " + BOOK_DATA.title} className="book-cover-img" />
        </a>
      </div>
    </div>

  );
}

export default BookCard;