import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  // const { removeBooks } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({type:'REMOVE_BOOK', id:book.id })}>
      <div className="title">{book.title}</div>
      <div className="present">{book.present}</div>
    </li>
  );
};

export default BookDetails;
