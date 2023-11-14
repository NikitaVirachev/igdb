import React from 'react';

import classes from './FooterLink.module.scss';

const FooterLink = function (props) {
  return (
    <a
      key={props.id}
      className={classes['footer-link']}
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      {props.name}
    </a>
  );
};

export default FooterLink;
