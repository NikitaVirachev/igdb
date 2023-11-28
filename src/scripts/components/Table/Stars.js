import React from 'react';

import classes from './Stars.module.scss';

const Stars = function () {
  return (
    <a>
      <div className={classes.stars}>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
      </div>
    </a>
  );
};

export default Stars;
