import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.html';
import './scss/main.scss';

import App from './App.js';
import store from './scripts/store/index.js';

const appContainer = document.getElementById('app-container');
const appRoot = createRoot(appContainer);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
