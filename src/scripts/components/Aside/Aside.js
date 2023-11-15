import React, { useState } from 'react';

import classes from './Aside.module.scss';
import MenuList from '../MenuList/MenuList';
import AsideLink from './AsideLink';
import Pad from './Pad';

const Aside = function () {
  const navigationItems = [
    {
      name: 'Games',
      href: '#',
    },
    {
      name: 'Companies',
      href: '#',
    },
    {
      name: 'Contributors',
      href: '#',
    },
    {
      name: 'Most Anticipated',
      href: '#',
    },
  ];

  const [activeNavitem, setActiveNavItem] = useState('Games');

  const toggleNavbarLink = function (event) {
    const name = event.target.innerText;
    setActiveNavItem(name);
  };

  return (
    <aside className={classes.aside}>
      <h2 className={classes.aside__header}>Other Top 100s</h2>
      <nav id="aside-nav" className={classes.aside__nav}>
        <MenuList classNames="menu-list--column">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <AsideLink
                isActiveLink={activeNavitem === item.name}
                href={item.href}
                onToggleLink={toggleNavbarLink}
              >
                {item.name}
              </AsideLink>
            </li>
          ))}
        </MenuList>
      </nav>
      <br />
      <Pad className={classes.aside__pad} />
      <hr />
      <br />
    </aside>
  );
};

export default Aside;
