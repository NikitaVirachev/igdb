import HttpError from './HttpError';

export let state = {
  api: {
    baseURL: 'http://localhost:8000/api.igdb.com/v4',
    smallCoverURL: 'https://images.igdb.com/igdb/image/upload/t_cover_small',
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
  headers.append('Content-Type', 'text/plain');
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
      body: new URLSearchParams({
        client_id: state.api.clientId,
        client_secret: state.api.clientSecret,
        grant_type: 'client_credentials',
      }),
    };
    const url = `https://id.twitch.tv/oauth2/token`;
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
    return response;
  } catch (error) {
    throw error;
  }
};

export const getGameCover = async function (coverID) {
  try {
    const raw = `fields image_id;where id = ${coverID}`;
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
    if (error instanceof HttpError && error.status === 401) {
      // Проверка на HttpError и статус 401
      await getAccessToken(); // Ожидание получения нового токена
      return getTopGames(); // Рекурсивный вызов после обновления токена
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};

export const getTopGames = async function () {
  try {
    const raw =
      'search=' +
      '&fields=id,name,url,cover.url,release_dates.date,total_rating' +
      '&filter[total_rating][gt]=0&filter[total_rating_count][gt]=100' +
      '&order=total_rating:desc' +
      '&limit=5';
    const requestOptions = {
      method: 'GET',
      headers: state.api.headers,
    };
    const url = `${state.api.baseURL}/games/?${raw}`;

    const games = await getJSON(
      url,
      requestOptions,
      'Failed request to receive top of games'
    );

    games.map(async (game, index) => {
      const coverObj = await getGameCover(game.cover.id);
      const imageURL = `${state.api.smallCoverURL}/${coverObj.image_id}.jpg`;
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
    console.error(`${error} 💥`); // Исправлено для корректного вывода ошибки
    if (error instanceof HttpError && error.status === 401) {
      // Проверка на HttpError и статус 401
      await getAccessToken(); // Ожидание получения нового токена
      return getTopGames(); // Рекурсивный вызов после обновления токена
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};
