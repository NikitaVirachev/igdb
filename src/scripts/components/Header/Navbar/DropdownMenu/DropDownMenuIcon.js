import React from 'react';

import classes from './DropDownMenuIcon.module.scss';

const DropDownMenuIcon = function (props) {
  return (
    <svg className={classes.icon}>
      <use xlinkHref={props.href}></use>
    </svg>
  );
};

export default DropDownMenuIcon;
