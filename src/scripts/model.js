import HttpError from './HttpError';
import Queue from './Queue';

export let state = {
  api: {
    baseURL: 'http://localhost:8000/https://api.igdb.com/v4',
    smallCoverURL: 'https://images.igdb.com/igdb/image/upload/t_cover_small',
    clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
    clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    access_token: null,
    headers: null,
    rateLimit: 4,
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
    throw error;
  }
};

const getImage = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new HttpError(errorMsg, response.ok, response.status);
    return response.blob();
  } catch (error) {
    throw error;
  }
};

export const getGameCover = async function (coverID) {
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
    if (error instanceof HttpError && error.status === 401) {
      // Проверка на HttpError и статус 401
      await getAccessToken(); // Ожидание получения нового токена
      return getGameCover(coverID); // Рекурсивный вызов после обновления токена
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};

const collectGameObject = async function (game, index) {
  const [cover] = await getGameCover(game.cover);
  const hash = cover.image_id;
  const url = `${state.api.smallCoverURL}/${hash}.jpg`;
  const imageBlob = await getImage(url);
  const imageURL = URL.createObjectURL(imageBlob);
  return {
    ...game,
    number: index + 1,
    score: Math.floor(game.total_rating),
    year: new Date(game.first_release_date * 1000).getFullYear(),
    imageURL,
  };
};

export const getTopGames = async function () {
  try {
    const raw =
      'fields id, name, url, cover, first_release_date, total_rating;' +
      'where (total_rating > 0 & total_rating_count > 100) & (aggregated_rating_count > 5) & category = (0, 8, 9);' +
      'limit 100;' +
      'sort total_rating desc;';
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
    const gamesQueue = new Queue();
    games.forEach((game) => {
      gamesQueue.enqueue(game);
    });

    const requestInInterval = async function (gamesQueue) {
      let games = [];
      while (games.length < state.api.rateLimit && !gamesQueue.isEmpty)
        games.push(gamesQueue.dequeue());

      games = await Promise.all(
        games.map(async (game, index) => await collectGameObject(game, index))
      );
      console.log(games);
      if (gamesQueue.length === 0) clearInterval(intervalId);
    };

    const intervalId = setInterval(requestInInterval, 1000, gamesQueue);
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
