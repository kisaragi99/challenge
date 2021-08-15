import React from 'react';
import { useSelector } from 'react-redux';
import s from './Book.css';

const Book = () => {
  const currentBook = useSelector((state) => state.currentBook);

  return (
    <>
      {!currentBook.name ? <div>Go back and select a book please.</div> : (
        <div className={s.container}>
          <div className={s.wrapper}>

            <div className={s.image}>
              <img src={currentBook.image} alt="book" />
            </div>

            <div className={s.info}>
              <div className={s.name}>{!currentBook.name ? 'No info' : currentBook.name}</div>
              <div className={s.categories}>{!currentBook.categories ? 'No info' : currentBook.categories}</div>
              <div className={s.authors}>{!currentBook.authors ? 'No info' : currentBook.authors}</div>
              <div className={s.about}>{!currentBook.about ? 'No info' : currentBook.about}</div>
            </div>

          </div>
        </div>
      )}

    </>
  );
};

export default Book;
