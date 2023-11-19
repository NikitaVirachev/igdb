import React from 'react';

import classes from './Header.module.scss';
import Burger from './Burger';
import Logo from './Logo';
import Navbar from './Navbar/Navbar';
import Auth from './Auth';

const Header = function () {
  const authHandler = (event) => {
    event.preventDefault();
    console.log(event.target.href);
  };

  return (
    <header id="header" className={classes.header}>
      <Logo />

      <div className={classes.header__burder}>
        <Burger />
      </div>

      <Navbar />
      <Auth href="#" onClick={authHandler} />
    </header>
  );
};

export default Header;
