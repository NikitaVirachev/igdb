import * as model from './model.js';
import searchFormView from './views/forms/searchFormView.js';
import navbarView from './views/menu/navbarView.js';
import dropdownMenuView from './views/menu/dropdownMenuView.js';
import asideNavView from './views/menu/asideNavView.js';
import footerView from './views/menu/footerView.js';
import loginView from './views/menu/loginView.js';
import tableView from './views/tableView.js';

const controlSubmitSearchForm = function (e) {
  e.preventDefault();
};

const controlNavbarClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('.navbar__link');
  if (!link) return;
  navbarView.deactivateNavbar();
  dropdownMenuView.hideDropdownMenu();
  navbarView.toggleNavbarLink(link);
  const dropdownMenuId = `#${link.dataset.section}-dropdown-menu`;
  const dropdownMenu = document.querySelector(dropdownMenuId);
  dropdownMenuView.toggleDropdownMenu(dropdownMenu);
};

const controlDropdownMenuClick = function (e) {
  e.preventDefault();
  const dropdownMenu = e.target.closest('.dropdown-menu');
  if (!dropdownMenu) return;
  dropdownMenuView.toggleDropdownMenu(dropdownMenu);
  const linkId = `#${dropdownMenu.dataset.section}-navbar`;
  const link = document.querySelector(linkId);
  navbarView.toggleNavbarLink(link);
};

const controlMenuClick = function (e) {
  e.preventDefault();
  if (e.target.closest('.navbar__link') || e.target.closest('.dropdown-menu'))
    return;
  navbarView.deactivateNavbar();
  dropdownMenuView.hideDropdownMenu();
};

const controlNavbarBurgerBtnClick = function (e) {
  e.preventDefault();
  navbarView.toggleNavbarCollapse();
};

const controlAsideNavClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('.aside__link');
  if (!link) return;
  asideNavView.deactivateNavbar();
  asideNavView.toggleNavbarLink(link);
};

const controlFooterBtnClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('#back-to-top');
  if (!link) return;
  footerView.scrollToTop();
};

const controlLoginBtnClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('#login');
  if (!link) return;
};

export const init = async function () {
  searchFormView.addHandlSubmitForm(controlSubmitSearchForm);
  navbarView.addHandleMenuClick(controlNavbarClick);
  dropdownMenuView.addHandleMenuClick(controlDropdownMenuClick);
  window.addEventListener('click', controlMenuClick);
  navbarView.addHandleBurgerBtnClick(controlNavbarBurgerBtnClick);
  asideNavView.addHandleMenuClick(controlAsideNavClick);
  footerView.addHandleMenuClick(controlFooterBtnClick);
  loginView.addHandleMenuClick(controlLoginBtnClick);
  try {
    await model.getAccessToken();
    const games = await model.getTopGames();
    // tableView.createTable(games);
  } catch (error) {
    console.error(`${error} 💥`);
  }
};
