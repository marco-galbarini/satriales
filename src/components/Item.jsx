import React from 'react';
import './Item.scss';

const Item = props => {
  const { product } = props;
  const { id, title, price, pictureUrl } = product;

  return (
    <div className='item'>
      <img src={pictureUrl} className='item-image' alt={title} />
      <div className='item-info'>
        <h1 className='item-title'>{title}</h1>
        <h2 className='item-price'>{price}</h2>
      </div>
    </div>
  );
};

export default Item;