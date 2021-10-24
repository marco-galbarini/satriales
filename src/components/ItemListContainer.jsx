import React, { useState, useEffect } from "react";
import './ItemListContainer.scss';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState();



  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const products = [
        {
          id: 1,
          title: 'Capicola',
          price: 452,
          pictureUrl: 'https://imagizer.imageshack.com/img924/9720/hi7LhO.png'
        },
        {
          id: 2,
          title: 'Pastrami',
          price: 415,
          pictureUrl: 'https://imagizer.imageshack.com/img923/2249/SLuApB.png'
        },
        {
          id: 3,
          title: 'Salami',
          price: 452,
          pictureUrl: 'https://imagizer.imageshack.com/img924/6708/7ESA7w.png'
        },
        {
          id: 4,
          title: 'Pepperoni',
          price: 632,
          pictureUrl: 'https://imagizer.imageshack.com/img922/8535/CSoTrD.png'
        }
      ];
      resolve(products);
    });

    promise.then(result => {
      setTimeout(setProducts(result), 2000);
    });

  }, [products]);

  return (
    <>
      <div className="message">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;