import React from 'react';

import classes from './Content.module.scss';

const Content = function (props) {
  return <section className={classes.content}>{props.children}</section>;
};

export default Content;
