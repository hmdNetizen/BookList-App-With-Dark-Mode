import {
  ADD_BOOK,
  TOGGLE_THEME,
  SET_THEME,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    case SET_THEME:
      return {
        ...state,
        pageTheme: state.isDarkTheme
          ? state.pageTheme.purple
          : state.pageTheme.dark,
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
