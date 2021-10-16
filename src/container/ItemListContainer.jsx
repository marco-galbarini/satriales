import React from "react";
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return(
    <>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default ItemListContainer;