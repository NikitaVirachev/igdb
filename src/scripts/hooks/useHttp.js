import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getNewAccessToken } from '../store/access-token-actions';
import HttpError from '../libs/HttpError';
import * as params from '../constants/global';

const useHttp = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const controller = new AbortController();
  const signal = controller.signal;

  const getHeaders = useCallback((accessToken) => {
    const headers = new Headers();
    headers.append('Client-ID', params.CLIENT_ID);
    headers.append('Authorization', `Bearer ${accessToken}`);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'text/plain');
    return headers;
  }, []);

  const getJSON = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
        signal,
      });
      if (!response.ok)
        throw new HttpError(
          requestConfig.errorMsg,
          response.ok,
          response.status
        );
      const data = await response.json();
      applyData(data);
    } catch (error) {
      if (error instanceof HttpError && error.statusCode === 429) {
        setTimeout(() => getJSON(requestConfig, applyData), 1000);
      } else if (error instanceof HttpError && error.statusCode === 401) {
        console.error('Token invalid');
        dispatch(getNewAccessToken());
        getJSON(requestConfig, applyData);
      } else {
        setError(error);
      }
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, getJSON, getHeaders, controller };
};

export default useHttp;
