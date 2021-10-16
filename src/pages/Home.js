import React from 'react';
import NavBar from '../components/NavBar';
import ItemListContainer from '../container/ItemListContainer';

const Home = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer message="this is a message"/>
    </>
  );
};

export default Home;