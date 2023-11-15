import React from 'react';

import classes from './Input.module.scss';

const Input = function (props) {
  return (
    <input
      className={`${props.className} ${classes.input}`}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
    />
  );
};

export default Input;
