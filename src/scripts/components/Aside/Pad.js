import React from 'react';

import classes from './Pad.module.scss';

const Pad = function (props) {
  return (
    <div className={`${classes.pad} ${props.className}`}>
      <h5 className={classes.pad__header}>How are the top lists calculated?</h5>
      <p className={classes.pad__description}>
        We use a <strong>weighted rating</strong>, meaning we calculate a new
        value not only based on the average rating but the number of votes too.
        This gives us a more accurate "top" list.
      </p>
    </div>
  );
};

export default Pad;
