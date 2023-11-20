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

export const Select = function (props) {
  return (
    <select
      name={props.name}
      id={props.id}
      className={`${props.className} ${classes.input}`}
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Input;
