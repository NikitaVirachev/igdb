import React from 'react';

import classes from './TableRow.module.scss';
import Cover from './Cover';

const TableRow = function (props) {
  return (
    <tr key={props.id}>
      <td>
        <h4 className={`${classes['table-row__number']} text--muted`}>
          ${props.number}
        </h4>
      </td>
      <td>
        <Cover href={props.url} imageURL={props.imageURL} name={props.name} />
      </td>
      <td>
        <div className={classes['table-row__name']}>
          <a href={props.url}>{props.name}</a>
          <span className={classes['table-row__year']}>(${props.year})</span>
        </div>
        <div className={classes['table-row__rating']}>
          <span className="text--muted">Your rating:</span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
