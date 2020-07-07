import React, { useEffect, useContext } from "react";
import BookContext from "../../context/bookContext";
import Navbar from "./Navbar";
import BookList from "./BookList";

const Homepage = () => {
  const { books, pageTheme, isDarkTheme } = useContext(BookContext);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });

  const theme = isDarkTheme ? pageTheme.purple : pageTheme.dark;
  return (
    <div className="container" style={{ background: theme.secondary }}>
      <Navbar />
      <BookList />
    </div>
  );
};

export default Homepage;
