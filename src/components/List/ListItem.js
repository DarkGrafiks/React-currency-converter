import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item, handleItemClick }) => (
  <li
    className="list_item"
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
};

export default ListItem;
