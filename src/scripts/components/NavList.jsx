import {Menu} from '../../data/menu.jsx';
import NavItem from './NavItem.jsx';
import React from 'react';

const NavList = () => {
  const listItems = Menu.map((item, index) => {
    return (
      <NavItem item={ item } key={ index } />
    );
  });

  return (
    <nav>
      <ul>
        {
          listItems
        }
      </ul>
    </nav>
  );
};

export default NavList;
