import React from 'react';

import classes from './MenuListItem.module.scss';

const MenuListItem = React.forwardRef(function (props, ref) {
  return (
    <li className={`${classes['menu-list-item']} ${props.className}`} ref={ref}>
      {props.children}
    </li>
  );
});

export default MenuListItem;
