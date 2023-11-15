import React from 'react';

import classes from './MenuList.module.scss';

const MenuList = function (props) {
  return (
    <ul className={`${classes['menu-list']} ${props.classNames}`}>
      {props.children}
    </ul>
  );
};

export default MenuList;
