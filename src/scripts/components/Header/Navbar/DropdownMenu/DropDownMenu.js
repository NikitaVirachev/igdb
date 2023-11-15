import React from 'react';

import classes from './DropDownMenu.module.scss';
import MenuList from '../../../MenuList/MenuList';
import MenuListItem from '../../../MenuList/MenuListItem';
import DropDownMenuLink from './DropDownMenuLink';

const DropDownMenu = function (props) {
  return (
    <div
      className={`${classes['dropdown-menu']} ${
        props.isHide && classes['dropdown-menu--hide']
      }`}
      id={props.id}
      data-section={props.data}
    >
      <div className={classes['dropdown-menu__content-block']}>
        <MenuList className="menu-list--column">
          <MenuListItem>
            <DropDownMenuLink />
          </MenuListItem>
        </MenuList>
      </div>
    </div>
  );
};

export default DropDownMenu;
