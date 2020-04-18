import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  //   const { addBooks } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [present, setPresent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // addBooks(title, present);
    dispatch({ type: "ADD_BOOK", book: { title, present } });
    setTitle("");
    setPresent("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song title"
        value={title}
        id=""
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Present"
        value={present}
        id=""
        onChange={(e) => setPresent(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewBookForm;
