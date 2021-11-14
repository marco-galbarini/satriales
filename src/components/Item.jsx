import React from 'react';
import './Item.scss';

const Item = props => {
  const { product } = props;
  const { name, description, imageURL, price } = product;

  return (
    <div className='item'>
      <img src={imageURL} className='item-image' alt={name} />
      <div className='item-info'>
        <h1 className='item-title'>{name}</h1>
        <p className='item-description'>{description}</p>
        <h2 className='item-price'>Price: {price}</h2>
      </div>
    </div>
  );
};

export default Item;