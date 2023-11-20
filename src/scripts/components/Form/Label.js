import React from 'react';

import classes from './Label.module.scss';

const Label = function (props) {
  return (
    <label className={classes.label} htmlFor={props.id}>
      {props.children}
    </label>
  );
};

export default Label;
