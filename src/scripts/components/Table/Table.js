import React from 'react';

import classes from './Table.module.scss';
import TableRow from './TableRow';

const Table = function (props) {
  return (
    <table id={props.id} className={`${classes.table} ${props.className}`}>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <TableRow
            key={row.id}
            name={row.name}
            number={row.number}
            url={row.url}
            year={row.year}
            score={row.score}
            coverId={row.cover}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
