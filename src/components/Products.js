import { Outlet, Link } from 'react-router-dom';
import Product from './Product';
const Products = ({ products, count, onDelete, onGetProduct }) => {
  return (
    <div>
      <h1>List of Products</h1>
      <h2>{count === 0 ? 'No Products to Show. Add Products.' : ''}</h2>
      <button>
        <Link to='/addproduct'>Create New Product </Link>
        <Outlet />
      </button>
      <div>
        {products.map((product, id) => (
          <Product
            key={id}
            product={product}
            onDelete={onDelete}
            onGetProduct={onGetProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
