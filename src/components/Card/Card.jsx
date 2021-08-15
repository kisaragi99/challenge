/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import s from './Card.css';

const Card = ({
  onClick,
  image,
  name,
  category,
  authors,
}) => (
  <>
    <div onClick={onClick} className={s.card}>
      <img className={s.image} alt="book" src={image} />
      <div className={s.cardBottom}>
        <div className={s.name}>{name}</div>

        <div className={s.info}>

          <div className={s.categories}>
            <div>
              {category}
            </div>
          </div>

          <div className={s.authors}>
            <div>
              {authors && authors.map((el) => ` ${el}`)}
            </div>
          </div>

        </div>

      </div>
    </div>
  </>
);

export default Card;
