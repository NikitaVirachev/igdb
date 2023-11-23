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

  const waitUntil = useCallback(async (queue, callback, resultsFlow) => {
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
  }, []);

  const getImage = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new HttpError(errorMsg, response.ok, response.status);
      return response.blob();
    } catch (error) {
      throw error;
    }
  }, []);

  return { isLoading, error, getJSON, getHeaders, waitUntil, getImage };
};

export default useHttp;
