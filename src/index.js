import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.html';
import './scss/main.scss';

import App from './App.js';
import store from './scripts/store/index.js';

const appRoot = createRoot(document.getElementById('root'));
appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
