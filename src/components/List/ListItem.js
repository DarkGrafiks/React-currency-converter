import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <li className="list_item">
    {item.name}
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
