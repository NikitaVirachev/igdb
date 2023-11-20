import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.html';
import './scss/main.scss';
import { init } from './scripts/control.js';

import App from './App.js';

const appContainer = document.getElementById('app-container');
const appRoot = createRoot(appContainer);
appRoot.render(<App />);

init();
