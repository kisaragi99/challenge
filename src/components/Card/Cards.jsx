import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentBook } from '../../store/reducers/searchForm-reducer';
import Card from './Card';
import bookImage from '../../assets/open-book.svg';

const Cards = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const history = useHistory();

  const clickHandler = (bookInfo) => {
    dispatch(setCurrentBook(bookInfo));
    history.push('/book');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        width: '95%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        {books.length > 1 && books.map((el) => (
          <Card
            onClick={() => {
              clickHandler({
                name: el.volumeInfo.title,
                image: el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : bookImage,
                categories: el.volumeInfo.categories,
                authors: el.volumeInfo.authors && el.volumeInfo.authors.map((author) => `[${author}]`),
                about: el.volumeInfo.description && el.volumeInfo.description,
              });
            }}
            key={el.etag}
            name={el.volumeInfo.title}
            image={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : bookImage}
            category={el.volumeInfo.categories && el.volumeInfo.categories[0]}
            authors={el.volumeInfo.authors}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
