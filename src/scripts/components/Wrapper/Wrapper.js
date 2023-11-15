import React from 'react';

import classes from './Wrapper.module.scss';

const Wrapper = function (props) {
  return (
    <div className={`${classes.wrapper} ${props.classNames}`}>
      props.children
    </div>
  );
};

export default Wrapper;
