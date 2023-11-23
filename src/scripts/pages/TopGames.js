import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './TopGames.module.scss';
import Breadcrumb from '../components/Main/Breadcrumb';
import Content from '../components/Main/Content/Content';
import HeaderContent from '../components/Main/Content/HeaderContent';
import Filter from '../components/Main/Filter';
import Table from '../components/Table/Table';
import Aside from '../components/Aside/Aside';
import useHttp from '../hooks/useHttp';
import * as params from '../constants/global';

const TopGames = function () {
  const [games, setGames] = useState([]);
  const accessToken = useSelector((state) => state.access.accessToken);
  const { isLoading, error, getJSON, getHeaders } = useHttp();

  useEffect(() => {
    const transformGames = (games) => {
      const gameObjects = games.map((game, index) => {
        return {
          ...game,
          number: index + 1,
          score: Math.floor(game.total_rating),
          year: new Date(game.first_release_date * 1000).getFullYear(),
        };
      });

      setGames(gameObjects);
    };

    const getTopGames = async () => {
      const raw =
        'fields id, name, url, cover, first_release_date, total_rating;' +
        'where (total_rating > 0 & total_rating_count > 100) & (aggregated_rating_count > 5) & category = (0, 8, 9);' +
        'limit 100;' +
        'sort total_rating desc;';
      const requestConfig = {
        url: `${params.BASE_URL}/games`,
        errorMsg: 'Failed request to receive top of games',
        method: 'POST',
        headers: getHeaders(accessToken),
        body: raw,
      };
      getJSON(requestConfig, transformGames);
    };

    getTopGames();
  }, [accessToken, getJSON, getHeaders]);

  return (
    <React.Fragment>
      <main>
        <Content>
          <Breadcrumb></Breadcrumb>
          <HeaderContent>Best Games</HeaderContent>
          <div className={classes['top-games__filter']}>
            <Filter />
          </div>
          {isLoading && <p>Games is Loading</p>}
          {!isLoading && <Table id="tog-100-games-table" rows={games} />}
        </Content>
      </main>
      <Aside />
    </React.Fragment>
  );
};

export default TopGames;
