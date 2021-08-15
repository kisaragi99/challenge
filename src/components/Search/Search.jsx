/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../useForm';
import validate from '../../validationRules'; import Loader from '../Blocks/Loader/Loader';
import { getBooksFirstPage, getMoreBooks } from '../../store/reducers/searchForm-reducer';
import s from './Search.css';
import Cards from '../Card/Cards';
import Button from '../Blocks/Button/Button';

const Search = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    books,
    totalItems,
    nextPage,
    queryData,
  } = useSelector((state) => state);

  // This will get an array of books only for first page and set it into store.
  // Invokes if there is no validation errors.
  const getBooks = (formData) => {
    if (formData) {
      dispatch(getBooksFirstPage(formData.search, formData.category, formData.order));
    }
  };

  // Works on load more button click.
  // Uses old form data from getBooks func.
  // Always starts on Page=2 and then increments. Page=3, Page=4, Page=5 etc.
  const loadMoreBooks = () => {
    if (books.length > 1) {
      dispatch(getMoreBooks(queryData, nextPage));
    }
  };

  // getBooks will invoke if there is no errors and handleSubmit is pressed.
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(getBooks, validate);

  return (
    <>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <form onSubmit={(e) => { handleSubmit(e); }}>
          <div className={s.wrapper}>

            <div className={s.searchBar}>
              <input
                className={errors.search ? s.inputError : s.input}
                name="search"
                type="text"
                value={values.search || ''}
                onChange={(e) => { handleChange(e); }}
              />
              <span className={s.errorText}>{errors.search}</span>
            </div>

            <div role="button">
              <Button submit text="Search" className={s.button} />
            </div>

            <div role="button">
              {totalItems && (
              <Button
                disabled={!!isLoading}
                text="Load More"
                className={s.loadMore}
                onClick={loadMoreBooks}
              />
              )}
            </div>

            <div className={s.order}>
              <label htmlFor="order">Order By</label>
              <select
                type="select"
                name="order"
                value={values.order || ''}
                onChange={(e) => { handleChange(e); }}
              >
                {['relevance', 'newest'].map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>

            <div className={s.category}>
              <label htmlFor="category">Category</label>
              <select
                type="select"
                name="category"
                value={values.category || ''}
                onChange={(e) => { handleChange(e); }}
              >
                {['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'].map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>

            <div className={s.totalBooks}>
              {totalItems && `Total books: ${totalItems}`}
            </div>

            <div className={s.loader}>
              {isLoading && <Loader />}
            </div>

          </div>
        </form>
      </div>
      <Cards />
    </>
  );
};

export default Search;
