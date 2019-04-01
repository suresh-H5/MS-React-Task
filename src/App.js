import './App.scss';

import React, { Component } from 'react';

import { CategoryFilterComponent } from './Components/category-filter/category-filter';
import { GenderFilterComponent } from './Components/Gender-filter/gender-filter';
import { MainContainer } from './Components/Main-Component/main-component';
import { PriceFilterComponent } from './Components/Price-Filter/price-filter';
import { Items } from './constants/items-data';

class App extends Component {
  state = {
    categoryFilter: 'all',
    genderFilter: 'all',
    priceFilter: 1000,
    items: Items
  };
  onFilterChanged = selectedFilter => {
    this.setState({ ...this.state, categoryFilter: selectedFilter.target.value });
  };
  onGenderFilter = selectedGender => {
    this.setState({ ...this.state, genderFilter: selectedGender });
  };
  onPriceChange = filteredPrice => {
    this.setState({ ...this.state, priceFilter: filteredPrice });
  };
  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="app-header">
            <ul>
              <li>
                <h3 className="header-title">Christmas Gifts</h3>
              </li>
              <li>
                <CategoryFilterComponent onChangeHandler={this.onFilterChanged} currentFilter={this.state.categoryFilter} />
              </li>
              <li className="divider" />
              <li>
                <GenderFilterComponent onClickHandler={this.onGenderFilter} currentFilter={this.state.genderFilter} />
              </li>
              <li className="divider" />
              <li>
                <PriceFilterComponent onPriceChangeHandler={this.onPriceChange} currentFilter={this.state.priceFilter} />
              </li>
            </ul>
          </div>
          <div className="app-body">
            <MainContainer itemsWithFilters={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
