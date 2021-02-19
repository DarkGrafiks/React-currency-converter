import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import './style.scss';

const List = ({ list }) => (
  <ul className="list scrollable_container">
    {list.map((item) => <ListItem key={item.name} item={item} />)}
  </ul>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
