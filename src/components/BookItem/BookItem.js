import "./BookItem.css";
import DateRead from "../dateRead/DateRead";
import BookCard from "../bookCard/BookCard";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <BookCard>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
    </BookCard>
  );
};

export default BookItem;
