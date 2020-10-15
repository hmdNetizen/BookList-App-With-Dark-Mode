import React, { useState, useEffect, useContext } from "react";
import BookContext from "./../../context/bookContext";

const BookForm = () => {
  const {
    addBook,
    isDarkTheme,
    pageTheme,
    current,
    clearCurrent,
    updateBook,
  } = useContext(BookContext);

  const [book, setBook] = useState({ title: "", author: "" });

  useEffect(() => {
    if (current !== null) {
      setBook(current);
    } else {
      clearCurrent();
    }
    //eslint-disable-next-line
  }, [current]);

  const theme = isDarkTheme ? pageTheme.purple : pageTheme.dark;

  const handleInputChange = ({ target }) => {
    setBook({ ...book, [target.name]: target.value });
  };

  const { title, author } = book;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || author.trim() === "") {
      alert("Please fill in all fields");
    } else if (current !== null) {
      updateBook(book);
      clearCurrent();
    } else {
      addBook(book);
    }
    setBook({
      title: "",
      author: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ background: theme.bg }}>
        <input
          type="text"
          name="title"
          className="form-input"
          placeholder="Book Title"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group" style={{ background: theme.bg }}>
        <input
          type="text"
          name="author"
          className="form-input"
          placeholder="Author"
          value={author}
          onChange={handleInputChange}
        />
      </div>
      <button> {current !== null ? "Update Book" : "Add Book"} </button>
    </form>
  );
};

export default BookForm;
