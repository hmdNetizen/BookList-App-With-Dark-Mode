import React, { useContext } from "react";
import BookContext from "./../../context/bookContext";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

const BookList = () => {
  const { books, pageTheme, isDarkTheme } = useContext(BookContext);
  const theme = isDarkTheme ? pageTheme.purple : pageTheme.dark;
  return (
    <section style={{ background: theme.ui, color: theme.color }}>
      {books.length === 0 ? (
        <p> There are no books to red! Play time :)</p>
      ) : (
        <ul>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      )}
      <BookForm />
    </section>
  );
};

export default BookList;
