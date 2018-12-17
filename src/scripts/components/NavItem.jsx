import PropTypes from 'prop-types';
import React from 'react';

const NavItem = ({item}) => {
  const {
    label,
    link
  } = item;

  return (
    <li>
      <a href={ link }>{label}</a>
    </li>
  );
};

NavItem.propTypes = { item: PropTypes.object.isRequired };

export default NavItem;
