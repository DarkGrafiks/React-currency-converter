import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/components/List';

import './style.scss';

const Currencies = ({ currencies, handleItemClick }) => (
  <div className="wrapper">
    <h3 className="subtitle">Currencies</h3>
    <List list={currencies} handleItemClick={handleItemClick} />
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default Currencies;
