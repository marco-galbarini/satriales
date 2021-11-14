import React from 'react';
import './Loader.scss';

const Loader = ({ loading }) => {
  return (
    <>
      {
        loading && (
          <div class="sk-chase" >
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        )}
    </>
  );
}

export default Loader;