import { useState, useCallback } from 'react';

import HttpError from '../libs/HttpError';
import * as params from '../constants/global';

const useHttp = function () {
  let [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, getJSON, getHeaders };
};

export default useHttp;
