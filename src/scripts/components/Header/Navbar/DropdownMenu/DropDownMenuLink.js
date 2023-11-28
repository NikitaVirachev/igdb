import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DropDownMenuLink.module.scss';
import DropDownMenuIcon from './DropDownMenuIcon';

const DropDownMenuLink = function (props) {
  return (
    <Link
      className={classes['dropdown-menu-link']}
      to={props.href}
      onClick={props.onClick}
    >
      <DropDownMenuIcon icon={props.imageHref} />
      {props.children}
    </Link>
  );
};

export default DropDownMenuLink;
