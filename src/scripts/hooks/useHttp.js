import { useState, useCallback } from 'react';

import HttpError from '../libs/HttpError';

const useHttp = function () {
  let [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHeaders = useCallback((clientId, accessToken) => {
    const headers = new Headers();
    headers.append('Client-ID', clientId);
    headers.append('Authorization', `Bearer ${accessToken}`);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'text/plain');
    return headers;
  });

  const getJSON = useCallback(async (requestOptions) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok)
        throw new HttpError(errorMsg, response.ok, response.status);
      return response.json();
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  });

  return { isLoading, error, getJSON, getHeaders };
};

export default useHttp;
