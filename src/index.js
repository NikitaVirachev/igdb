import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.html';
import './scss/main.scss';
import { init } from './scripts/control.js';

import Footer from './scripts/components/Footer/Footer.js';
import Aside from './scripts/components/Aside/Aside.js';
import Header from './scripts/components/Header/Header.js';
import Wrapper from './scripts/components/Wrapper/Wrapper.js';
import Breadcrumb from './scripts/components/Main/Breadcrumb.js';

const footerContainer = document.getElementById('footer-container');
const footerRoot = createRoot(footerContainer);
footerRoot.render(<Footer />);

const asideContainer = document.getElementById('aside-container');
const asideRoot = createRoot(asideContainer);
asideRoot.render(<Aside />);

const breadcrumbContainer = document.getElementById('breadcrumb-container');
const breadcrumbRoot = createRoot(breadcrumbContainer);
breadcrumbRoot.render(<Breadcrumb />);

const headerContainer = document.getElementById('header-container');
const headerRoot = createRoot(headerContainer);
headerRoot.render(
  <Wrapper className="wrapper--dark-grey">
    <Header />
  </Wrapper>
);

init();
