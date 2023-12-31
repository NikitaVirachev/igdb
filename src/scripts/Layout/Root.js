import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header.js';
import Wrapper from './Wrapper.js';
import Column from './Column';
import Footer from '../components/Footer/Footer.js';
import classes from './Root.module.scss';
import { getNewAccessToken } from '../store/access-token-actions.js';
import Loading from '../components/Loading/Loading.js';

const Root = () => {
  const dispatch = useDispatch();
  const tokenIsLoaded = useSelector((state) => state.access.isLoadedStatus);
  const gamesIsLoading = useSelector((state) => state.loading.gamesIsLoading);
  const errors = useSelector((state) => state.access.errors);

  useEffect(() => {
    dispatch(getNewAccessToken());
  }, []);

  if (tokenIsLoaded === 'fail') throw errors;

  return (
    <div className={classes.root}>
      <Wrapper className="wrapper--dark-grey">
        <Header />
      </Wrapper>
      <Wrapper className="wrapper--light-grey">
        {gamesIsLoading && <Loading />}
        <Column>
          {tokenIsLoaded === 'success' && <Outlet />}
          <Footer className={classes.root__footer} />
        </Column>
      </Wrapper>
    </div>
  );
};

export default Root;
