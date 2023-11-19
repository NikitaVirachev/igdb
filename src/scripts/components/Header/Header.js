import React, { useState } from 'react';

import classes from './Header.module.scss';
import Burger from './Burger';
import Logo from './Logo';
import Navbar from './Navbar/Navbar';
import Auth from './Auth';

const Header = function () {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const authHandler = (event) => {
    event.preventDefault();
    console.log(event.target.href);
  };

  const collapleNavbarMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <header id="header" className={classes.header}>
      <Logo />

      <div className={classes.header__burder}>
        <Burger onClick={collapleNavbarMenu} />
      </div>

      <Navbar isCollapsed={isCollapsed} />
      <Auth href="#" onClick={authHandler} />
    </header>
  );
};

export default Header;
