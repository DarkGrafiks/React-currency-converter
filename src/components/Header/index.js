import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ baseAmount, currencyBase }) => (
  <header className="header">
    <h2 className="title">Converter</h2>
    <span className="tagline">{baseAmount} {currencyBase}</span>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  currencyBase: PropTypes.string.isRequired,
};

export default Header;
