import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './scripts/components/Header/Header.js';
import Wrapper from './scripts/Layout/Wrapper.js';
import Column from './scripts/Layout/Column.js';
import Footer from './scripts/components/Footer/Footer.js';
import TopGames from './scripts/pages/TopGames.js';

import classes from './App.module.scss';
import { getNewAccessToken } from './scripts/store/access-token-actions.js';

const App = function () {
  const dispatch = useDispatch();
  const tokenIsLoaded = useSelector((state) => state.access.isLoadedStatus);

  useEffect(() => {
    const apiConfig = {
      clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
      clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    };

    dispatch(getNewAccessToken(apiConfig));
  }, []);

  return (
    <div className={classes.app}>
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

export default App;
