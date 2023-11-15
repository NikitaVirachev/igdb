import React, { useState } from 'react';

import classes from './Navbar.module.scss';
import NavbarContainer from './NavbarContainer';
import Search from '../Search/Search';
import MenuList from '../../MenuList/MenuList';
import MenuListItem from '../../MenuList/MenuListItem';
import NavbarLink from './NavbarLink';
import DropDownMenu from './DropdownMenu/DropDownMenu';

const Navbar = function () {
  const [isDrop, setIsDrop] = useState(false);

  const toggleDropDownMenu = function () {
    setIsDrop((prev) => {
      setIsDrop(!prev);
    });
  };

  return (
    <NavbarContainer>
      <nav
        id="navbar"
        className={`${classes.navbar} ${classes['navbar--collapsed']}`}
      >
        <Search className={classes.navbar__search} />
        <MenuList className={classes['navbar__menu-list']} isRow={true}>
          <MenuListItem className="menu-list__item--navbar">
            <NavbarLink
              className=""
              id="games-navbar"
              data-section="games"
              href="#"
              onClick={toggleDropDownMenu}
            >
              <div className={classes.navbar__content}>
                <svg
                  className={`${classes.navbar__icon} ${classes['navbar__icon--games']}`}
                >
                  <use xlinkHref="/src/img/header-sprite.svg#icon-gamepad"></use>
                </svg>
                <span className={classes.navbar__title}>games</span>
                <svg className={classes.navbar__caret}>
                  <use xlinkHref="/src/img/header-sprite.svg#icon-caret-down"></use>
                </svg>
              </div>
            </NavbarLink>

            {isDrop && <DropDownMenu />}
          </MenuListItem>
        </MenuList>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
