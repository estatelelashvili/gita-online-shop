import React from 'react';
import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    onFilter(name, priceFrom, priceTo);
  };
  return (
    <form className='filter-form' onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        className='filter-name-field'
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>and Price Between:</label>
      <input
        id='filter-price-field'
        type='number'
        value={priceFrom}
        onChange={(e) => {
          setPriceFrom(e.target.value);
        }}
      />
      <label>and:</label>
      <input
        id='filter-price-field'
        type='number'
        value={priceTo}
        onChange={(e) => {
          setPriceTo(e.target.value);
        }}
      />
      <input className='btn-apply' type='submit' value='Apply' />
    </form>
  );
};

export default Filter;
