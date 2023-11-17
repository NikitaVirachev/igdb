import React from 'react';

import classes from './DropDownMenu.module.scss';
import MenuList from '../../../MenuList/MenuList';
import MenuListItem from '../../../MenuList/MenuListItem';
import DropDownMenuLink from './DropDownMenuLink';

const DropDownMenu = function (props) {
  const blocks = props.links;

  return (
    <div
      className={`${classes['dropdown-menu']} ${
        props.isHide && classes['dropdown-menu--hide']
      }`}
      id={props.id}
      data-section={props.data}
    >
      {blocks.map((block, index) => {
        return (
          <React.Fragment key={block.id}>
            <div className={classes['dropdown-menu__content-block']}>
              <MenuList isRow={false}>
                {block.links.map((link) => {
                  return (
                    <MenuListItem key={link.name}>
                      <DropDownMenuLink
                        href={link.href}
                        imageHref={link.imageHref}
                      >
                        {link.name}
                      </DropDownMenuLink>
                    </MenuListItem>
                  );
                })}
              </MenuList>
            </div>
            {index + 1 !== blocks.length && (
              <div className={classes['dropdown-menu__separator']}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DropDownMenu;
