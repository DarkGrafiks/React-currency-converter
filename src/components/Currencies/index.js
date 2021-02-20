import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/components/List';

import './style.scss';

const Currencies = ({ currencies, selectedCurrency, handleItemClick }) => (
  <div className="wrapper">
    <h3 className="subtitle">Currencies</h3>
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
};

export default Currencies;
