import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = ({ product, onDelete, onGetProduct }) => {
  return (
    <div className='product-container'>
      <p className='product-child1'>{product.name} </p>
      <p className='product-child2'>{product.number} </p>
      <p className='product-child3'>{product.color} </p>
      <p className='product-child4'>{product.price}</p>
      <p className='product-child5'>{product.date}</p>
      <div className='product-child6'>
        <button onClick={() => onGetProduct(product)} className='grid-btn-edit'>
          <Link
            to='editproduct'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Edit
          </Link>
          <Outlet />
        </button>
        <button
          onClick={() => onGetProduct(product)}
          className='grid-btn-delete'
        >
          <Link
            to='deleteproduct'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Delete
          </Link>
          <Outlet />
        </button>
      </div>
    </div>
  );
};

export default Product;
