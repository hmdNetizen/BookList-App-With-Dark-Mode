import BookContext from "./bookContext";
import React, { useReducer } from "react";
import BookReducer from "./BookReducer";
import uuid from "uuid/dist/v1";
import {
  ADD_BOOK,
  SET_THEME,
  TOGGLE_THEME,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
} from "./types";

const BookState = (props) => {
  const initialState = {
    books: JSON.parse(localStorage.getItem("books")) || [],
    isDarkTheme: true,
    current: null,
    pageTheme: {
      purple: {
        ui: "#bf0cc9",
        bg: "#7a227f",
        secondary: "#a954af",
        color: "#f2f2f2",
      },
      dark: {
        bg: "#302f2f",
        ui: "#3f3d3d",
        secondary: "#444040",
        color: "#f7f7f7",
      },
    },
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const { books, pageTheme, current, isDarkTheme } = state;

  //Add book to list
  const addBook = (book) => {
    book.id = uuid();

    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  };

  //Set current
  const setCurrent = (book) => {
    dispatch({
      type: SET_CURRENT,
      payload: book,
    });
  };

  //Update book list
  const updateBook = (book) => {
    dispatch({
      type: UPDATE_BOOK,
      payload: book,
    });
  };

  //Set the page theme based on the condition gotten from isDarkTheme
  const setPageTheme = () => {
    dispatch({
      type: SET_THEME,
    });
  };

  //Toggle Theme
  const toggleTheme = () => {
    document.getElementById("toggle").classList.toggle("active");
    dispatch({
      type: TOGGLE_THEME,
    });
  };

  //Delete Book
  const deleteBook = (id) => {
    dispatch({
      type: DELETE_BOOK,
      payload: id,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  return (
    <BookContext.Provider
      value={{
        books,
        isDarkTheme,
        current,
        pageTheme,
        addBook,
        setCurrent,
        updateBook,
        setPageTheme,
        toggleTheme,
        deleteBook,
        clearCurrent,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
