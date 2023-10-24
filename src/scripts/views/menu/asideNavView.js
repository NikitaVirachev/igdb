import MenuView from './menuView.js';

class AsideNavView extends MenuView {
  toggleNavbarLink(link) {
    link.classList.toggle('aside__link--active');
  }

  deactivateNavbar() {
    this._container
      .querySelectorAll('.aside__link')
      .forEach((menu) => menu.classList.remove('aside__link--active'));
  }
}

export default new AsideNavView('#aside-nav');
