import MenuView from './menuView.js';

class DropdownMenuView extends MenuView {
  toggleDropdownMenu(dropdownMenu) {
    dropdownMenu.classList.toggle('dropdown-menu--hide');
  }

  hideDropdownMenu() {
    this._container
      .querySelectorAll('.dropdown-menu')
      .forEach((menu) => menu.classList.add('dropdown-menu--hide'));
  }
}

export default new DropdownMenuView('#navbar');
