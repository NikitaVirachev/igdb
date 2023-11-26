import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.scss';

const Logo = function () {
  return (
    <Link to="/" className={classes.logo}>
      <div></div>
    </Link>
  );
};

export default Logo;
