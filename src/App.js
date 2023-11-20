import React from 'react';

import Header from './scripts/components/Header/Header.js';
import Wrapper from './scripts/Layout/Wrapper.js';
import Column from './scripts/Layout/Column.js';
import Footer from './scripts/components/Footer/Footer.js';
import TopGames from './scripts/pages/TopGames.js';

const App = function () {
  return (
    <React.Fragment>
      <Wrapper className="wrapper--dark-grey">
        <Header />
      </Wrapper>
      <Wrapper className="wrapper--light-grey">
        <Column>
          <TopGames />
          <Footer />
        </Column>
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
