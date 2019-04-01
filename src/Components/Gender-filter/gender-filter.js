import "./gender-filter.scss";

import React from "react";

import { GenderFilter } from "../../constants/constants";

export const GenderFilterComponent = props => {
  return (
    <div className="gender-filter-container">
      <div className="gender-filter-content">
        <h4>GIFT FOR</h4>
        <div>
          <ul>
            {GenderFilter.map((gender, index) => {
              let activeClass = props.currentFilter === gender.filter ? "active-filter" : "";
              return (
                <li
                  key={index}
                  className={activeClass + " gender-category"}
                  onClick={() => {
                    props.onClickHandler(gender.filter);
                  }}
                >
                  <i className={`gender-icons ${gender.icon}`} />
                  <span>{gender.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
