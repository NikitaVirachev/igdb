import { accessTokenActions } from './access-token-slice';
import * as params from '../constants/global';

export const getNewAccessToken = function () {
  return async (dispatch) => {
    const requestOptions = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: params.CLIENT_ID,
        client_secret: params.CLIENT_SECRET,
        grant_type: 'client_credentials',
      }),
    };
    const url = `https://id.twitch.tv/oauth2/token`;

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok)
        throw new HttpError(
          'Failed to obtain OAuth token',
          response.ok,
          response.status
        );
      const data = await response.json();
      dispatch(accessTokenActions.update(data.access_token));
      dispatch(accessTokenActions.loadedSuccessfully());
    } catch (error) {
      dispatch(accessTokenActions.loadedFailed(error));
    }
  };
};
