import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Root from './scripts/Layout/Root';
import ErrorPage from './scripts/pages/ErrorPage';
import TopGames from './scripts/pages/TopGames';
import TopCompanies from './scripts/pages/TopCompanies';
import TopContributors from './scripts/pages/TopContributors';
import TopAnticipated from './scripts/pages/TopAnticipated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'top-100',
        children: [
          { index: true, element: <Navigate replace to="games" /> },
          { path: 'games', element: <TopGames /> },
          { path: 'companies', element: <TopCompanies /> },
          { path: 'contributors', element: <TopContributors /> },
          { path: 'anticipated', element: <TopAnticipated /> },
        ],
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
