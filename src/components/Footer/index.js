import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = ({ exchangeData, exchangeAmount }) => {
  const formatAmount = Number(exchangeAmount.toFixed(2));
  return (
    <footer className="footer">
      <h2 className="title">{formatAmount}</h2>
      <span className="tagline">{exchangeData.name}</span>
    </footer>
  );
};

Footer.propTypes = {
  exchangeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
  exchangeAmount: PropTypes.number.isRequired,
};

export default Footer;
