import React from 'react';

import classes from './Breadcrumb.module.scss';
import MenuList from '../MenuList/MenuList';

const Breadcrumb = function () {
  const toHome = (event) => {
    event.preventDefault();
    console.log(event.target.href);
  };

  return (
    <MenuList className={classes.breadcrumb} isRow={true}>
      <li>
        <a
          className={classes.breadcrumb__link}
          target="_blank"
          href="/"
          onClick={toHome}
        >
          Home
        </a>
      </li>
      <li>Top 100</li>
      <li>Games</li>
    </MenuList>
  );
};

export default Breadcrumb;
