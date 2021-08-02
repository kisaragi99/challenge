import React from 'react';
import Card from './Card';
import { dummyArray } from '../../dummy-data';

const Cards = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: 'flex', width: '62%', flexWrap: 'wrap' }}>
      {dummyArray.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          image={el.image}
          textAll={el.textAll}
          textNow={el.textNow}
          productUrl={el.productUrl}
          groupUrl={el.url}
          likes={el.likes}
          views={el.views}
        />
      ))}
    </div>
  </div>
);

export default Cards;
