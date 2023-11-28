import React from 'react';

import classes from './Wrapper.module.scss';

const Wrapper = function (props) {
  return (
    <div className={`${classes.wrapper} ${classes[props.className]}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
