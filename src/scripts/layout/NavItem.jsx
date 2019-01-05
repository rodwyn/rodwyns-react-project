import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const NavItem = ({item}) => {
  const {
    label,
    link
  } = item;

  return (
    <li>
      <Link to={ link }>{label}</Link>
    </li>
  );
};

NavItem.propTypes = { item: PropTypes.object.isRequired };

export default NavItem;
