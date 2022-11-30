import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = ({ product, onDelete, onGetProduct }) => {
  return (
    <div>
      <h3>
        {product.name}{' '}
        <span onClick={() => onDelete(product.id)}>&#x2716;</span>
        <span onClick={() => onGetProduct(product)}>
          <Link to='editproduct'>Edit</Link>
          <Outlet />
        </span>
      </h3>
      <p>{product.price}</p>
      <p>{product.date}</p>
    </div>
  );
};

export default Product;
