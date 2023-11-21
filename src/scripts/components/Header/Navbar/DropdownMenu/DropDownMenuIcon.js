import React from 'react';

import classes from './DropDownMenuIcon.module.scss';
import sprite from '../../../../../assets/img/header-sprite.svg';

const DropDownMenuIcon = function (props) {
  return (
    <svg className={classes.icon}>
      <use xlinkHref={`${sprite}#${props.icon}`}></use>
    </svg>
  );
};

export default DropDownMenuIcon;
