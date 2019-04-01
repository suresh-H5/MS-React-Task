import './price-filter.scss';

import React from 'react';

import { PriceFilter } from '../../constants/constants';

export const PriceFilterComponent = props => {
  return (
    <div className="price-filter-container">
      <h4>SET PRICE</h4>
      <div className="price-filter-content">
        <input
          className="slider"
          type="range"
          min="10"
          max="1000"
          value={props.priceFilter}
          onChange={event => {
            props.onPriceChangeHandler(Math.round(event.target.value));
          }}
        />
        <div className="price-range">
          <ul>
            {PriceFilter.map((price, index) => {
              return (
                <li className="price-tag" key={index}>
                  <p>{price.price}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
