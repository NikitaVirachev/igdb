import React from 'react';

import classes from './FooterMobileBtns.module.scss';

const FooterMobileBtns = function (props) {
  return <div className={classes['footer-mobile-btns']}>{props.children}</div>;
};

export default FooterMobileBtns;
