import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header/Header.js';
import Wrapper from './Wrapper.js';
import Column from './Column';
import Footer from '../components/Footer/Footer.js';
import TopGames from '../pages/TopGames.js';
import classes from './Root.module.scss';
import { getNewAccessToken } from '../store/access-token-actions.js';

const Root = () => {
  const dispatch = useDispatch();
  const tokenIsLoaded = useSelector((state) => state.access.isLoadedStatus);

  useEffect(() => {
    dispatch(getNewAccessToken());
  }, []);

  return (
    <div className={classes.root}>
      <Wrapper className="wrapper--dark-grey">
        <Header />
      </Wrapper>
      <Wrapper className="wrapper--light-grey">
        <Column>
          {tokenIsLoaded === 'success' && <TopGames />}
          {tokenIsLoaded === 'fail' && <p>Error</p>}
          <Footer />
        </Column>
      </Wrapper>
    </div>
  );
};

export default Root;
