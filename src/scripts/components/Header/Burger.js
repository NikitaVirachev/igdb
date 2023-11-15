import React from 'react';

import classes from './Burger.module.scss';

const Burger = function (props) {
  return (
    <button className={classes.burger} id={props.id}>
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
    </button>
  );
};

export default Burger;
