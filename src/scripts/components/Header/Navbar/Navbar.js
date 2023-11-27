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
      { name: ' Top 100 ', imageHref: 'icon-line-chart', href: '/top-100' },
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

const dropdownCommunityLinks = [
  {
    id: 'communityLinks1',
    links: [
      { name: ' Karma Hunters ', imageHref: 'icon-pie-chart', href: '#' },
      { name: ' Discord ', imageHref: 'icon-discord', href: '#' },
    ],
  },
];

const dropdownHelpLinks = [
  {
    id: 'helpLinks1',
    links: [
      { name: ' About IGDB ', imageHref: 'icon-information-solid', href: '#' },
      {
        name: ' Contributions ',
        imageHref: 'icon-information-solid',
        href: '#',
      },
      {
        name: ' UserVoice ',
        imageHref: 'icon-mic',
        href: '#',
      },
      {
        name: ' Contact ',
        imageHref: 'icon-envelope-o',
        href: '#',
      },
    ],
  },
];

const initialDropdownMenusState = {
  gamesMenuIsDroped: false,
  databaseMenuIsDroped: false,
  communityMenuIsDroped: false,
  helpMenuIsDroped: false,
};

const dropdownMenusReducer = (state, action) => {
  if (action.type === 'DROP_GAMES_MENU')
    return {
      gamesMenuIsDroped: !state.gamesMenuIsDroped,
      databaseMenuIsDroped: false,
      communityMenuIsDroped: false,
      helpMenuIsDroped: false,
    };
  if (action.type === 'DROP_DATABASE_MENU')
    return {
      gamesMenuIsDroped: false,
      databaseMenuIsDroped: !state.databaseMenuIsDroped,
      communityMenuIsDroped: false,
      helpMenuIsDroped: false,
    };
  if (action.type === 'DROP_COMMUNITY_MENU')
    return {
      gamesMenuIsDroped: false,
      databaseMenuIsDroped: false,
      communityMenuIsDroped: !state.communityMenuIsDroped,
      helpMenuIsDroped: false,
    };
  if (action.type === 'DROP_HELP_MENU')
    return {
      gamesMenuIsDroped: false,
      databaseMenuIsDroped: false,
      communityMenuIsDroped: false,
      helpMenuIsDroped: !state.helpMenuIsDroped,
    };
  return initialDropdownMenusState;
};

const Navbar = function (props) {
  const gamesNavbarLinkRef = useRef();
  const databaseNavbarLinkRef = useRef();
  const communityNavbarLinkRef = useRef();
  const helpNavbarLinkRef = useRef();

  const [dropdownMenusState, dispatchDropdownMenusState] = useReducer(
    dropdownMenusReducer,
    initialDropdownMenusState
  );

  useEffect(() => {
    window.addEventListener('click', (event) => {
      event.preventDefault();
      if (
        gamesNavbarLinkRef.current.contains(event.target) ||
        databaseNavbarLinkRef.current.contains(event.target) ||
        communityNavbarLinkRef.current.contains(event.target) ||
        helpNavbarLinkRef.current.contains(event.target)
      )
        return;

      dispatchDropdownMenusState({ type: 'DROP_ALL' });
    });
  }, [
    gamesNavbarLinkRef,
    databaseNavbarLinkRef,
    communityNavbarLinkRef,
    helpNavbarLinkRef,
  ]);

  const dropGamesMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_GAMES_MENU' });
  };

  const dropDatabaseMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_DATABASE_MENU' });
  };

  const dropCommunityMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_COMMUNITY_MENU' });
  };

  const dropHelpMenuHandler = (event) => {
    event.preventDefault();
    dispatchDropdownMenusState({ type: 'DROP_HELP_MENU' });
  };

  const dropdownMenuLinkClickHandler = (event) => {
    dispatchDropdownMenusState({ type: 'DROP_ALL' });
  };

  const { gamesMenuIsDroped } = dropdownMenusState;
  const { databaseMenuIsDroped } = dropdownMenusState;
  const { communityMenuIsDroped } = dropdownMenusState;
  const { helpMenuIsDroped } = dropdownMenusState;

  const navbarClasses = `
    ${classes.navbar}
    ${classes['navbar__menu-list']}
    ${props.isCollapsed ? classes['navbar--collapsed'] : ''}
  `;

  return (
    <NavbarContainer>
      <nav id="navbar" className={navbarClasses}>
        <Search className={classes.navbar__search} />
        <MenuList className={classes['navbar__menu-list-items']} isRow={true}>
          <MenuListItem ref={gamesNavbarLinkRef}>
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

          <MenuListItem ref={databaseNavbarLinkRef}>
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

          <MenuListItem ref={communityNavbarLinkRef}>
            <NavbarLink
              id="community-navbar"
              data-section="community"
              href="#"
              onClick={dropCommunityMenuHandler}
              isPrimary={communityMenuIsDroped}
              name={'community'}
              icon={'icon-group'}
            />

            {communityMenuIsDroped && (
              <DropDownMenu
                onClick={dropdownMenuLinkClickHandler}
                links={dropdownCommunityLinks}
              />
            )}
          </MenuListItem>

          <MenuListItem ref={helpNavbarLinkRef}>
            <NavbarLink
              id="help-navbar"
              data-section="help"
              href="#"
              onClick={dropHelpMenuHandler}
              isPrimary={helpMenuIsDroped}
              name={'help'}
              icon={'icon-question-circle'}
            />

            {helpMenuIsDroped && (
              <DropDownMenu
                onClick={dropdownMenuLinkClickHandler}
                links={dropdownHelpLinks}
              />
            )}
          </MenuListItem>
        </MenuList>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
