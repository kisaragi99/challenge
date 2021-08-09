/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../useForm';
import validate from '../../validationRules'; import Loader from '../Loader/Loader';
import s from './SearchForm.css';
import { booksAPI } from '../../api/api';

const Searchform = () => {
  const [formData, setFormData] = useState({});
  const isSearching = false;

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(setFormData, validate);

  async function sats() {
    const data = await booksAPI.getBooksData(30, 'newest', 'Словарь', 1);
    console.log(data);
  };

  sats();

  return (
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
            <button className={s.button} type="submit">Search</button>
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

          <div className={s.select}>
            <label htmlFor="pages">Books on page</label>
            <select
              type="select"
              name="elements"
              value={values.elements || ''}
              onChange={(e) => { handleChange(e); }}
            >
              {[10, 20, 30, 40].map((el, i) => (
                <option key={i}>{el}</option>
              ))}
            </select>
          </div>

          <div className={s.loader}>
            {isSearching && <Loader />}
          </div>

        </div>
      </form>
    </div>
  );
};

export default Searchform;
