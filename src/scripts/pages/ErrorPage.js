import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

import classes from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={classes.error}>
      <div className={classes.error__dialog}>
        <p className={classes.error__title}>
          The page you were looking for doesn't exist.
        </p>
        <p>You may have mistyped the address or the page may have moved.</p>
        <p>
          At least we don't have a problem with flaming demonic beavers (powered
          by a thermonuclear reaction).
        </p>
        <div className={classes.error__redirect}>
          <Link to={'/'} className={classes.error__link}>
            Previous page
          </Link>
          {' - '}
          <Link to={'/'} className={classes.error__link}>
            Go to homepage
          </Link>
          {' - '}
          <Link to={'/'} className={classes.error__link}>
            Contact & Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
