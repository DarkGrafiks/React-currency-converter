import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = ({ currency, exchangeRate }) => (
  <footer className="footer">
    <h2 className="title">{exchangeRate}</h2>
    <span className="tagline">{currency}</span>
  </footer>
);

Footer.propTypes = {
  currency: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
};

export default Footer;
