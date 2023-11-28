import React from 'react';

import classes from './NavbarContainer.module.scss';

const NavbarContainer = function (props) {
  return <div className={classes['navbar-container']}>{props.children}</div>;
};

export default NavbarContainer;
