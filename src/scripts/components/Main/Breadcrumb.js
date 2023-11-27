import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          className={classes.breadcrumb__link}
          target="_blank"
          to="/"
          onClick={toHome}
        >
          Home
        </Link>
      </li>
      <li>Top 100</li>
      <li>Games</li>
    </MenuList>
  );
};

export default Breadcrumb;
