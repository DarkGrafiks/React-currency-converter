import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/components/List';

import './style.scss';

const Currencies = ({
  currencies, selectedCurrency, searchValue,
  handleItemClick, handleChangeSearch,
}) => (
  <div className="wrapper">
    <h3 className="subtitle">Currencies</h3>
    <input
      type="search"
      className="form_input full-width"
      placeholder="Search currency..."
      value={searchValue}
      onChange={(e) => handleChangeSearch(e.target.value)}
    />

    <List
      list={currencies}
      selectedItem={selectedCurrency.name}
      handleItemClick={handleItemClick}
    />
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
  handleItemClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired,
};

export default Currencies;
