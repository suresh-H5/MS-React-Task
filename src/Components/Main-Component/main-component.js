import './main-component.scss';

import $ from 'jquery';
import React, { Component } from 'react';

import { Items } from '../../constants/items-data';

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.ItemList = Items;
    this.navAction = this.navAction.bind(this);
  }
  componentWillReceiveProps(newProp) {
    const { categoryFilter, genderFilter, priceFilter } = { ...newProp.itemsWithFilters };
    if (categoryFilter === 'all' && genderFilter === 'all' && priceFilter === 1000) {
      this.ItemList = Items;
    } else {
      let filteredItems = Items.filter(item => {
        if (item.Category.toLowerCase() === categoryFilter.toLowerCase() && item.filter.toLowerCase() === genderFilter.toLowerCase() && item.Price <= priceFilter) {
          return true;
        }
        return false;
      });
      this.ItemList = filteredItems;
    }
  }

  navAction(actionType) {
    let element = document.getElementsByClassName('card-container')[0];
    if (element) {
      $('.card-container').animate(
        {
          scrollLeft: element.scrollLeft + (actionType === 'leftNav' ? -500 : 500)
        },
        500
      );
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="main-container-content">
          <div
            className="left-nav"
            onClick={() => {
              this.navAction('leftNav');
            }}
          >
            <i className="fas fa-angle-left" />
          </div>
          <div className="right-nav" onClick={() => this.navAction('rightNav')}>
            <i className="fas fa-angle-right" />
          </div>
          <div className="card-container">
            {this.ItemList.map((item, index) => {
              return (
                <div className="card" className={`card ${(index + 1) % 3 === 0 ? 'transform-origin' : ''}`} key={index}>
                  <div className="card-header">
                    <img alt={`Images-${index}`} src={item.ImageUrl} />
                  </div>
                  <div className="card-footer">
                    <div>Amazon</div>
                    <div>{`$${item.Price}`}</div>
                  </div>
                  <div className="hover-card-footer">
                    <div>{item.Title}</div>
                    <div>{`$${item.Price}`}</div>
                    <div>{`$${item.Price - 50}`}</div>
                    <div>{item.Description}</div>
                  </div>
                  <div className="card-link">See More</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
