import React from 'react';

import classes from './MenuList.module.scss';

const MenuList = function (props) {
  return (
    <ul
      className={`${classes['menu-list']} ${props.className} ${
        props.isRow ? classes['menu-list--row'] : classes['menu-list--column']
      }`}
    >
      {props.children}
    </ul>
  );
};

export default MenuList;
