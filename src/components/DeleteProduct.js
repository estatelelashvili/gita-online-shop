import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
const DeleteProduct = ({ onDelete, currentProduct }) => {
  return (
    <div>
      <div className='delete-container-outer'>
        <div className='delete-container'>
          <h1>Confirm Delete Product</h1>
          <h3>Are you sure you want to delete the next product? </h3>
          <hr />
          <div className='delete-field'>
            <h4>ProductId:</h4>
            <p>{currentProduct.id}</p>
          </div>
          <div className='delete-field'>
            <h4>Name:</h4>
            <p>{currentProduct.name}</p>
          </div>
          <div className='delete-field'>
            <h4>Product Number:</h4> <p>{currentProduct.number}</p>
          </div>
          <div className='delete-field'>
            <h4>Color:</h4> <p>{currentProduct.color}</p>
          </div>
          <div className='delete-field'>
            <h4>Standart Cost:</h4> <p>{currentProduct.cost}</p>
          </div>
          <div className='delete-field'>
            <h4>List Price:</h4> <p>{currentProduct.price}</p>
          </div>
          <div className='delete-field'>
            <h4>Size:</h4> <p>{currentProduct.size}</p>
          </div>
          <div className='delete-field'>
            <h4>Weigth:</h4> <p>{currentProduct.weight}</p>
          </div>
          <div className='delete-field'>
            <h4>Product Category Id:</h4> <p>{currentProduct.id}</p>
          </div>
          <div className='delete-field'>
            <h4>Product Model Id:</h4> <p>{currentProduct.id}</p>
          </div>
          <div className='delete-field'>
            <h4>Sell Start date:</h4> <p>{currentProduct.date}</p>
          </div>
          <div className='delete-field'>
            <h4>Modified date:</h4> <p>{currentProduct.date}</p>
          </div>
        </div>
        <div className='delete-btn-group'>
          <button
            className='btn-delete-product'
            onClick={() => {
              onDelete(currentProduct.id);
            }}
          >
            {' '}
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Delete the Product
            </Link>
            <Outlet />
          </button>
          <button
            className='btn-cancel-back'
            onClick={() => {
              onDelete(currentProduct.id);
            }}
          >
            {' '}
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Cancel - Back to List
            </Link>
            <Outlet />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteProduct;
