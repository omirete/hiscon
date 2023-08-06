import { BookInfo } from "../../types/BookInfo";
import "./Books.css";
import BookCard from "./book-card/BookCard";
import BOOKS from "./books.json";

function Books() {
    const book_cards = (BOOKS as unknown as BookInfo[]).map(
        ({ image, title, url_buy }) => {
            return (
                <BookCard
                    key={title}
                    buyUrl={url_buy}
                    title={title}
                    coverImg={image}
                />
            );
        }
    );

    return (
        <div id="books" className="books section">
            <div className="section-title">Libros que recomiendo</div>
            <div className="book-cards">{book_cards}</div>
        </div>
    );
}

export default Books;
