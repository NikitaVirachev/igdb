import React from 'react';

import classes from './HeaderContent.module.scss';

const HeaderContent = function (props) {
  return <h1 className={classes.header}>{props.children}</h1>;
};

export default HeaderContent;
