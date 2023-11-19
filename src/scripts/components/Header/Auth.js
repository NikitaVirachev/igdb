import React from 'react';

import classes from './Auth.module.scss';
import sprite from '../../../img/header-sprite.svg';
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuList/MenuListItem';

const Auth = function (props) {
  return (
    <MenuList isRow={true}>
      <MenuListItem>
        <a
          href={props.href}
          className={classes.auth}
          id="login"
          onClick={props.onClick}
        >
          <svg className={classes['auth__icon']}>
            <use xlinkHref={`${sprite}#icon-twitch`}></use>
          </svg>
          <span>Login with Twitch</span>
        </a>
      </MenuListItem>
    </MenuList>
  );
};

export default Auth;
