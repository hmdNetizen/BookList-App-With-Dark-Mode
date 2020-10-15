import React, { useContext, Fragment } from "react";
import BookContext from "./../../context/bookContext";
import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
  const { books, isDarkTheme, pageTheme, toggleTheme } = useContext(
    BookContext
  );
  const theme = isDarkTheme ? pageTheme.purple : pageTheme.dark;
  return (
    <nav style={{ background: theme.bg, color: theme.color }}>
      <div>
        <h2>Hameed's Reading List</h2>
        <p>
          Currently you have{" "}
          {`${
            books.length > 1 ? `${books.length} books` : `${books.length} book`
          }`}{" "}
          to get through
        </p>
      </div>
      <Fragment>
        <ToggleBtn toggleBtn={toggleTheme} />
      </Fragment>
    </nav>
  );
};

export default Navbar;
