import React from 'react';

import classes from './Table.module.scss';

const Table = function (props) {
  return (
    <table id="table" className={`${classes.table} ${props.className}`}>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
