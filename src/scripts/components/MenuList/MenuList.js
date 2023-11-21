import React from 'react';

import classes from './MenuList.module.scss';

const MenuList = function (props) {
  const listClasses = `
      ${classes['menu-list']} 
      ${props.className} 
      ${props.isRow ? classes['menu-list--row'] : classes['menu-list--column']}
    `;

  return <ul className={listClasses}>{props.children}</ul>;
};

export default MenuList;
