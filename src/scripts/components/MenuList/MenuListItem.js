import React from 'react';

import classes from './MenuListItem.module.scss';

const MenuListItem = function (props) {
  return (
    <li className={`${classes['menu-list-item']} ${props.classNames}`}></li>
  );
};

export default MenuListItem;
