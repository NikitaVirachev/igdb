import React from 'react';

import classes from './MenuListItem.module.scss';

const MenuListItem = React.forwardRef(function (props, ref) {
  const itemClasses = `${classes['menu-list-item']} ${props.className}`;

  return (
    <li className={itemClasses} ref={ref}>
      {props.children}
    </li>
  );
});

export default MenuListItem;
