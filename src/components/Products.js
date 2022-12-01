import { Outlet, Link } from 'react-router-dom';
import Product from './Product';
import Filter from './Filter';
import { useState } from 'react';
import Footer from './Footer';
const Products = ({ products, count, onDelete, onGetProduct }) => {
  const [name, setName] = useState('');
  let [priceFrom, setPriceFrom] = useState(0);
  let [priceTo, setPriceTo] = useState(0);

  const [showFilter, setShowFilter] = useState(false);

  const reset = () => {
    setName('');
    setPriceFrom(0);
    setPriceTo(0);
  };

  const both = () => {
    reset();
    setShowFilter(!showFilter);
  };

  const filterProduct = (name, priceFrom, priceTo) => {
    setName(name);
    setPriceFrom(priceFrom);
    setPriceTo(priceTo);
  };
  return (
    <div>
      <div className='panel'>
        <h1>Products</h1>{' '}
        <button onClick={() => both()}>
          {showFilter ? 'Hide Filter' : 'Show Filter'}
        </button>
      </div>

      {showFilter && <Filter onFilter={filterProduct} />}
      <div className='product-catalog-container'>
        <div className='product-catalog'>
          <h2>{count === 0 ? 'No Products to Show. Add Products.' : ''}</h2>
          <ul className='headline'>
            <li>Product Name</li>
            <li>Product Number</li>
            <li>Color</li>
            <li>List Price</li>
            <li>Modified Date</li>
            <li>Actions</li>
          </ul>

          {products
            .filter((x) => {
              // if (!showFilter) {
              //   return true;
              // }
              // if (name === '' && priceFrom === 0 && priceTo === 0) {
              //   return true;
              // }

              if (
                x.name.toLowerCase().includes(name.toLowerCase()) &&
                +x.price >= +priceFrom &&
                +x.price <= +priceTo
              ) {
                return true;
              }

              if (!name) {
                if (+x.price >= +priceFrom && +x.price <= +priceTo) {
                  return true;
                }
              }
              if (!name && !priceFrom) {
                if (+x.price <= +priceTo) {
                  return true;
                }
              }
              if (!name && !priceTo) {
                if (+x.price >= +priceFrom) {
                  return true;
                }
              }
              if (!priceFrom && !priceTo) {
                if (x.name.toLowerCase().includes(name.toLowerCase())) {
                  return true;
                }
              }

              if (!x.name.toLowerCase().includes(name.toLowerCase())) {
                return false;
              }

              // if (!name && !priceFrom && !priceTo) {
              //   return false;
              // }

              return false;
            })
            .map((product, id) => (
              <Product
                key={id}
                product={product}
                onDelete={onDelete}
                onGetProduct={onGetProduct}
              />
            ))}
        </div>
        <button className='create-btn'>
          <Link
            to='/addproduct'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Create New Product{' '}
          </Link>
          <Outlet />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
