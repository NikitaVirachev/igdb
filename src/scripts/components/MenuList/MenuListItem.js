import React from 'react';

import classes from './MenuListItem.module.scss';

const MenuListItem = function (props) {
  return (
    <li className={`${classes['menu-list-item']} ${props.className}`}>
      {props.children}
    </li>
  );
};

export default MenuListItem;
