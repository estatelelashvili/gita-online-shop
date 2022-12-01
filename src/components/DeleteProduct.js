import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DeleteProduct = ({ onDelete, currentProduct }) => {
  return (
    <div>
      <h1>DeleteProduct</h1>
      <p>{currentProduct.name}</p>
      <p>{currentProduct.price}</p>
      <p>{currentProduct.date}</p>
      <button
        onClick={() => {
          onDelete(currentProduct.id);
        }}
      >
        {' '}
        <Link to='/'>Delete the Product</Link>
        <Outlet />
      </button>
    </div>
  );
};

export default DeleteProduct;
