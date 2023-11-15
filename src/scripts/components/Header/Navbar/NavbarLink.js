import React from 'react';

import classes from './NavbarLink.module.scss';

const NavbarLink = function (props) {
  return (
    <a
      className={`${props.className} ${classes['navbar-link']}`}
      id={props.id}
      data-section={props.data}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};

export default NavbarLink;
