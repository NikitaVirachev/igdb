import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './Cover.module.scss';
import CoverStub from './CoverStub';
import useHttp from '../../hooks/useHttp';
import * as params from '../../constants/global';

const Cover = function (props) {
  const { isLoading, error, getJSON, getHeaders } = useHttp();
  const accessToken = useSelector((state) => state.access.accessToken);
  const [imageURL, setImageURL] = useState(null);
  const coverId = props.coverId;

  useEffect(() => {
    const getImage = async (cover) => {
      try {
        const [coverObj] = cover;
        const hash = coverObj.image_id;
        const url = `${params.SMALL_COVER_URL}/${hash}.jpg`;
        const response = await fetch(url);
        if (!response.ok)
          throw new HttpError(errorMsg, response.ok, response.status);
        const imageBlob = await response.blob();
        const imageURL = URL.createObjectURL(imageBlob);
        setImageURL(imageURL);
      } catch (error) {
        console.error(`${error} 💥`);
      }
    };

    const getGameCover = async function (coverID) {
      try {
        const raw = `fields image_id;where id = ${coverID};`;
        const requestConfig = {
          url: `${params.BASE_URL}/covers`,
          errorMsg: 'Failed request to game cover',
          method: 'POST',
          headers: getHeaders(accessToken),
          body: raw,
        };

        getJSON(requestConfig, getImage);
      } catch (error) {
        console.error(`${error} 💥`);
      }
    };

    getGameCover(coverId);
  }, [coverId]);

  return (
    <a href={props.href}>
      <div className={classes.cover}>
        {imageURL && <img src={imageURL} alt={`Cover of ${props.name}`} />}
        {!imageURL && <CoverStub />}
      </div>
    </a>
  );
};

export default Cover;
