import React from "react";
import BookState from "./context/BookState";
import HomePage from "./components/layouts/HomePage";

const App = () => {
  return (
    <BookState>
      <HomePage />
    </BookState>
  );
};

export default App;
