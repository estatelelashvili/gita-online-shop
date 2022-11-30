import React from 'react';
import { useState } from 'react';

const EditProduct = ({ onEdit, currentProduct }) => {
  const [name, setName] = useState(currentProduct.name);
  const [number, setNumber] = useState(currentProduct.number);
  const [color, setColor] = useState(currentProduct.color);
  const [cost, setCost] = useState(currentProduct.cost);
  const [price, setPrice] = useState(currentProduct.price);
  const [size, setSize] = useState(currentProduct.size);
  const [weight, setWeight] = useState(currentProduct.weight);
  //   let combineDate = '';
  //   let chunkDate = [];
  //     alert(currentProduct.date);
  //   if (currentProduct.date !== 'undefined') {
  //     chunkDate = currentProduct.date.split('-');
  //     combineDate = `${chunkDate[1]}/${chunkDate[2]}/${chunkDate[0]}`;
  //     combineDate = `${chunkDate[0]}/${chunkDate[1]}/${chunkDate[2]}`;
  //   }
  const [date, setDate] = useState(currentProduct.date);

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit({ name, number, color, cost, price, size, weight, date });
    setName('');
    setNumber('');
    setColor('');
    setCost('');
    setPrice('');
    setSize('');
    setWeight('');
    setDate('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <label>Product Number:</label>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        required
      />
      <label>Color:</label>
      <input
        type='text'
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        required
      />
      <label>Standard Cost:</label>
      <input
        type='number'
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
        required
      />
      <label>List Price:</label>
      <input
        type='number'
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        required
      />
      <label>Size:</label>
      <input
        type='number'
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
        required
      />
      <label>Weight:</label>
      <input
        type='number'
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        required
      />
      <label>Sell Start Date:</label>
      <input
        type='date'
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        required
      />
      <input type='submit' value='Save' />
      <input type='button' value='Cancel' />
      <input type='button' value='Back to Products' />
    </form>
  );
};

export default EditProduct;
