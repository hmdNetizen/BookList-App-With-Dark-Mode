import React, { useContext } from "react";
import BookContext from "./../../context/bookContext";

const BookItem = ({ book }) => {
  const {
    isDarkTheme,
    pageTheme,
    deleteBook,
    setCurrent,
    clearCurrent,
  } = useContext(BookContext);

  const onDelete = () => {
    deleteBook(book.id);
    clearCurrent();
  };

  const theme = isDarkTheme ? pageTheme.purple : pageTheme.dark;
  return (
    <li style={{ background: theme.bg }}>
      <h4>{book.title} </h4>
      <small>{book.author}</small>
      <div className="secondary-content">
        <i
          title="Edit"
          onClick={() => setCurrent(book)}
          className="fas fa-edit"
        ></i>
        <span
          title="Delete"
          onClick={onDelete}
          className="close-btn"
          style={{ background: theme.ui }}
        >
          x
        </span>
      </div>
    </li>
  );
};

export default BookItem;
