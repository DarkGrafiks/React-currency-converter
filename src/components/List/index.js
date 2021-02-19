import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import './style.scss';

const List = ({ list, handleItemClick }) => (
  <ul className="list scrollable_container">
    {list.map((item) => (
      <ListItem
        key={item.name}
        item={item}
        handleItemClick={handleItemClick}
      />
    ))}
  </ul>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default List;
