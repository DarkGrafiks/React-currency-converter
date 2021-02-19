import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ currencyBase }) => (
  <header className="header">
    <h2 className="title">Converter</h2>
    <span className="tagline">1 {currencyBase}</span>
  </header>
);

Header.propTypes = {
  currencyBase: PropTypes.string.isRequired,
};

export default Header;
