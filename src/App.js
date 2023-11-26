import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './scripts/Layout/Root';

const router = createBrowserRouter([{ path: '/', element: <Root /> }]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
