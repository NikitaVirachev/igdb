import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './scripts/Layout/Root';
import ErrorPage from './scripts/pages/ErrorPage';
import TopGames from './scripts/pages/TopGames';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: '/top-100', element: <TopGames /> }],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
