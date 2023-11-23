import React from 'react';

import classes from './TableRow.module.scss';
import Cover from './Cover';
import Stars from './Stars';

const TableRow = function (props) {
  return (
    <tr>
      <td>
        <h4 className={classes['table-row__number']}>{props.number}</h4>
      </td>
      <td>
        <Cover href={props.url} imageURL={props.imageURL} name={props.name} />
      </td>
      <td>
        <div className={classes['table-row__name']}>
          <a href={props.url}>{props.name}</a>
          <span className={classes['table-row__year']}>({props.year})</span>
        </div>
        <div className={classes['table-row__rating']}>
          <span>Your rating:</span>
          <Stars />
        </div>
      </td>
      <td>
        <h4 className={classes[`table-row__score`]}>
          <span className={classes[`table-row__score--purple`]}>
            {props.score}
          </span>
          <span className={classes[`table-row__score--muted`]}> / 100</span>
        </h4>
      </td>
    </tr>
  );
};

export default TableRow;
