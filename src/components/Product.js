import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = ({ product, onDelete, onGetProduct }) => {
  return (
    <div className='product-container'>
      <h3 className='product-child'>{product.name} </h3>
      <p className='product-child'>{product.price}</p>
      <p className='product-child'>{product.date}</p>
      <div className='product-child'>
        <span onClick={() => onGetProduct(product)}>
          <Link to='editproduct'>Edit</Link>
          <Outlet />
        </span>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
