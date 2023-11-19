import React, { useEffect, useReducer, useRef } from 'react';

import classes from './Navbar.module.scss';
import NavbarContainer from './NavbarContainer';
import Search from '../Search/Search';
import MenuList from '../../MenuList/MenuList';
import MenuListItem from '../../MenuList/MenuListItem';
import NavbarLink from './NavbarLink';
import DropDownMenu from './DropdownMenu/DropDownMenu';

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

const initialDropdownMenusState = {
  gamesMenuIsDroped: false,
  databaseMenuIsDroped: false,
};

const dropdownMenusReducer = (state, action) => {
  if (action.type === 'DROP_GAMES_MENU')
    return {
      gamesMenuIsDroped: true,
      databaseMenuIsDroped: false,
    };
  if (action.type === 'DROP_DATABASE_MENU')
    return {
      gamesMenuIsDroped: false,
      databaseMenuIsDroped: true,
    };
  return initialDropdownMenusState;
};

const Navbar = function () {
  const gamesNavbarLinkRef = useRef();
  const databaseNavbarLinkRef = useRef();

  const [dropdownMenusState, dispatchDropdownMenusState] = useReducer(
    dropdownMenusReducer,
    initialDropdownMenusState
  );

  useEffect(() => {
    window.addEventListener('click', (event) => {
      event.preventDefault();
      if (
        gamesNavbarLinkRef.current.contains(event.target) ||
        databaseNavbarLinkRef.current.contains(event.target)
      )
        return;

      dispatchDropdownMenusState({ type: 'DROP_ALL' });
    });
  }, [gamesNavbarLinkRef, databaseNavbarLinkRef]);

  const dropGamesMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_GAMES_MENU' });
  };

  const dropDatabaseMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_DATABASE_MENU' });
  };

  const dropdownMenuLinkClickHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_ALL' });
    console.log(event.target.href);
  };

  const { gamesMenuIsDroped } = dropdownMenusState;
  const { databaseMenuIsDroped } = dropdownMenusState;

  return (
    <NavbarContainer>
      <nav
        id="navbar"
        className={`${classes.navbar} ${classes['navbar--collapsed']}`}
      >
        <Search className={classes.navbar__search} />
        <MenuList className={classes['navbar__menu-list']} isRow={true}>
          <MenuListItem
            className={classes['navbar__menu-list-item']}
            ref={gamesNavbarLinkRef}
          >
            <NavbarLink
              id="games-navbar"
              data-section="games"
              href="#"
              onClick={dropGamesMenuHandler}
              isPrimary={gamesMenuIsDroped}
              name={'games'}
              icon={'icon-gamepad'}
            />

            {gamesMenuIsDroped && (
              <DropDownMenu
                onClick={dropdownMenuLinkClickHandler}
                links={dropdownGamesLinks}
              />
            )}
          </MenuListItem>

          <MenuListItem
            className={classes['navbar__menu-list-item']}
            ref={databaseNavbarLinkRef}
          >
            <NavbarLink
              id="database-navbar"
              data-section="database"
              href="#"
              onClick={dropDatabaseMenuHandler}
              isPrimary={databaseMenuIsDroped}
              name={'database'}
              icon={'icon-database'}
            />

            {databaseMenuIsDroped && (
              <DropDownMenu
                onClick={dropdownMenuLinkClickHandler}
                links={dropdownDatabaseLinks}
              />
            )}
          </MenuListItem>
        </MenuList>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
