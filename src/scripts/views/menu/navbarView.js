import MenuView from './menuView.js';

class NavbarView extends MenuView {
  addhandleScreenAreaClick(handler) {
    this._screenArea.addEventListener('click', handler);
  }

  toggleNavbarLink(link) {
    link.classList.toggle('navbar__link--primary');
  }

  deactivateNavbar() {
    this._container
      .querySelectorAll('.navbar__link')
      .forEach((menu) => menu.classList.remove('navbar__link--primary'));
  }
}

export default new NavbarView('#navbar');
