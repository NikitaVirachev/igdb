import HttpError from './HttpError';

export let state = {
  api: {
    baseURL: 'https://api.igdb.com/v4',
    clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
    clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    access_token: null,
    headers: null,
  },
};

const setHeaders = function () {
  const headers = new Headers();
  headers.append('Client-ID', state.api.clientId);
  headers.append('Authorization', `Bearer ${state.api.access_token}`);
  headers.append('Accept', 'application/json');
  state.api.headers = headers;
};

const getJSON = async function (
  url,
  requestOptions = {},
  errorMsg = 'Something went wrong'
) {
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok)
      throw new HttpError(errorMsg, response.ok, response.status);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getAccessToken = async function () {
  try {
    const requestOptions = {
      method: 'POST',
    };
    const url = `https://id.twitch.tv/oauth2/token?client_id=${state.api.clientId}&client_secret=${state.api.clientSecret}&grant_type=client_credentials`;
    const data = await getJSON(
      url,
      requestOptions,
      'Failed to obtain OAuth token'
    );
    state.api.access_token = data.access_token;
    setHeaders();
  } catch (error) {
    throw Error;
  }
};

const getImage = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new HttpError(errorMsg, response.ok, response.status);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getGameCover = async function (coverID) {
  try {
    const raw = `fields *;\r\nwhere id = ${coverID}`;
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
    if (error.statusCode === '401') {
      getAccessToken();
      getTopGames();
    }
  }
};

export const getTopGames = async function () {
  try {
    const raw =
      'fields id, name, url, cover, release_dates, total_rating;\r\nwhere total_rating > 0 & total_rating_count > 100;\r\nlimit 100;\r\nsort total_rating desc;';
    const requestOptions = {
      method: 'POST',
      headers: state.api.headers,
      body: raw,
    };
    const url = `${state.api.baseURL}/games`;

    const games = await getJSON(
      url,
      requestOptions,
      'Failed request to receive top of games'
    );

    games.map(async (game, index) => {
      const coverObj = await getGameCover(game.cover);
      const imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_small/${coverObj.image_id}.jpg`;
      const cover = await getImage(imageURL);
      return {
        name: game.name,
        cover: cover,
        score: game.total_rating,
        number: index,
      };
    });

    return games;
  } catch (error) {
    console.error(`${error} 💥`);
    if (error.statusCode === '401') {
      getAccessToken();
      getTopGames();
    }
  }
};
