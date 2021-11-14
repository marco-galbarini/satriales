import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

import Loader from './Loader';
import ItemList from './ItemList';

import './ItemListContainer.scss';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      SetLoading(false);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProducts();
  }, []);

  return (
    <div className='item-list-container'>
      <Loader loading={loading} />
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;