import React from 'react';

import classes from './AsideLink.module.scss';

const AsideLink = function (props) {
  return (
    <a
      className={`${classes['aside-link']} ${
        props.isActiveLink ? classes['aside-link--active'] : ''
      }`}
      onClick={props.onToggleLink}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default AsideLink;
