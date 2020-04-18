import React, { createContext, useState, useReducer, useEffect} from "react";
// import uuid from "uuid/v1";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBook] = useState([
  //   { title: "You need to calm down", present: "Taylor Swift", id: 1 },
  //   { title: "Stupid love", present: "Lady Gaga", id: 2 },
  // ]);
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  // create 2 function: Add book and remove book
  // const addBooks = (title, present) => {
  //   setBook([...books, { title, present, id: uuid }]);
  // };

  //Using filter for removing something, if math -> keep , if not -> kick out
  // const removeBooks = (id) => {
  //   setBook(books.filter((book) => book.id !== id));
  // };
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
