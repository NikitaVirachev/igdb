import MenuView from './menuView.js';

class NavbarView extends MenuView {
  _burgerBtn = document.querySelector('#navbar-burger-btn');
  _navbar = document.querySelector('#navbar');

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

  addHandleBurgerBtnClick(handler) {
    this._burgerBtn.addEventListener('click', handler);
  }

  toggleNavbarCollapse() {
    this._navbar.classList.toggle('navbar--collapsed');
  }
}

export default new NavbarView('#navbar');
