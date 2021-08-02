import React from 'react';
import s from './SearchBar.css';

const Searchbar = () => (
  <>
    <div className={s.searchBar}>
      <input placeholder="Search" />
    </div>
  </>
);

export default Searchbar;
