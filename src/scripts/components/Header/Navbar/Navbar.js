import React, { useState } from 'react';

import classes from './Navbar.module.scss';
import sprite from '../../../../img/header-sprite.svg';
import NavbarContainer from './NavbarContainer';
import Search from '../Search/Search';
import MenuList from '../../MenuList/MenuList';
import MenuListItem from '../../MenuList/MenuListItem';
import NavbarLink from './NavbarLink';
import DropDownMenu from './DropdownMenu/DropDownMenu';
import useDropdownMenu from '../../../hooks/use-dropdown-menu';

const dropdownGamesLinks = [
  {
    id: 'GamesLinks1',
    links: [
      { name: ' Discover ', imageHref: 'icon-binoculars', href: '#' },
      { name: ' Reviews ', imageHref: 'icon-thumbs-o-up', href: '#' },
      { name: ' Advanced Search ', imageHref: 'icon-search-plus', href: '#' },
    ],
  },
  {
    id: 'GamesLinks2',
    links: [
      { name: ' Coming Soon ', imageHref: 'icon-hourglass-3', href: '#' },
      { name: ' Recently Released ', imageHref: 'icon-truck', href: '#' },
      { name: ' Top 100 ', imageHref: 'icon-line-chart', href: '#' },
    ],
  },
  {
    id: 'GamesLinks3',
    links: [
      { name: ' Add Game ', imageHref: 'icon-plus-circle', href: '#' },
      { name: ' Add Company ', imageHref: 'icon-plus-circle', href: '#' },
    ],
  },
];

const dropdownDatabaseLinks = [
  {
    id: 'databaseLinks1',
    links: [
      { name: ' Games ', imageHref: 'icon-gamepad', href: '#' },
      { name: ' Platforms ', imageHref: 'icon-display', href: '#' },
      { name: ' Events ', imageHref: 'icon-clock2', href: '#' },
    ],
  },
  {
    id: 'databaseLinks2',
    links: [{ name: ' Developer API ', imageHref: 'icon-dropbox', href: '#' }],
  },
];

const Navbar = function () {
  const { isDrop: gamesIsDrop, toggleDropdownMenu: togleGames } =
    useDropdownMenu(false);
  const { isDrop: databaseIsDrop, toggleDropdownMenu: togleDatabase } =
    useDropdownMenu(false);

  return (
    <NavbarContainer>
      <nav
        id="navbar"
        className={`${classes.navbar} ${classes['navbar--collapsed']}`}
      >
        <Search className={classes.navbar__search} />
        <MenuList className={classes['navbar__menu-list']} isRow={true}>
          <MenuListItem className={classes['navbar__menu-list-item']}>
            <NavbarLink
              id="games-navbar"
              data-section="games"
              href="#"
              onClick={togleGames}
              isPrimary={gamesIsDrop}
            >
              <div className={classes.navbar__content}>
                <svg
                  className={`${classes.navbar__icon} ${classes['navbar__icon--games']}`}
                >
                  <use xlinkHref={`${sprite}#icon-gamepad`}></use>
                </svg>
                <span className={classes.navbar__title}>games</span>
                <svg className={classes.navbar__caret}>
                  <use xlinkHref={`${sprite}#icon-caret-down`}></use>
                </svg>
              </div>
            </NavbarLink>

            {gamesIsDrop && <DropDownMenu links={dropdownGamesLinks} />}
          </MenuListItem>

          <MenuListItem className={classes['navbar__menu-list-item']}>
            <NavbarLink
              id="database-navbar"
              data-section="database"
              href="#"
              onClick={togleDatabase}
              isPrimary={databaseIsDrop}
            >
              <div className={classes.navbar__content}>
                <svg
                  className={`${classes.navbar__icon} ${classes['navbar__icon--games']}`}
                >
                  <use xlinkHref={`${sprite}#icon-database`}></use>
                </svg>
                <span className={classes.navbar__title}>database</span>
                <svg className={classes.navbar__caret}>
                  <use xlinkHref={`${sprite}#icon-caret-down`}></use>
                </svg>
              </div>
            </NavbarLink>

            {databaseIsDrop && <DropDownMenu links={dropdownDatabaseLinks} />}
          </MenuListItem>
        </MenuList>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
