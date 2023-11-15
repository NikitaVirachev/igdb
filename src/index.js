import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.html';
import './scss/main.scss';
import { init } from './scripts/control.js';

import Footer from './scripts/components/Footer/Footer.js';
import Aside from './scripts/components/Aside/Aside.js';

const footerContainer = document.getElementById('footer-container');
const footerRoot = createRoot(footerContainer);
footerRoot.render(<Footer />);

const asideContainer = document.getElementById('aside-container');
const asideRoot = createRoot(asideContainer);
asideRoot.render(<Aside />);

init();
