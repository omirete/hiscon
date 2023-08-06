import "./BookCard.css";

export interface BookCardProps {
    coverImg: string;
    title: string;
    buyUrl: string;
}

function BookCard(props: BookCardProps) {
    return (
        <div className="book-card">
            <div className="book-cover-container">
                <a href={props.buyUrl}>
                    <img
                        src={props.coverImg}
                        alt={"Portada del libro: " + props.title}
                        className="book-cover-img"
                    />
                </a>
            </div>
        </div>
    );
}

export default BookCard;
