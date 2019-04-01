import './category-filter.scss';

import React from 'react';

import { CategoryFilter } from '../../constants/constants';

export const CategoryFilterComponent = props => {
  return (
    <div className="category-filter-container">
      <div className="category-filter-content">
        <h4>SELECT CATEGORY</h4>
        <div>
          <select onChange={props.onChangeHandler}>
            {CategoryFilter.map((category, index) => {
              return (
                <option key={index} value={category.filter}>
                  {category.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
