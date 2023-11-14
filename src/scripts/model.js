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
  const url = `${state.api.smallCoverURL}/${hash}.jpg`;
  const imageBlob = await getImage(url);
  const imageURL = URL.createObjectURL(imageBlob);
  return { id: game.id, imageURL };
};

const waitUntil = async function (queue, callback, resultsFlow) {
  let resultArray = [];
  const queueLength = queue.length;
  return new Promise((resolve) => {
    let intervalId = null;
    intervalId = setInterval(async () => {
      let limitValues = [];
      while (limitValues.length < state.api.rateLimit && !queue.isEmpty)
        limitValues.push(queue.dequeue());
      limitValues = await Promise.all(
        limitValues.map(async (value) => await callback(value))
      );
      resultsFlow(limitValues);
      resultArray = resultArray.concat(limitValues);
      if (resultArray.length === queueLength) {
        resolve(resultArray);
        clearInterval(intervalId);
      }
    }, 1000);
  });
};

export const getGameCovers = async function (games, gameCoversHandler) {
  const gamesQueue = new Queue();
  games.forEach((game) => {
    gamesQueue.enqueue(game);
  });

  return await waitUntil(gamesQueue, getImageURL, gameCoversHandler);
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
    const gameObjects = games.map((game, index) => {
      return {
        ...game,
        number: index + 1,
        score: Math.floor(game.total_rating),
        year: new Date(game.first_release_date * 1000).getFullYear(),
      };
    });
    return gameObjects;
  } catch (error) {
    console.error(`${error} 💥`);
    if (error instanceof HttpError && error.statusCode === 401) {
      console.error('Token invalid');
      await getAccessToken();
      return getTopGames();
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};
