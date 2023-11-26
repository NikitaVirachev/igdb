import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './scripts/Layout/Root';
import ErrorPage from './scripts/pages/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage /> },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
