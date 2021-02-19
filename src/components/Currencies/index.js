import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/components/List';

import './style.scss';

const Currencies = ({ currencies }) => (
  <div className="wrapper">
    <h3 className="subtitle">Currencies</h3>
    <List list={currencies} />
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
};

export default Currencies;
