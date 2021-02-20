import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item, isSelected, handleItemClick }) => (
  <li
    className={`list_item ${isSelected ? 'list_item-active' : ''}`}
    onClick={() => handleItemClick(item.name)}
  >
    {item.name}
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleItemClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ListItem;
