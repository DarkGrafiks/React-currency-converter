import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import './style.scss';

const List = ({ list, selectedItem, handleItemClick }) => (
  <ul className="list scrollable_container">
    {list.map((item) => (
      <ListItem
        key={item.name}
        item={item}
        isSelected={item.name === selectedItem}
        handleItemClick={handleItemClick}
      />
    ))}
  </ul>
);

List.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default List;
