import React from 'react';

import classes from './Column.module.scss';

const Column = function (props) {
  return <div className={classes.column}>{props.children}</div>;
};

export default Column;
