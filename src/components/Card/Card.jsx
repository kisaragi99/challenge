import React from 'react';
import s from './Card.css';

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
      <img alt="product" src={image} />
      <div className={s.cardBottom}>
        <div className={s.name}>{name}</div>
        <div className={s.info}>
          <div className={s.likes}>
            <div className={s.likeLogo}>import like logo in this card</div>
            <div className={s.likeCount}>{likes}</div>
          </div>
          <div className={s.views}>
            <div className={s.viewsLogo}>import views logo in this card</div>
            <div className={s.viewsCount}>{views}</div>
          </div>
        </div>
        <div className={s.buttons}>
          <a href={groupUrl}>
            <button type="button">{textAll}</button>
          </a>
          <a href={productUrl}>
            <button type="button">{textNow}</button>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Card;
