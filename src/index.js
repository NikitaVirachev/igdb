import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.html';
import './scss/main.scss';
import { init } from './scripts/control.js';

import Footer from './scripts/components/Footer/Footer.js';

const footerContainer = document.getElementById('footer-container');
const footerRoot = createRoot(footerContainer);
footerRoot.render(<Footer />);

init();
