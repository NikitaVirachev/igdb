import React from 'react';

import classes from './DropDownMenuLink.module.scss';
import DropDownMenuIcon from './DropDownMenuIcon';

const DropDownMenuLink = function (props) {
  return (
    <a className={classes['dropdown-menu-link']} href={props.href}>
      <DropDownMenuIcon icon={props.imageHref} />
      {props.children}
    </a>
  );
};

export default DropDownMenuLink;
