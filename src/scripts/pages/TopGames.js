import React from 'react';

import classes from './TopGames.module.scss';
import Breadcrumb from '../components/Main/Breadcrumb';
import Content from '../components/Main/Content/Content';
import HeaderContent from '../components/Main/Content/HeaderContent';
import Filter from '../components/Main/Filter';
import Table from '../components/Table/Table';
import Aside from '../components/Aside/Aside';

const TopGames = function () {
  const games = [];

  return (
    <React.Fragment>
      <main>
        <Content>
          <Breadcrumb></Breadcrumb>
          <HeaderContent>Best Games</HeaderContent>
          <div className={classes['top-games__filter']}>
            <Filter />
          </div>
          <Table id="tog-100-games-table" rows={games} />
        </Content>
      </main>
      <Aside />
    </React.Fragment>
  );
};

export default TopGames;
