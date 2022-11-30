import React from 'react';
import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [color, setColor] = useState('');
  const [cost, setCost] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, number, color, cost, price, size, weight, date });
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

export default AddProduct;
