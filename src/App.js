import { useState } from 'react';
import Navigator from './components/Navigator';
import Products from './components/Products';
import Customers from './components/Customers';
import Orders from './components/Orders';
import Reports from './components/Reports';
import NoPage from './components/NoPage';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';

// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// let productArr = [
//   {
//     id: 1,
//     name: 'iPhone',
//     number: 800,
//     color: 'blue',
//     cost: 789,
//     price: 125,
//     size: 89,
//     weight: 45,
//     date: new Date().toUTCString(),
//   },
//   {
//     id: 2,
//     name: 'iPad',
//     number: 300,
//     color: 'blue',
//     cost: 389,
//     price: 65,
//     size: 65,
//     weight: 12,
//     date: new Date().toUTCString(),
//   },
//   {
//     id: 3,
//     name: 'iPod',
//     number: 120,
//     color: 'blue',
//     cost: 329,
//     price: 345,
//     size: 9,
//     weight: 5,
//     date: new Date().toUTCString(),
//   },
// ];
let productArr = [];
if (localStorage.getItem('localProductArray') !== 'undefined') {
  productArr = JSON.parse(localStorage.getItem('localProductArray'));
}

function App() {
  let [products, setProducts] = useState(productArr);
  // let [filteredProducts, setFilteredProducts] = useState([]);

  // let [products, setProducts] = useState(
  //   JSON.parse(localStorage.getItem('localProductArray') || {})
  // );

  let [currentProduct, setCurrentProduct] = useState({});

  const getCurrentProduct = (value) => {
    setCurrentProduct((currentProduct = value));
  };

  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newProduct = { id, ...product };
    setProducts([...products, newProduct]);
    localStorage.setItem(
      'localProductArray',
      JSON.stringify([...products, newProduct])
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    localStorage.setItem(
      'localProductArray',
      JSON.stringify(products.filter((product) => product.id !== id))
    );
  };

  // const filterProduct = (name, priceFrom, priceTo) => {
  //   setFilteredProducts(
  //     filteredProducts.filter((product) => product.name !== name)
  //   );
  //   console.log(name, priceFrom, priceTo);
  // };

  const editProduct = (product) => {
    let index = products.indexOf(currentProduct);
    let id = index;
    if (index > -1) {
      id++;
      const newProduct = { id, ...product };
      products.splice(index, 1, newProduct);
      setProducts([...products]);
      localStorage.setItem('localProductArray', JSON.stringify([...products]));
      // console.log(products.splice(index, 1, newProduct));
    }

    // console.log(index);
    // console.log(currentProduct);
    // console.log(product);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route
            index
            element={
              <Products
                products={products}
                onDelete={deleteProduct}
                // onFilter={filterProduct}
                onGetProduct={getCurrentProduct}
                // count={products.length || 0}
              />
            }
          />
          <Route path='customers' element={<Customers />} />
          <Route path='orders' element={<Orders />} />
          <Route path='reports' element={<Reports />} />
          <Route
            path='addproduct'
            element={<AddProduct onAdd={addProduct} />}
          />
          <Route
            path='editproduct'
            element={
              <EditProduct
                onEdit={editProduct}
                currentProduct={currentProduct}
              />
            }
          />
          <Route
            path='deleteproduct'
            element={
              <DeleteProduct
                onDelete={deleteProduct}
                currentProduct={currentProduct}
              />
            }
          />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
