import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Cover.module.scss';
import CoverStub from './CoverStub';
import useHttp from '../../hooks/useHttp';
import * as params from '../../constants/global';

const Cover = function (props) {
  const { isLoading, error, getJSON, getHeaders } = useHttp();
  const dispath = useDispatch();
  const accessToken = useSelector((state) => state.access.accessToken);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const getGameCover = async function (coverID) {
      try {
        const raw = `fields image_id;where id = ${coverID};`;
        const requestOptions = {
          method: 'POST',
          headers: state.api.headers,
          body: raw,
        };
        const url = `${state.api.baseURL}/covers`;

        const cover = await getJSON(
          url,
          requestOptions,
          'Failed request to game cover'
        );
        return cover;
      } catch (error) {
        console.error(`${error} 💥`);
        if (error instanceof HttpError && error.statusCode === 401) {
          console.error('Token invalid');
          await getAccessToken();
          return getGameCover(coverID);
        } else {
          throw error; // Переброс остальных ошибок
        }
      }
    };

    const getImageURL = async function (game) {
      const [cover] = await getGameCover(game.cover);
      const hash = cover.image_id;
      const url = `${params.SMALL_COVER_URL}/${hash}.jpg`;
      const imageBlob = await getImage(url);
      const imageURL = URL.createObjectURL(imageBlob);
      return imageURL;
    };

    const getGameCovers = async function (coverID, gameCoversHandler) {
      const gamesQueue = new Queue();
      games.forEach((game) => {
        gamesQueue.enqueue(game);
      });

      return await waitUntil(gamesQueue, getImageURL, gameCoversHandler);
    };

    // await getGameCovers(props.coverID, controllSetImagesSrc);
  }, []);

  return (
    <a href={props.href}>
      <div className={classes.cover}>
        {isLoading && <img src={imageURL} alt={`Cover of ${props.name}`} />}
        {!isLoading && <CoverStub />}
      </div>
    </a>
  );
};

export default Cover;
