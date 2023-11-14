import React from 'react';

import classes from './FooterMobileBtn.module.scss';

const FooterMobileBtn = function (props) {
  return (
    <a
      id={props.id}
      className={classes['footer-mobile-btn']}
      href={props.href}
      onClick={props.action}
    >
      {props.name}
    </a>
  );
};

export default FooterMobileBtn;
