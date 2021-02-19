import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = ({ exchangeData }) => {
  const formatRate = Number(exchangeData.rate.toFixed(2));
  return (
    <footer className="footer">
      <h2 className="title">{formatRate}</h2>
      <span className="tagline">{exchangeData.name}</span>
    </footer>
  );
};

Footer.propTypes = {
  exchangeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};

export default Footer;
