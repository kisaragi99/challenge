import React from 'react';
import s from './Card.css';
import likeLogo from '../../assets/like 1.svg';
import viewsLogo from '../../assets/visibility 1.svg';

const Card = ({
  name,
  image,
  textAll,
  textNow,
  productUrl,
  groupUrl,
  likes,
  views,
}) => (
  <>
    <div className={s.card}>
      <img className={s.image} alt="product" src={image} />
      <div className={s.cardBottom}>
        <div className={s.name}>{name}</div>
        <div className={s.info}>
          <div className={s.likesAndViews}>
            <img className={s.logo} src={likeLogo} alt="logo" />
            <div className={s.logoCount}>{likes}</div>
          </div>
          <div className={s.likesAndViews}>
            <img className={s.logo} src={viewsLogo} alt="logo" />
            <div className={s.logoCount}>{views}</div>
          </div>
        </div>
        <div className={s.buttons}>
          <a href={groupUrl}>
            <button className={s.button} type="button">{textAll}</button>
          </a>
          <a href={productUrl}>
            <button className={s.button} type="button">{textNow}</button>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Card;
