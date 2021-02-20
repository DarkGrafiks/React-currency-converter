import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({
  baseAmount, handleBaseAmountChange,
}) => (
  <header className="header">
    <h2 className="title">Converter</h2>
    <span className="tagline dspl-flex"><input
      className="form_input form_input-dark form_input-small"
      type="number"
      min="1"
      value={baseAmount}
      onChange={(e) => handleBaseAmountChange(e.target.value)}
    />
      {baseAmount > 1 ? 'euros' : 'euro'}
    </span>

  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  handleBaseAmountChange: PropTypes.func.isRequired,
};

export default Header;
