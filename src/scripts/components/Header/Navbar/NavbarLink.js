import React from 'react';

import classes from './NavbarLink.module.scss';
import sprite from '../../../../img/header-sprite.svg';

const NavbarLink = function (props) {
  return (
    <a
      className={`${classes['navbar-link']} ${
        props.isPrimary ? classes['navbar-link--primary'] : ''
      }`}
      id={props.id}
      data-section={props.data}
      href={props.href}
      onClick={props.onClick}
    >
      <div className={classes['navbar-link__content']}>
        <svg
          className={`${classes['navbar-link__icon']} ${classes['navbar-link__icon--games']}`}
        >
          <use xlinkHref={`${sprite}#${props.icon}`}></use>
        </svg>
        <span className={classes['navbar-link__title']}>{props.name}</span>
        <svg className={classes['navbar-link__caret']}>
          <use xlinkHref={`${sprite}#icon-caret-down`}></use>
        </svg>
      </div>
    </a>
  );
};

export default NavbarLink;
