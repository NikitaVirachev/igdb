import HttpError from './HttpError';

export let state = {
  api: {
    baseURL: 'https://api.igdb.com/v4',
    clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
    clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    access_token: null,
  },
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
    console.log(data);
  } catch (error) {
    console.error(`${error} 💥`);
    if (error.statusCode === '401') {
      //to do Unauthorized
    }
  }
};
