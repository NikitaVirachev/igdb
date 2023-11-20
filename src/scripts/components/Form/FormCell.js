import React from 'react';

import classes from './FormCell.module.scss';

const FormCell = function (props) {
  return <div className={classes.cell}>{props.children}</div>;
};

export default FormCell;
