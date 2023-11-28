import React from 'react';

import classes from './Burger.module.scss';

const Burger = function (props) {
  return (
    <button
      className={classes.burger}
      id="navbar-burger-btn"
      onClick={props.onClick}
    >
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
    </button>
  );
};

export default Burger;
