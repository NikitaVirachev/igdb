import React from 'react';

import classes from './Breadcrumb.module.scss';
import MenuList from '../MenuList/MenuList';

const Breadcrumb = function () {
  const openInNewTab = (event) => {
    window.open(event.target.href, '_blank', 'noreferrer');
  };

  return (
    <MenuList className={classes.breadcrumb} isRow={true}>
      <li>
        <a href="/" className={classes.breadcrumb__link} onClick={openInNewTab}>
          Home
        </a>
      </li>
      <li>Top 100</li>
      <li>Games</li>
    </MenuList>
  );
};

export default Breadcrumb;
