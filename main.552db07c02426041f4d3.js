/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/HttpError.js":
/*!**********************************!*\
  !*** ./src/scripts/HttpError.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HttpError extends Error {
  status = null;
  statusCode = null;
  constructor(message, status, statusCode) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.statusCode = statusCode;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpError);

/***/ }),

/***/ "./src/scripts/Queue.js":
/*!******************************!*\
  !*** ./src/scripts/Queue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);

/***/ }),

/***/ "./src/scripts/control.js":
/*!********************************!*\
  !*** ./src/scripts/control.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/scripts/model.js");
/* harmony import */ var _views_forms_searchFormView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/forms/searchFormView.js */ "./src/scripts/views/forms/searchFormView.js");
/* harmony import */ var _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/menu/navbarView.js */ "./src/scripts/views/menu/navbarView.js");
/* harmony import */ var _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/menu/dropdownMenuView.js */ "./src/scripts/views/menu/dropdownMenuView.js");
/* harmony import */ var _views_menu_asideNavView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/menu/asideNavView.js */ "./src/scripts/views/menu/asideNavView.js");
/* harmony import */ var _views_menu_footerView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/menu/footerView.js */ "./src/scripts/views/menu/footerView.js");
/* harmony import */ var _views_menu_loginView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/menu/loginView.js */ "./src/scripts/views/menu/loginView.js");
/* harmony import */ var _views_tableView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/tableView.js */ "./src/scripts/views/tableView.js");








const controlSubmitSearchForm = function (e) {
  e.preventDefault();
};
const controlNavbarClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('.navbar__link');
  if (!link) return;
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].deactivateNavbar();
  _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideDropdownMenu();
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNavbarLink(link);
  const dropdownMenuId = `#${link.dataset.section}-dropdown-menu`;
  const dropdownMenu = document.querySelector(dropdownMenuId);
  _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleDropdownMenu(dropdownMenu);
};
const controlDropdownMenuClick = function (e) {
  e.preventDefault();
  const dropdownMenu = e.target.closest('.dropdown-menu');
  if (!dropdownMenu) return;
  _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleDropdownMenu(dropdownMenu);
  const linkId = `#${dropdownMenu.dataset.section}-navbar`;
  const link = document.querySelector(linkId);
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNavbarLink(link);
};
const controlMenuClick = function (e) {
  e.preventDefault();
  if (e.target.closest('.navbar__link') || e.target.closest('.dropdown-menu')) return;
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].deactivateNavbar();
  _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideDropdownMenu();
};
const controlNavbarBurgerBtnClick = function (e) {
  e.preventDefault();
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNavbarCollapse();
};
const controlAsideNavClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('.aside__link');
  if (!link) return;
  _views_menu_asideNavView_js__WEBPACK_IMPORTED_MODULE_4__["default"].deactivateNavbar();
  _views_menu_asideNavView_js__WEBPACK_IMPORTED_MODULE_4__["default"].toggleNavbarLink(link);
};
const controlFooterBtnClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('#back-to-top');
  if (!link) return;
  _views_menu_footerView_js__WEBPACK_IMPORTED_MODULE_5__["default"].scrollToTop();
};
const controlLoginBtnClick = function (e) {
  e.preventDefault();
  const link = e.target.closest('#login');
  if (!link) return;
};
const controllSetImagesSrc = function (covers) {
  _views_tableView_js__WEBPACK_IMPORTED_MODULE_7__["default"].setImagesSrc(covers);
};
const init = async function () {
  _views_forms_searchFormView_js__WEBPACK_IMPORTED_MODULE_1__["default"].addHandlSubmitForm(controlSubmitSearchForm);
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].addHandleMenuClick(controlNavbarClick);
  _views_menu_dropdownMenuView_js__WEBPACK_IMPORTED_MODULE_3__["default"].addHandleMenuClick(controlDropdownMenuClick);
  window.addEventListener('click', controlMenuClick);
  _views_menu_navbarView_js__WEBPACK_IMPORTED_MODULE_2__["default"].addHandleBurgerBtnClick(controlNavbarBurgerBtnClick);
  _views_menu_asideNavView_js__WEBPACK_IMPORTED_MODULE_4__["default"].addHandleMenuClick(controlAsideNavClick);
  _views_menu_footerView_js__WEBPACK_IMPORTED_MODULE_5__["default"].addHandleMenuClick(controlFooterBtnClick);
  _views_menu_loginView_js__WEBPACK_IMPORTED_MODULE_6__["default"].addHandleMenuClick(controlLoginBtnClick);
  try {
    await _model_js__WEBPACK_IMPORTED_MODULE_0__.getAccessToken();
    const games = await _model_js__WEBPACK_IMPORTED_MODULE_0__.getTopGames();
    _views_tableView_js__WEBPACK_IMPORTED_MODULE_7__["default"].createTable(games);
    await _model_js__WEBPACK_IMPORTED_MODULE_0__.getGameCovers(games, controllSetImagesSrc);
  } catch (error) {
    console.error(`${error} 💥`);
  }
};

/***/ }),

/***/ "./src/scripts/model.js":
/*!******************************!*\
  !*** ./src/scripts/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAccessToken: () => (/* binding */ getAccessToken),
/* harmony export */   getGameCovers: () => (/* binding */ getGameCovers),
/* harmony export */   getTopGames: () => (/* binding */ getTopGames),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpError */ "./src/scripts/HttpError.js");
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ "./src/scripts/Queue.js");


let state = {
  api: {
    baseURL: 'https://api.igdb.com/v4',
    smallCoverURL: 'https://images.igdb.com/igdb/image/upload/t_cover_small',
    clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
    clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    access_token: null,
    headers: null,
    rateLimit: 4
  }
};
const setHeaders = function () {
  const headers = new Headers();
  headers.append('Client-ID', state.api.clientId);
  headers.append('Authorization', `Bearer ${state.api.access_token}`);
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'text/plain');
  state.api.headers = headers;
};
const getJSON = async function (url) {
  let requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let errorMsg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Something went wrong';
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) throw new _HttpError__WEBPACK_IMPORTED_MODULE_0__["default"](errorMsg, response.ok, response.status);
    return response.json();
  } catch (error) {
    throw error;
  }
};
const getAccessToken = async function () {
  try {
    const requestOptions = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: state.api.clientId,
        client_secret: state.api.clientSecret,
        grant_type: 'client_credentials'
      })
    };
    const url = `https://id.twitch.tv/oauth2/token`;
    const data = await getJSON(url, requestOptions, 'Failed to obtain OAuth token');
    state.api.access_token = data.access_token;
    setHeaders();
  } catch (error) {
    throw error;
  }
};
const getImage = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new _HttpError__WEBPACK_IMPORTED_MODULE_0__["default"](errorMsg, response.ok, response.status);
    return response.blob();
  } catch (error) {
    throw error;
  }
};
const getGameCover = async function (coverID) {
  try {
    const raw = `fields image_id;where id = ${coverID};`;
    const requestOptions = {
      method: 'POST',
      headers: state.api.headers,
      body: raw
    };
    const url = `${state.api.baseURL}/covers`;
    const cover = await getJSON(url, requestOptions, 'Failed request to game cover');
    return cover;
  } catch (error) {
    console.error(`${error} 💥`);
    if (error instanceof _HttpError__WEBPACK_IMPORTED_MODULE_0__["default"] && error.statusCode === 401) {
      console.error('Token invalid');
      await getAccessToken();
      return getGameCover(coverID);
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};

const getImageURL = async function (game) {
  const [cover] = await getGameCover(game.cover);
  const hash = cover.image_id;
  const url = `${state.api.smallCoverURL}/${hash}.jpg`;
  const imageBlob = await getImage(url);
  const imageURL = URL.createObjectURL(imageBlob);
  return {
    id: game.id,
    imageURL
  };
};
const waitUntil = async function (queue, callback, resultsFlow) {
  let resultArray = [];
  const queueLength = queue.length;
  return new Promise(resolve => {
    let intervalId = null;
    intervalId = setInterval(async () => {
      let limitValues = [];
      while (limitValues.length < state.api.rateLimit && !queue.isEmpty) limitValues.push(queue.dequeue());
      limitValues = await Promise.all(limitValues.map(async value => await callback(value)));
      resultsFlow(limitValues);
      resultArray = resultArray.concat(limitValues);
      if (resultArray.length === queueLength) {
        resolve(resultArray);
        clearInterval(intervalId);
      }
    }, 1000);
  });
};
const getGameCovers = async function (games, gameCoversHandler) {
  const gamesQueue = new _Queue__WEBPACK_IMPORTED_MODULE_1__["default"]();
  games.forEach(game => {
    gamesQueue.enqueue(game);
  });
  return await waitUntil(gamesQueue, getImageURL, gameCoversHandler);
};
const getTopGames = async function () {
  try {
    const raw = 'fields id, name, url, cover, first_release_date, total_rating;' + 'where (total_rating > 0 & total_rating_count > 100) & (aggregated_rating_count > 5) & category = (0, 8, 9);' + 'limit 100;' + 'sort total_rating desc;';
    const requestOptions = {
      method: 'POST',
      headers: state.api.headers,
      body: raw
    };
    const url = `${state.api.baseURL}/games`;
    const games = await getJSON(url, requestOptions, 'Failed request to receive top of games');
    const gameObjects = games.map((game, index) => {
      return {
        ...game,
        number: index + 1,
        score: Math.floor(game.total_rating),
        year: new Date(game.first_release_date * 1000).getFullYear()
      };
    });
    return gameObjects;
  } catch (error) {
    console.error(`${error} 💥`);
    if (error instanceof _HttpError__WEBPACK_IMPORTED_MODULE_0__["default"] && error.statusCode === 401) {
      console.error('Token invalid');
      await getAccessToken();
      return getTopGames();
    } else {
      throw error; // Переброс остальных ошибок
    }
  }
};

/***/ }),

/***/ "./src/scripts/views/forms/formView.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/forms/formView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/scripts/views/view.js");

class FormView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _form = null;
  constructor(formID) {
    super();
    this._form = document.querySelector(formID);
  }
  addHandlSubmitForm(handler) {
    this._form.addEventListener('click', handler);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormView);

/***/ }),

/***/ "./src/scripts/views/forms/searchFormView.js":
/*!***************************************************!*\
  !*** ./src/scripts/views/forms/searchFormView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formView.js */ "./src/scripts/views/forms/formView.js");

class SearchFormView extends _formView_js__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchFormView('#search'));

/***/ }),

/***/ "./src/scripts/views/menu/asideNavView.js":
/*!************************************************!*\
  !*** ./src/scripts/views/menu/asideNavView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuView.js */ "./src/scripts/views/menu/menuView.js");

class AsideNavView extends _menuView_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  toggleNavbarLink(link) {
    link.classList.toggle('aside__link--active');
  }
  deactivateNavbar() {
    this._container.querySelectorAll('.aside__link').forEach(menu => menu.classList.remove('aside__link--active'));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AsideNavView('#aside-nav'));

/***/ }),

/***/ "./src/scripts/views/menu/dropdownMenuView.js":
/*!****************************************************!*\
  !*** ./src/scripts/views/menu/dropdownMenuView.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuView.js */ "./src/scripts/views/menu/menuView.js");

class DropdownMenuView extends _menuView_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  toggleDropdownMenu(dropdownMenu) {
    dropdownMenu.classList.toggle('dropdown-menu--hide');
  }
  hideDropdownMenu() {
    this._container.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('dropdown-menu--hide'));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DropdownMenuView('#navbar'));

/***/ }),

/***/ "./src/scripts/views/menu/footerView.js":
/*!**********************************************!*\
  !*** ./src/scripts/views/menu/footerView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuView */ "./src/scripts/views/menu/menuView.js");

class FooterView extends _menuView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FooterView('#footer'));

/***/ }),

/***/ "./src/scripts/views/menu/loginView.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/menu/loginView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuView.js */ "./src/scripts/views/menu/menuView.js");

class LoginView extends _menuView_js__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginView('#login'));

/***/ }),

/***/ "./src/scripts/views/menu/menuView.js":
/*!********************************************!*\
  !*** ./src/scripts/views/menu/menuView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MenuView {
  _container = null;
  constructor(containerId) {
    this._container = document.querySelector(containerId);
  }
  addHandleMenuClick(handler) {
    this._container.addEventListener('click', handler);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuView);

/***/ }),

/***/ "./src/scripts/views/menu/navbarView.js":
/*!**********************************************!*\
  !*** ./src/scripts/views/menu/navbarView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuView.js */ "./src/scripts/views/menu/menuView.js");

class NavbarView extends _menuView_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _burgerBtn = document.querySelector('#navbar-burger-btn');
  _navbar = document.querySelector('#navbar');
  addhandleScreenAreaClick(handler) {
    this._screenArea.addEventListener('click', handler);
  }
  toggleNavbarLink(link) {
    link.classList.toggle('navbar__link--primary');
  }
  deactivateNavbar() {
    this._container.querySelectorAll('.navbar__link').forEach(menu => menu.classList.remove('navbar__link--primary'));
  }
  addHandleBurgerBtnClick(handler) {
    this._burgerBtn.addEventListener('click', handler);
  }
  toggleNavbarCollapse() {
    this._navbar.classList.toggle('navbar--collapsed');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NavbarView('#navbar'));

/***/ }),

/***/ "./src/scripts/views/tableView.js":
/*!****************************************!*\
  !*** ./src/scripts/views/tableView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/scripts/views/view.js");

class TableView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _table = document.querySelector('#table').querySelector('tbody');
  _generateGameMarkup(game) {
    return `
      <tr key=${game.id}>
        <td><h4 class="table__number text--muted">${game.number}</h4></td>
        <td>
          <a href="#">
            <div class="table__game-cover">
              <div class="table__stub"></div>
            </div>
          </a>
        </td>
        <td>
          <div class="table__game-name">
            <a href=${game.url}>${game.name}</a>
            <span class="mg-sm-left text--muted">(${game.year})</span>
          </div>
          <div class="table__rating">
            <span class="text--muted">Your rating:</span>
            <a>
              <div class="table__stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
            </a>
          </div>
        </td>
        <td>
          <h4 class="table__score">
            <span class="text--purple">${game.score}</span
            ><span class="text--muted"> / 100</span>
          </h4>
        </td>
    </tr>
    `;
  }
  _generateGameCoverMarkup(cover) {
    return `
      <img
        src=${cover.imageURL}
        alt="Cover of"
      />
  `;
  }
  setImagesSrc(covers) {
    covers.map(cover => {
      const row = this._table.querySelector(`tr[key='${cover.id}']`);
      const gameCoverCell = row.querySelector('.table__game-cover');
      gameCoverCell.innerHTML = this._generateGameCoverMarkup(cover);
    });
  }
  createTable(games) {
    this._table.innerHTML = '';
    games.forEach(game => {
      const gameMarkup = this._generateGameMarkup(game);
      this._table.insertAdjacentHTML('beforeend', gameMarkup);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TableView());

/***/ }),

/***/ "./src/scripts/views/view.js":
/*!***********************************!*\
  !*** ./src/scripts/views/view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class View {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo-72x72.png */ "./src/img/logo-72x72.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/star.svg */ "./src/img/star.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
0 - 767px:      tabletL
767 - 930px:    Tablet portrait
930 - 1280px:   Tablet landscape
1280px + : is where our normal styles apply

\$breakpoint arguement choices:
- tabletL
- laptop
- laptopL
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px

*/
:root {
  --dark-grey-blue-color: #323a45;
  --dark-grey-blue-color-2: #34373b;
  --dark-grey-blue-color-3: #333232;
  --dark-grey-color: #333;
  --dark-grey-color-2: #232930;
  --grey-color: #555;
  --medium-dark-color-1: #8c8c8c;
  --medium-dark-color-2: #adadad;
  --medium-dark-color-3: #858585;
  --medium-dark-color-4: #808080;
  --medium-dark-color-5: #ccc;
  --light-grey-color-1: #fafafa;
  --light-grey-color-2: #ececec;
  --light-grey-color-3: #ddd;
  --light-grey-color-4: #f5f5f5;
  --white-color: #fff;
  --primary-color: #9147ff;
  --dark-primary-color: #7313ff;
  --width-page: 115.2rem;
}

body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  -webkit-text-decoration: underline;
  text-decoration: underline; /* 2 */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

.text--purple {
  color: #9147ff !important;
  color: var(--primary-color) !important;
}
.text--muted {
  color: #858585 !important;
  color: var(--medium-dark-color-3) !important;
}

.mar-md-top {
  margin-top: 1rem;
}

.mar-lg-bottom {
  margin-bottom: 2rem;
}

.mg-sm-left {
  margin-left: 0.5rem;
}

.aside {
  line-height: 1.85rem;
}
.aside__header {
  font-size: 1.6rem;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
  font-weight: 400;
  line-height: 1.76rem;
  margin: 1rem 0;
}
.aside__nav {
  display: flex;
  flex-direction: column;
}
.aside__link:link, .aside__link:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #333232;
  color: var(--dark-grey-blue-color-3);
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  line-height: 1.85rem;
  display: block;
  padding: 1rem 1.5rem;
}
.aside__link:hover, .aside__link:active {
  background: #ececec;
  background: var(--light-grey-color-2);
}
.aside__link--active:link, .aside__link--active:visited {
  color: #fff;
  color: var(--white-color);
  background: #9147ff;
  background: var(--primary-color);
}
.aside hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #ececec;
  border-top: 1px solid var(--light-grey-color-2);
}

.content {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-rows: repeat(4, auto) 1fr;
}
.content__header {
  margin: 2.5rem 0;
  font-size: 2.4rem;
  font-weight: 400;
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
}
.content__table {
  align-self: start;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  width: 15rem;
  display: flex;
  flex-direction: column;
  background: #9147ff;
  background: var(--primary-color);
}
.dropdown-menu--hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
@media only screen and (max-width: 54em) {
  .dropdown-menu {
    position: relative;
    display: block;
    top: auto;
    left: auto;
    background: inherit;
  }
  .dropdown-menu--hide {
    display: none;
  }
}
.dropdown-menu__content-block {
  padding: 0.5rem 0;
}
.dropdown-menu__link:link, .dropdown-menu__link:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #fff;
  color: var(--white-color);
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.7rem;
  white-space: nowrap;
  padding: 0.9rem 2rem;
  width: 100%;
  vertical-align: middle;
}
@media only screen and (max-width: 54em) {
  .dropdown-menu__link:link, .dropdown-menu__link:visited {
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }
}
.dropdown-menu__link:hover, .dropdown-menu__link:active {
  background: #7313ff;
  background: var(--dark-primary-color);
}
.dropdown-menu__icon {
  fill: #fff;
  fill: var(--white-color);
  width: 1.2rem;
  height: 1.3rem;
  vertical-align: middle;
}
.dropdown-menu__separator {
  width: 100%;
  height: 0.1rem;
  background: #fff;
  background: var(--white-color);
  margin: 0.3rem 0;
}
@media only screen and (max-width: 54em) {
  .dropdown-menu__separator {
    background: inherit;
  }
}

.filter {
  display: grid;
  grid-template: repeat(3, 1fr)/auto;
  grid-column-gap: 2rem;
  column-gap: 2rem;
}
@media only screen and (min-width: 62em) {
  .filter {
    grid-template: auto/2fr 1fr 1fr;
  }
}

.footer {
  margin: 1.5rem;
}
.footer__link:link, .footer__link:visited, .footer__container {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  line-height: 1.85rem;
}
.footer__link:link, .footer__link:visited {
  color: #9147ff;
  color: var(--primary-color);
  -webkit-text-decoration: none;
  text-decoration: none;
}
.footer__container {
  color: #858585;
  color: var(--medium-dark-color-3);
  text-align: center;
}
@media only screen and (min-width: 62em) {
  .footer__container {
    text-align: left;
  }
}
.footer__mobile-btns, .footer__separator {
  display: flex;
  justify-content: space-between;
}
@media only screen and (min-width: 62em) {
  .footer__mobile-btns, .footer__separator {
    display: none;
  }
}
.footer__mobile-btn:link, .footer__mobile-btn:visited {
  font-weight: 600;
  padding: 1.3rem 4rem;
  font-size: 1.7rem;
  line-height: 1.3333333;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: #9147ff;
  color: var(--primary-color);
}
.footer__mobile-btn:hover, .footer__mobile-btn:active {
  color: #333;
  color: var(--dark-grey-color);
}

.header {
  max-width: 115.2rem;
  max-width: var(--width-page);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 5rem;
}
@media only screen and (max-width: 54em) {
  .header {
    grid-template-columns: auto 1fr;
    grid-template-rows: 5rem auto;
  }
}
.header__burder {
  display: none;
  justify-self: end;
}
@media only screen and (max-width: 54em) {
  .header__burder {
    display: block;
  }
}

.main-container {
  max-width: 115.2rem;
  max-width: var(--width-page);
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template: auto auto/1fr;
  grid-column-gap: 2rem;
  column-gap: 2rem;
}
@media only screen and (min-width: 62em) {
  .main-container {
    grid-template: 1fr auto/1fr 26.55rem;
  }
}

.main {
  display: grid;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  padding: 0 1.5rem;
}
@media only screen and (min-width: 62em) {
  .main {
    grid-template-columns: 1fr 28.55rem;
    grid-template-rows: 1fr;
  }
}

.navbar {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  height: 100%;
}
@media only screen and (max-width: 54em) {
  .navbar {
    margin-top: 0;
    transition: all 1s;
    padding: 1rem;
  }
  .navbar--collapsed {
    margin-top: -100%;
  }
}
.navbar__link:link, .navbar__link:visited {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  color: var(--white-color);
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
}
@media only screen and (max-width: 54em) {
  .navbar__link:link, .navbar__link:visited {
    padding: 1rem 1.5rem;
    height: 4rem;
  }
}
.navbar__link:hover, .navbar__link:active {
  color: #7313ff;
  color: var(--dark-primary-color);
}
.navbar__link:hover .navbar__icon,
.navbar__link:hover .navbar__caret, .navbar__link:active .navbar__icon,
.navbar__link:active .navbar__caret {
  fill: #7313ff;
  fill: var(--dark-primary-color);
}
.navbar__link--primary {
  background: #9147ff;
  background: var(--primary-color);
}
.navbar__link--primary:hover, .navbar__link--primary:active {
  color: #fff;
  color: var(--white-color);
}
.navbar__link--primary:hover .navbar__icon,
.navbar__link--primary:hover .navbar__caret, .navbar__link--primary:active .navbar__icon,
.navbar__link--primary:active .navbar__caret {
  fill: #fff;
  fill: var(--white-color);
}
.navbar__content {
  display: flex;
  gap: 0.4rem;
}
.navbar__icon, .navbar__caret {
  height: 1.3rem;
  fill: #fff;
  fill: var(--white-color);
}
.navbar__icon--games {
  width: 1.5rem;
}
.navbar__icon--database {
  width: 1.5rem;
}
.navbar__icon--community {
  width: 1.5rem;
}
.navbar__icon--help {
  width: 1.5rem;
}
.navbar__caret {
  width: 0.7rem;
}
@media only screen and (max-width: 54em) {
  .navbar__container {
    grid-column: 1/-1;
    grid-row: 3;
    border-top: 1px solid #232930;
    border-top: 1px solid var(--dark-grey-color-2);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }
}
.navbar__search {
  align-self: center;
}
@media only screen and (max-width: 54em) {
  .navbar__search {
    align-self: start;
  }
}

.wrapper--dark-grey {
  background: #323a45;
  background: var(--dark-grey-blue-color);
}
.wrapper--light-grey {
  background: #fafafa;
  background: var(--light-grey-color-1);
}

.breadcrumb {
  padding: 0.8rem 1.5rem;
  list-style: none;
  background: #f5f5f5;
  background: var(--light-grey-color-4);
  border-radius: 0.4rem;
}
.breadcrumb, .breadcrumb__link {
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: #858585;
  color: var(--medium-dark-color-3);
}
.breadcrumb__link:link, .breadcrumb__link:visited {
  color: #9147ff;
  color: var(--primary-color);
  -webkit-text-decoration: none;
  text-decoration: none;
}
.breadcrumb__link:hover, .breadcrumb__link:active {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.breadcrumb li:not(:first-child):before {
  content: "/ ";
  padding: 0 0.5rem;
  color: #ccc;
  color: var(--medium-dark-color-5);
}

.burger {
  margin: 0.8rem 1rem;
  padding: 0.9rem 1rem;
  border: 1px solid #333;
  border: 1px solid var(--dark-grey-color);
  background: inherit;
  cursor: pointer;
}
.burger:hover {
  background: #333;
  background: var(--dark-grey-color);
}
.burger__line {
  width: 2.2rem;
  height: 0.2rem;
  background: #fff;
  background: var(--white-color);
}
.burger__line:not(:first-child) {
  margin-top: 0.4rem;
}

.form__label {
  font-weight: 700;
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
  font-size: 1.3rem;
  max-width: 100%;
  line-height: 1.8rem;
}
.form__label--dark-grey-blue-color-2 {
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
}
.form__input {
  height: 3.4rem;
  padding: 0.6rem 1.2rem;
  font-size: 14px;
  border: 2px solid #ddd;
  border: 2px solid var(--light-grey-color-3);
  border-radius: 0.4rem;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: #555;
  color: var(--grey-color);
}
.form__input:focus {
  border-color: #9147ff;
  outline: 0;
}
.form__cell {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.login:link, .login:visited {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  height: 5rem;
  background: #9147ff;
  background: var(--primary-color);
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  color: var(--white-color);
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
}
@media only screen and (max-width: 54em) {
  .login:link, .login:visited {
    margin: 0.75rem 0;
  }
}
.login:hover, .login:active {
  background: #7313ff;
  background: var(--dark-primary-color);
}
.login__icon {
  height: 1.6rem;
  width: 1.6rem;
  fill: #fff;
  fill: var(--white-color);
}

.logo {
  padding: 0 2rem 0 1rem;
  display: block;
}
.logo div {
  height: 5rem;
  width: 5rem;
  background: center/cover url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.menu-list {
  list-style: none;
  display: flex;
}
.menu-list--column {
  flex-direction: column;
  gap: 0.2rem;
}
.menu-list--row {
  flex-direction: row;
}
@media only screen and (max-width: 54em) {
  .menu-list--navbar {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
}
.menu-list__item {
  display: flex;
  position: relative;
}
@media only screen and (max-width: 54em) {
  .menu-list__item--navbar {
    flex-direction: column;
  }
}

.pad {
  padding: 1.5rem;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
}
.pad__header {
  margin: 1rem 0;
  font-size: 1.4rem;
  font-weight: 400;
}
.pad__description {
  padding-bottom: 1rem;
  font-weight: 300;
  font-size: 1.3rem;
}
.pad__description strong {
  font-weight: 700;
}

.search {
  display: flex;
}
.search__input {
  background: #ececec;
  background: var(--light-grey-color-2);
  border-right: none;
  border-radius: 0.4rem 0 0 0.4rem;
  width: 26rem;
}
@media only screen and (max-width: 80em) {
  .search__input {
    width: 17rem;
  }
}
@media only screen and (max-width: 58.125em) {
  .search__input {
    width: 11rem;
  }
}
.search__input:focus {
  outline: none;
  background: #fff;
  background: var(--white-color);
  border: 2px solid #fff;
  border: 2px solid var(--white-color);
}
.search__submit {
  height: 3.4rem;
  width: 4rem;
  border: 2px solid #ddd;
  border: 2px solid var(--light-grey-color-3);
  border-left: 1px solid #ddd;
  border-left: 1px solid var(--light-grey-color-3);
  border-radius: 0 0.4rem 0.4rem 0;
  background: #ececec;
  background: var(--light-grey-color-2);
  cursor: pointer;
}
.search__submit:hover {
  border: 1px solid #adadad;
  border: 1px solid var(--medium-dark-color-2);
}
.search__submit:hover .search__icon {
  fill: #333;
  fill: var(--dark-grey-color);
}
.search__submit:active {
  border: 1px solid #8c8c8c;
  border: 1px solid var(--medium-dark-color-1);
}
.search__icon {
  width: 1.4rem;
  height: 1.4rem;
  fill: #555;
  fill: var(--grey-color);
}

.star {
  background: center/cover url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  width: 1.32rem;
  height: 1.56rem;
  margin-right: 0.4rem;
}

.table {
  border-color: gray;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: #fff;
  background: var(--white-color);
  font-size: 1.3rem;
  line-height: 1.8rem;
  vertical-align: middle;
}
.table th:nth-child(1),
.table td:nth-child(1) {
  text-align: center;
}
.table th:nth-child(2),
.table td:nth-child(2) {
  width: 1%;
  white-space: nowrap;
  display: none;
}
@media only screen and (min-width: 62em) {
  .table th:nth-child(2),
  .table td:nth-child(2) {
    display: table-cell;
  }
}
.table th:nth-child(3),
.table td:nth-child(3) {
  text-align: left;
}
.table th:nth-child(4),
.table td:nth-child(4) {
  text-align: right;
}
.table thead {
  background: #f5f5f5;
  background: var(--light-grey-color-4);
  color: #34373b;
  color: var(--dark-grey-blue-color-2);
}
.table thead th {
  padding: 1.5rem 1rem;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  border-bottom: 1px solid var(--light-grey-color-3);
  color: rgba(0, 0, 0, 0.57);
}
.table tbody td {
  padding: 0.5rem;
  border-top: 1px solid #ddd;
  border-top: 1px solid var(--light-grey-color-3);
}
.table__number, .table__score {
  margin: 1rem 0;
  line-height: 1.7rem;
  font-size: 1.6rem;
}
.table__number {
  font-weight: 700;
}
.table__score {
  font-weight: 400;
}
.table__game-cover img {
  width: 4rem;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.table__stub {
  width: 4rem;
  height: 5.3rem;
  background: #555;
  background: var(--grey-color);
}
.table__game-name a:link,
.table__game-name a:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #9147ff;
  color: var(--primary-color);
}
.table__game-name a:hover,
.table__game-name a:active {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.table__rating {
  margin: 0.5rem 0;
  display: flex;
}
.table__rating span {
  font-size: 1.1rem;
  line-height: 1.5rem;
}
.table__stars {
  display: flex;
  cursor: pointer;
  margin-left: 0.4rem;
}`, "",{"version":3,"sources":["webpack://./src/scss/abstracts/_mixins.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/vendors/_normalize.scss","webpack://./src/scss/base/_reset.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilites.scss","webpack://./src/scss/layout/_aside.scss","webpack://./src/scss/layout/_content.scss","webpack://./src/scss/layout/_dropdown-menu.scss","webpack://./src/scss/layout/_filter.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_main-container.scss","webpack://./src/scss/layout/_main.scss","webpack://./src/scss/layout/_navbar.scss","webpack://./src/scss/layout/_wrapper.scss","webpack://./src/scss/components/_breadcrumb.scss","webpack://./src/scss/components/_burger.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/components/_login.scss","webpack://./src/scss/components/_logo.scss","webpack://./src/scss/components/_menu-list.scss","webpack://./src/scss/components/_pad.scss","webpack://./src/scss/components/_search.scss","webpack://./src/scss/components/_star.scss","webpack://./src/scss/components/_table.scss"],"names":[],"mappings":"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","sourcesContent":["// MEDIA QUERY MANAGER\r\n/*\r\n0 - 767px:      tabletL\r\n767 - 930px:    Tablet portrait\r\n930 - 1280px:   Tablet landscape\r\n1280px + : is where our normal styles apply\r\n\r\n$breakpoint arguement choices:\r\n- tabletL\r\n- laptop\r\n- laptopL\r\n- big-desktop\r\n\r\nORDER: Base + typography > general layout + grid > page layout > components\r\n\r\n1em = 16px\r\n\r\n*/\r\n\r\n@mixin respondMax($breakpoint) {\r\n  @if $breakpoint == mobileS {\r\n    @media only screen and (max-width: 26.25em) {\r\n      @content;\r\n    } //max-width: 420px\r\n  }\r\n  @if $breakpoint == mobileM {\r\n    @media only screen and (max-width: 29.75em) {\r\n      @content;\r\n    } //max-width: 476px\r\n  }\r\n  @if $breakpoint == tabletS {\r\n    @media only screen and (max-width: 33.125em) {\r\n      @content;\r\n    } //max-width: 530px\r\n  }\r\n  @if $breakpoint == tabletM {\r\n    @media only screen and (max-width: 37.5em) {\r\n      @content;\r\n    } //max-width: 600px\r\n  }\r\n  @if $breakpoint == tabletL {\r\n    @media only screen and (max-width: 47.9375em) {\r\n      @content;\r\n    } //max-width: 767px\r\n  }\r\n  @if $breakpoint == laptopXS {\r\n    @media only screen and (max-width: 54em) {\r\n      @content;\r\n    } //max-width: 864px\r\n  }\r\n  @if $breakpoint == laptopS {\r\n    @media only screen and (max-width: 56em) and (max-height: 26.5625em) and (orientation: landscape) {\r\n      @content;\r\n    } //max-width: 930px, max-height: 425px\r\n  }\r\n  @if $breakpoint == laptop {\r\n    @media only screen and (max-width: 58.125em) {\r\n      @content;\r\n    } //max-width: 930px\r\n  }\r\n  @if $breakpoint == laptopL {\r\n    @media only screen and (max-width: 80em) {\r\n      @content;\r\n    } //max-width: 1280px\r\n  }\r\n}\r\n\r\n@mixin respondMinAndMax($breakpoint) {\r\n  @if $breakpoint == mobileS {\r\n    @media only screen and (max-width: 56em) and (min-width: 26.625em) {\r\n      @content;\r\n    } //426px < x < 896px\r\n  }\r\n  @if $breakpoint == mobileM {\r\n    @media (max-width: 61.9375em) and (min-width: 48em) {\r\n      @content;\r\n    } //991px < x < 768px\r\n  }\r\n  @if $breakpoint == laptopS {\r\n    @media only screen and (max-width: 63.9375em) and (min-width: 56.0625em) {\r\n      @content;\r\n    } //897px < x < 1023px\r\n  }\r\n  @if $breakpoint == laptopM {\r\n    @media (max-width: 74.9375em) and (min-width: 62em) {\r\n      @content;\r\n    } //992px < x < 1199px\r\n  }\r\n}\r\n\r\n@mixin respondMin($breakpoint) {\r\n  @if $breakpoint == mobileM {\r\n    @media only screen and (min-width: 25em) {\r\n      @content;\r\n    } //min-width: 400px\r\n  }\r\n  @if $breakpoint == mobileL {\r\n    @media only screen and (min-width: 26.25em) {\r\n      @content;\r\n    } //min-width: 420px\r\n  }\r\n  @if $breakpoint == tablet {\r\n    @media only screen and (min-width: 34.375em) {\r\n      @content;\r\n    } //min-width: 550px\r\n  }\r\n  @if $breakpoint == tabletM {\r\n    @media only screen and (min-width: 48.0625em) {\r\n      @content;\r\n    } //min-width: 769px\r\n  }\r\n  @if $breakpoint == laptopXS {\r\n    @media only screen and (min-width: 55.625em) {\r\n      @content;\r\n    } //min-width: 890px\r\n  }\r\n  @if $breakpoint == laptopS {\r\n    @media only screen and (min-width: 62em) {\r\n      @content;\r\n    } //min-width: 992px\r\n  }\r\n  @if $breakpoint == laptopM {\r\n    @media only screen and (min-width: 64.0625em) {\r\n      @content;\r\n    } //min-width: 1025px\r\n  }\r\n  @if $breakpoint == laptopXM {\r\n    @media only screen and (min-width: 75em) {\r\n      @content;\r\n    } //min-width: 1200px\r\n  }\r\n  @if $breakpoint == laptopL {\r\n    @media only screen and (min-width: 80em) {\r\n      @content;\r\n    } //min-width: 1280px\r\n  }\r\n  @if $breakpoint == laptopXL {\r\n    @media only screen and (min-width: 85.4375em) {\r\n      @content;\r\n    } //min-width: 1367px\r\n  }\r\n}\r\n",":root {\r\n  --dark-grey-blue-color: #323a45;\r\n  --dark-grey-blue-color-2: #34373b;\r\n  --dark-grey-blue-color-3: #333232;\r\n  --dark-grey-color: #333;\r\n  --dark-grey-color-2: #232930;\r\n  --grey-color: #555;\r\n  --medium-dark-color-1: #8c8c8c;\r\n  --medium-dark-color-2: #adadad;\r\n  --medium-dark-color-3: #858585;\r\n  --medium-dark-color-4: #808080;\r\n  --medium-dark-color-5: #ccc;\r\n  --light-grey-color-1: #fafafa;\r\n  --light-grey-color-2: #ececec;\r\n  --light-grey-color-3: #ddd;\r\n  --light-grey-color-4: #f5f5f5;\r\n  --white-color: #fff;\r\n  --primary-color: #9147ff;\r\n  --dark-primary-color: #7313ff;\r\n\r\n  --width-page: 115.2rem;\r\n}\r\n","/*\n0 - 767px:      tabletL\n767 - 930px:    Tablet portrait\n930 - 1280px:   Tablet landscape\n1280px + : is where our normal styles apply\n\n$breakpoint arguement choices:\n- tabletL\n- laptop\n- laptopL\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n\n*/\n:root {\n  --dark-grey-blue-color: #323a45;\n  --dark-grey-blue-color-2: #34373b;\n  --dark-grey-blue-color-3: #333232;\n  --dark-grey-color: #333;\n  --dark-grey-color-2: #232930;\n  --grey-color: #555;\n  --medium-dark-color-1: #8c8c8c;\n  --medium-dark-color-2: #adadad;\n  --medium-dark-color-3: #858585;\n  --medium-dark-color-4: #808080;\n  --medium-dark-color-5: #ccc;\n  --light-grey-color-1: #fafafa;\n  --light-grey-color-2: #ececec;\n  --light-grey-color-3: #ddd;\n  --light-grey-color-4: #f5f5f5;\n  --white-color: #fff;\n  --primary-color: #9147ff;\n  --dark-primary-color: #7313ff;\n  --width-page: 115.2rem;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n.text--purple {\n  color: var(--primary-color) !important;\n}\n.text--muted {\n  color: var(--medium-dark-color-3) !important;\n}\n\n.mar-md-top {\n  margin-top: 1rem;\n}\n\n.mar-lg-bottom {\n  margin-bottom: 2rem;\n}\n\n.mg-sm-left {\n  margin-left: 0.5rem;\n}\n\n.aside {\n  line-height: 1.85rem;\n}\n.aside__header {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  color: var(--dark-grey-blue-color-2);\n  font-weight: 400;\n  line-height: 1.76rem;\n  margin: 1rem 0;\n}\n.aside__nav {\n  display: flex;\n  flex-direction: column;\n}\n.aside__link:link, .aside__link:visited {\n  text-decoration: none;\n  color: var(--dark-grey-blue-color-3);\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  font-size: 1.3rem;\n  line-height: 1.85rem;\n  display: block;\n  padding: 1rem 1.5rem;\n}\n.aside__link:hover, .aside__link:active {\n  background: var(--light-grey-color-2);\n}\n.aside__link--active:link, .aside__link--active:visited {\n  color: var(--white-color);\n  background: var(--primary-color);\n}\n.aside hr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-top: 1px solid var(--light-grey-color-2);\n}\n\n.content {\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  display: grid;\n  grid-template-rows: repeat(4, auto) 1fr;\n}\n.content__header {\n  margin: 2.5rem 0;\n  font-size: 2.4rem;\n  font-weight: 400;\n  color: var(--dark-grey-blue-color-2);\n}\n.content__table {\n  align-self: start;\n}\n\n.dropdown-menu {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n  background: var(--primary-color);\n}\n.dropdown-menu--hide {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n@media only screen and (max-width: 54em) {\n  .dropdown-menu {\n    position: relative;\n    display: block;\n    top: auto;\n    left: auto;\n    background: inherit;\n  }\n  .dropdown-menu--hide {\n    display: none;\n  }\n}\n.dropdown-menu__content-block {\n  padding: 0.5rem 0;\n}\n.dropdown-menu__link:link, .dropdown-menu__link:visited {\n  text-decoration: none;\n  color: var(--white-color);\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  font-size: 1.2rem;\n  line-height: 1.7rem;\n  white-space: nowrap;\n  padding: 0.9rem 2rem;\n  width: 100%;\n  vertical-align: middle;\n}\n@media only screen and (max-width: 54em) {\n  .dropdown-menu__link:link, .dropdown-menu__link:visited {\n    padding: 0.5rem 1.5rem 0.5rem 2.5rem;\n  }\n}\n.dropdown-menu__link:hover, .dropdown-menu__link:active {\n  background: var(--dark-primary-color);\n}\n.dropdown-menu__icon {\n  fill: var(--white-color);\n  width: 1.2rem;\n  height: 1.3rem;\n  vertical-align: middle;\n}\n.dropdown-menu__separator {\n  width: 100%;\n  height: 0.1rem;\n  background: var(--white-color);\n  margin: 0.3rem 0;\n}\n@media only screen and (max-width: 54em) {\n  .dropdown-menu__separator {\n    background: inherit;\n  }\n}\n\n.filter {\n  display: grid;\n  grid-template: repeat(3, 1fr)/auto;\n  column-gap: 2rem;\n}\n@media only screen and (min-width: 62em) {\n  .filter {\n    grid-template: auto/2fr 1fr 1fr;\n  }\n}\n\n.footer {\n  margin: 1.5rem;\n}\n.footer__link:link, .footer__link:visited, .footer__container {\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  font-size: 1.3rem;\n  line-height: 1.85rem;\n}\n.footer__link:link, .footer__link:visited {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.footer__container {\n  color: var(--medium-dark-color-3);\n  text-align: center;\n}\n@media only screen and (min-width: 62em) {\n  .footer__container {\n    text-align: start;\n  }\n}\n.footer__mobile-btns, .footer__separator {\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (min-width: 62em) {\n  .footer__mobile-btns, .footer__separator {\n    display: none;\n  }\n}\n.footer__mobile-btn:link, .footer__mobile-btn:visited {\n  font-weight: 600;\n  padding: 1.3rem 4rem;\n  font-size: 1.7rem;\n  line-height: 1.3333333;\n  text-decoration: none;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  color: var(--primary-color);\n}\n.footer__mobile-btn:hover, .footer__mobile-btn:active {\n  color: var(--dark-grey-color);\n}\n\n.header {\n  max-width: var(--width-page);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-rows: 5rem;\n}\n@media only screen and (max-width: 54em) {\n  .header {\n    grid-template-columns: auto 1fr;\n    grid-template-rows: 5rem auto;\n  }\n}\n.header__burder {\n  display: none;\n  justify-self: end;\n}\n@media only screen and (max-width: 54em) {\n  .header__burder {\n    display: block;\n  }\n}\n\n.main-container {\n  max-width: var(--width-page);\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  display: grid;\n  grid-template: auto auto/1fr;\n  column-gap: 2rem;\n}\n@media only screen and (min-width: 62em) {\n  .main-container {\n    grid-template: 1fr auto/1fr 26.55rem;\n  }\n}\n\n.main {\n  display: grid;\n  column-gap: 2rem;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto;\n  padding: 0 1.5rem;\n}\n@media only screen and (min-width: 62em) {\n  .main {\n    grid-template-columns: 1fr 28.55rem;\n    grid-template-rows: 1fr;\n  }\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 2rem;\n  height: 100%;\n}\n@media only screen and (max-width: 54em) {\n  .navbar {\n    margin-top: 0;\n    transition: all 1s;\n    padding: 1rem;\n  }\n  .navbar--collapsed {\n    margin-top: -100%;\n  }\n}\n.navbar__link:link, .navbar__link:visited {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2rem;\n  color: var(--white-color);\n  text-decoration: none;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n@media only screen and (max-width: 54em) {\n  .navbar__link:link, .navbar__link:visited {\n    padding: 1rem 1.5rem;\n    height: 4rem;\n  }\n}\n.navbar__link:hover, .navbar__link:active {\n  color: var(--dark-primary-color);\n}\n.navbar__link:hover .navbar__icon,\n.navbar__link:hover .navbar__caret, .navbar__link:active .navbar__icon,\n.navbar__link:active .navbar__caret {\n  fill: var(--dark-primary-color);\n}\n.navbar__link--primary {\n  background: var(--primary-color);\n}\n.navbar__link--primary:hover, .navbar__link--primary:active {\n  color: var(--white-color);\n}\n.navbar__link--primary:hover .navbar__icon,\n.navbar__link--primary:hover .navbar__caret, .navbar__link--primary:active .navbar__icon,\n.navbar__link--primary:active .navbar__caret {\n  fill: var(--white-color);\n}\n.navbar__content {\n  display: flex;\n  gap: 0.4rem;\n}\n.navbar__icon, .navbar__caret {\n  height: 1.3rem;\n  fill: var(--white-color);\n}\n.navbar__icon--games {\n  width: 1.5rem;\n}\n.navbar__icon--database {\n  width: 1.5rem;\n}\n.navbar__icon--community {\n  width: 1.5rem;\n}\n.navbar__icon--help {\n  width: 1.5rem;\n}\n.navbar__caret {\n  width: 0.7rem;\n}\n@media only screen and (max-width: 54em) {\n  .navbar__container {\n    grid-column: 1/-1;\n    grid-row: 3;\n    border-top: 1px solid var(--dark-grey-color-2);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    overflow: hidden;\n  }\n}\n.navbar__search {\n  align-self: center;\n}\n@media only screen and (max-width: 54em) {\n  .navbar__search {\n    align-self: start;\n  }\n}\n\n.wrapper--dark-grey {\n  background: var(--dark-grey-blue-color);\n}\n.wrapper--light-grey {\n  background: var(--light-grey-color-1);\n}\n\n.breadcrumb {\n  padding: 0.8rem 1.5rem;\n  list-style: none;\n  background: var(--light-grey-color-4);\n  border-radius: 0.4rem;\n}\n.breadcrumb, .breadcrumb__link {\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n  color: var(--medium-dark-color-3);\n}\n.breadcrumb__link:link, .breadcrumb__link:visited {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.breadcrumb__link:hover, .breadcrumb__link:active {\n  text-decoration: underline;\n}\n.breadcrumb li:not(:first-child):before {\n  content: \"/ \";\n  padding: 0 0.5rem;\n  color: var(--medium-dark-color-5);\n}\n\n.burger {\n  margin: 0.8rem 1rem;\n  padding: 0.9rem 1rem;\n  border: 1px solid var(--dark-grey-color);\n  background: inherit;\n  cursor: pointer;\n}\n.burger:hover {\n  background: var(--dark-grey-color);\n}\n.burger__line {\n  width: 2.2rem;\n  height: 0.2rem;\n  background: var(--white-color);\n}\n.burger__line:not(:first-child) {\n  margin-top: 0.4rem;\n}\n\n.form__label {\n  font-weight: 700;\n  color: var(--dark-grey-blue-color-2);\n  font-size: 1.3rem;\n  max-width: 100%;\n  line-height: 1.8rem;\n}\n.form__label--dark-grey-blue-color-2 {\n  color: var(--dark-grey-blue-color-2);\n}\n.form__input {\n  height: 3.4rem;\n  padding: 0.6rem 1.2rem;\n  font-size: 14px;\n  border: 2px solid var(--light-grey-color-3);\n  border-radius: 0.4rem;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  color: var(--grey-color);\n}\n.form__input:focus {\n  border-color: #9147ff;\n  outline: 0;\n}\n.form__cell {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.login:link, .login:visited {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0 1.5rem;\n  height: 5rem;\n  background: var(--primary-color);\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2rem;\n  color: var(--white-color);\n  text-decoration: none;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 54em) {\n  .login:link, .login:visited {\n    margin: 0.75rem 0;\n  }\n}\n.login:hover, .login:active {\n  background: var(--dark-primary-color);\n}\n.login__icon {\n  height: 1.6rem;\n  width: 1.6rem;\n  fill: var(--white-color);\n}\n\n.logo {\n  padding: 0 2rem 0 1rem;\n  display: block;\n}\n.logo div {\n  height: 5rem;\n  width: 5rem;\n  background: center/cover url(\"../img/logo-72x72.png\");\n}\n\n.menu-list {\n  list-style: none;\n  display: flex;\n}\n.menu-list--column {\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.menu-list--row {\n  flex-direction: row;\n}\n@media only screen and (max-width: 54em) {\n  .menu-list--navbar {\n    flex-direction: column;\n    align-items: start;\n    gap: 1rem;\n  }\n}\n.menu-list__item {\n  display: flex;\n  position: relative;\n}\n@media only screen and (max-width: 54em) {\n  .menu-list__item--navbar {\n    flex-direction: column;\n  }\n}\n\n.pad {\n  padding: 1.5rem;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  color: var(--dark-grey-blue-color-2);\n}\n.pad__header {\n  margin: 1rem 0;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n.pad__description {\n  padding-bottom: 1rem;\n  font-weight: 300;\n  font-size: 1.3rem;\n}\n.pad__description strong {\n  font-weight: 700;\n}\n\n.search {\n  display: flex;\n}\n.search__input {\n  background: var(--light-grey-color-2);\n  border-right: none;\n  border-radius: 0.4rem 0 0 0.4rem;\n  width: 26rem;\n}\n@media only screen and (max-width: 80em) {\n  .search__input {\n    width: 17rem;\n  }\n}\n@media only screen and (max-width: 58.125em) {\n  .search__input {\n    width: 11rem;\n  }\n}\n.search__input:focus {\n  outline: none;\n  background: var(--white-color);\n  border: 2px solid var(--white-color);\n}\n.search__submit {\n  height: 3.4rem;\n  width: 4rem;\n  border: 2px solid var(--light-grey-color-3);\n  border-left: 1px solid var(--light-grey-color-3);\n  border-radius: 0 0.4rem 0.4rem 0;\n  background: var(--light-grey-color-2);\n  cursor: pointer;\n}\n.search__submit:hover {\n  border: 1px solid var(--medium-dark-color-2);\n}\n.search__submit:hover .search__icon {\n  fill: var(--dark-grey-color);\n}\n.search__submit:active {\n  border: 1px solid var(--medium-dark-color-1);\n}\n.search__icon {\n  width: 1.4rem;\n  height: 1.4rem;\n  fill: var(--grey-color);\n}\n\n.star {\n  background: center/cover url(\"/src/img/star.svg\");\n  width: 1.32rem;\n  height: 1.56rem;\n  margin-right: 0.4rem;\n}\n\n.table {\n  border-color: gray;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  background: var(--white-color);\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n  vertical-align: middle;\n}\n.table th:nth-child(1),\n.table td:nth-child(1) {\n  text-align: center;\n}\n.table th:nth-child(2),\n.table td:nth-child(2) {\n  width: 1%;\n  white-space: nowrap;\n  display: none;\n}\n@media only screen and (min-width: 62em) {\n  .table th:nth-child(2),\n  .table td:nth-child(2) {\n    display: table-cell;\n  }\n}\n.table th:nth-child(3),\n.table td:nth-child(3) {\n  text-align: left;\n}\n.table th:nth-child(4),\n.table td:nth-child(4) {\n  text-align: right;\n}\n.table thead {\n  background: var(--light-grey-color-4);\n  color: var(--dark-grey-blue-color-2);\n}\n.table thead th {\n  padding: 1.5rem 1rem;\n  font-weight: 400;\n  border-bottom: 1px solid var(--light-grey-color-3);\n  color: rgba(0, 0, 0, 0.57);\n}\n.table tbody td {\n  padding: 0.5rem;\n  border-top: 1px solid var(--light-grey-color-3);\n}\n.table__number, .table__score {\n  margin: 1rem 0;\n  line-height: 1.7rem;\n  font-size: 1.6rem;\n}\n.table__number {\n  font-weight: 700;\n}\n.table__score {\n  font-weight: 400;\n}\n.table__game-cover img {\n  width: 4rem;\n  object-fit: cover;\n  display: block;\n}\n.table__stub {\n  width: 4rem;\n  height: 5.3rem;\n  background: var(--grey-color);\n}\n.table__game-name a:link,\n.table__game-name a:visited {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n.table__game-name a:hover,\n.table__game-name a:active {\n  text-decoration: underline;\n}\n.table__rating {\n  margin: 0.5rem 0;\n  display: flex;\n}\n.table__rating span {\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n}\n.table__stars {\n  display: flex;\n  cursor: pointer;\n  margin-left: 0.4rem;\n}","body {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","@import '../vendors/normalize';\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n}\r\n","html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n.text {\r\n  &--purple {\r\n    color: var(--primary-color) !important;\r\n  }\r\n\r\n  &--muted {\r\n    color: var(--medium-dark-color-3) !important;\r\n  }\r\n}\r\n",".mar-md-top {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.mar-lg-bottom {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.mg-sm-left {\r\n  margin-left: 0.5rem;\r\n}\r\n",".aside {\r\n  line-height: 1.85rem;\r\n\r\n  &__header {\r\n    font-size: 1.6rem;\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    color: var(--dark-grey-blue-color-2);\r\n    font-weight: 400;\r\n    line-height: 1.76rem;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  &__nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  &__link:link,\r\n  &__link:visited {\r\n    text-decoration: none;\r\n    color: var(--dark-grey-blue-color-3);\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    font-size: 1.3rem;\r\n    line-height: 1.85rem;\r\n    display: block;\r\n    padding: 1rem 1.5rem;\r\n  }\r\n\r\n  &__link:hover,\r\n  &__link:active {\r\n    background: var(--light-grey-color-2);\r\n  }\r\n\r\n  &__link--active:link,\r\n  &__link--active:visited {\r\n    color: var(--white-color);\r\n    background: var(--primary-color);\r\n  }\r\n\r\n  hr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-top: 1px solid var(--light-grey-color-2);\r\n  }\r\n}\r\n",".content {\r\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto) 1fr;\r\n\r\n  &__header {\r\n    margin: 2.5rem 0;\r\n    font-size: 2.4rem;\r\n    font-weight: 400;\r\n    color: var(--dark-grey-blue-color-2);\r\n  }\r\n\r\n  &__table {\r\n    align-self: start;\r\n  }\r\n}\r\n",".dropdown-menu {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 100%;\r\n  width: 15rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  background: var(--primary-color);\r\n\r\n  &--hide {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    pointer-events: none;\r\n  }\r\n\r\n  @include respondMax(laptopXS) {\r\n    position: relative;\r\n    display: block;\r\n    top: auto;\r\n    left: auto;\r\n    background: inherit;\r\n\r\n    &--hide {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__content-block {\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  &__link:link,\r\n  &__link:visited {\r\n    text-decoration: none;\r\n    color: var(--white-color);\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    font-size: 1.2rem;\r\n    // font-weight: 400;\r\n    line-height: 1.7rem;\r\n    white-space: nowrap;\r\n    padding: 0.9rem 2rem;\r\n    width: 100%;\r\n    vertical-align: middle;\r\n\r\n    @include respondMax(laptopXS) {\r\n      padding: 0.5rem 1.5rem 0.5rem 2.5rem;\r\n    }\r\n  }\r\n\r\n  &__link:hover,\r\n  &__link:active {\r\n    background: var(--dark-primary-color);\r\n  }\r\n\r\n  &__icon {\r\n    fill: var(--white-color);\r\n    width: 1.2rem;\r\n    height: 1.3rem;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  &__separator {\r\n    width: 100%;\r\n    height: 0.1rem;\r\n    background: var(--white-color);\r\n    margin: 0.3rem 0;\r\n\r\n    @include respondMax(laptopXS) {\r\n      background: inherit;\r\n    }\r\n  }\r\n}\r\n",".filter {\r\n  display: grid;\r\n  grid-template: repeat(3, 1fr) / auto;\r\n  column-gap: 2rem;\r\n\r\n  @include respondMin(laptopS) {\r\n    grid-template: auto / 2fr 1fr 1fr;\r\n  }\r\n}\r\n",".footer {\r\n  margin: 1.5rem;\r\n\r\n  &__link:link,\r\n  &__link:visited,\r\n  &__container {\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    font-size: 1.3rem;\r\n    line-height: 1.85rem;\r\n  }\r\n\r\n  &__link:link,\r\n  &__link:visited {\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n  }\r\n\r\n  &__container {\r\n    color: var(--medium-dark-color-3);\r\n    text-align: center;\r\n\r\n    @include respondMin(laptopS) {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__mobile-btns,\r\n  &__separator {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    @include respondMin(laptopS) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__mobile-btn:link,\r\n  &__mobile-btn:visited {\r\n    font-weight: 600;\r\n    padding: 1.3rem 4rem;\r\n    font-size: 1.7rem;\r\n    line-height: 1.3333333;\r\n    text-decoration: none;\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    color: var(--primary-color);\r\n  }\r\n\r\n  &__mobile-btn:hover,\r\n  &__mobile-btn:active {\r\n    color: var(--dark-grey-color);\r\n  }\r\n}\r\n",".header {\r\n  max-width: var(--width-page);\r\n  margin: 0 auto;\r\n\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: 5rem;\r\n\r\n  @include respondMax(laptopXS) {\r\n    grid-template-columns: auto 1fr;\r\n    grid-template-rows: 5rem auto;\r\n  }\r\n\r\n  &__burder {\r\n    display: none;\r\n    justify-self: end;\r\n\r\n    @include respondMax(laptopXS) {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n",".main-container {\r\n  max-width: var(--width-page);\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  padding: 0 1.5rem;\r\n  display: grid;\r\n  grid-template: auto auto / 1fr;\r\n  column-gap: 2rem;\r\n\r\n  @include respondMin(laptopS) {\r\n    grid-template: 1fr auto / 1fr 26.55rem;\r\n  }\r\n}\r\n",".main {\r\n  display: grid;\r\n  column-gap: 2rem;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto auto;\r\n\r\n  @include respondMin(laptopS) {\r\n    grid-template-columns: 1fr 28.55rem;\r\n    grid-template-rows: 1fr;\r\n  }\r\n\r\n  padding: 0 1.5rem;\r\n}\r\n",".navbar {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  column-gap: 2rem;\r\n  height: 100%;\r\n\r\n  @include respondMax(laptopXS) {\r\n    margin-top: 0;\r\n    transition: all 1s;\r\n    padding: 1rem;\r\n\r\n    &--collapsed {\r\n      margin-top: -100%;\r\n    }\r\n  }\r\n\r\n  &__link:link,\r\n  &__link:visited {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.2rem;\r\n    color: var(--white-color);\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 1.5rem;\r\n\r\n    @include respondMax(laptopXS) {\r\n      padding: 1rem 1.5rem;\r\n      height: 4rem;\r\n    }\r\n  }\r\n\r\n  &__link:hover,\r\n  &__link:active {\r\n    color: var(--dark-primary-color);\r\n\r\n    .navbar__icon,\r\n    .navbar__caret {\r\n      fill: var(--dark-primary-color);\r\n    }\r\n  }\r\n\r\n  &__link--primary {\r\n    background: var(--primary-color);\r\n\r\n    &:hover,\r\n    &:active {\r\n      color: var(--white-color);\r\n\r\n      .navbar__icon,\r\n      .navbar__caret {\r\n        fill: var(--white-color);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    gap: 0.4rem;\r\n  }\r\n\r\n  &__icon,\r\n  &__caret {\r\n    height: 1.3rem;\r\n    fill: var(--white-color);\r\n  }\r\n\r\n  &__icon {\r\n    &--games {\r\n      width: 1.5rem;\r\n    }\r\n\r\n    &--database {\r\n      width: 1.5rem;\r\n    }\r\n\r\n    &--community {\r\n      width: 1.5rem;\r\n    }\r\n\r\n    &--help {\r\n      width: 1.5rem;\r\n    }\r\n  }\r\n\r\n  &__caret {\r\n    width: 0.7rem;\r\n  }\r\n\r\n  &__container {\r\n    @include respondMax(laptopXS) {\r\n      grid-column: 1 / -1;\r\n      grid-row: 3;\r\n      border-top: 1px solid var(--dark-grey-color-2);\r\n      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n      overflow: hidden;\r\n    }\r\n  }\r\n\r\n  &__search {\r\n    align-self: center;\r\n\r\n    @include respondMax(laptopXS) {\r\n      align-self: start;\r\n    }\r\n  }\r\n}\r\n",".wrapper {\r\n  &--dark-grey {\r\n    background: var(--dark-grey-blue-color);\r\n  }\r\n\r\n  &--light-grey {\r\n    background: var(--light-grey-color-1);\r\n  }\r\n}\r\n",".breadcrumb {\r\n  padding: 0.8rem 1.5rem;\r\n  list-style: none;\r\n  background: var(--light-grey-color-4);\r\n  border-radius: 0.4rem;\r\n\r\n  &,\r\n  &__link {\r\n    font-size: 1.3rem;\r\n    line-height: 1.8rem;\r\n    color: var(--medium-dark-color-3);\r\n  }\r\n\r\n  &__link:link,\r\n  &__link:visited {\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n  }\r\n\r\n  &__link:hover,\r\n  &__link:active {\r\n    text-decoration: underline;\r\n  }\r\n\r\n  li:not(:first-child):before {\r\n    content: '/ ';\r\n    padding: 0 0.5rem;\r\n    color: var(--medium-dark-color-5);\r\n  }\r\n}\r\n",".burger {\r\n  margin: 0.8rem 1rem;\r\n  padding: 0.9rem 1rem;\r\n  border: 1px solid var(--dark-grey-color);\r\n  background: inherit;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background: var(--dark-grey-color);\r\n  }\r\n\r\n  &__line {\r\n    width: 2.2rem;\r\n    height: 0.2rem;\r\n    background: var(--white-color);\r\n\r\n    &:not(:first-child) {\r\n      margin-top: 0.4rem;\r\n    }\r\n  }\r\n}\r\n",".form {\r\n  &__label {\r\n    font-weight: 700;\r\n    color: var(--dark-grey-blue-color-2);\r\n    font-size: 1.3rem;\r\n    max-width: 100%;\r\n    line-height: 1.8rem;\r\n\r\n    &--dark-grey-blue-color-2 {\r\n      color: var(--dark-grey-blue-color-2);\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    height: 3.4rem;\r\n    padding: 0.6rem 1.2rem;\r\n    font-size: 14px;\r\n    border: 2px solid var(--light-grey-color-3);\r\n    border-radius: 0.4rem;\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n    color: var(--grey-color);\r\n\r\n    &:focus {\r\n      border-color: #9147ff;\r\n      outline: 0;\r\n    }\r\n  }\r\n\r\n  &__cell {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n  }\r\n}\r\n",".login {\r\n  &:link,\r\n  &:visited {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0 1.5rem;\r\n    height: 5rem;\r\n\r\n    background: var(--primary-color);\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.2rem;\r\n    color: var(--white-color);\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n\r\n    @include respondMax(laptopXS) {\r\n      margin: 0.75rem 0;\r\n    }\r\n  }\r\n\r\n  &:hover,\r\n  &:active {\r\n    background: var(--dark-primary-color);\r\n  }\r\n\r\n  &__icon {\r\n    height: 1.6rem;\r\n    width: 1.6rem;\r\n    fill: var(--white-color);\r\n  }\r\n}\r\n",".logo {\r\n  padding: 0 2rem 0 1rem;\r\n  display: block;\r\n\r\n  div {\r\n    height: 5rem;\r\n    width: 5rem;\r\n    background: center/cover url('../img/logo-72x72.png');\r\n  }\r\n}\r\n",".menu-list {\r\n  list-style: none;\r\n  display: flex;\r\n\r\n  &--column {\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n  }\r\n\r\n  &--row {\r\n    flex-direction: row;\r\n  }\r\n\r\n  &--navbar {\r\n    @include respondMax(laptopXS) {\r\n      flex-direction: column;\r\n      align-items: start;\r\n      gap: 1rem;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    display: flex;\r\n    position: relative;\r\n\r\n    &--navbar {\r\n      @include respondMax(laptopXS) {\r\n        flex-direction: column;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".pad {\r\n  padding: 1.5rem;\r\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n  color: var(--dark-grey-blue-color-2);\r\n\r\n  &__header {\r\n    margin: 1rem 0;\r\n    font-size: 1.4rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n  &__description {\r\n    padding-bottom: 1rem;\r\n    font-weight: 300;\r\n    font-size: 1.3rem;\r\n\r\n    strong {\r\n      font-weight: 700;\r\n    }\r\n  }\r\n}\r\n",".search {\r\n  display: flex;\r\n\r\n  &__input {\r\n    background: var(--light-grey-color-2);\r\n    border-right: none;\r\n    border-radius: 0.4rem 0 0 0.4rem;\r\n    width: 26rem;\r\n\r\n    @include respondMax(laptopL) {\r\n      width: 17rem;\r\n    }\r\n\r\n    @include respondMax(laptop) {\r\n      width: 11rem;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n      background: var(--white-color);\r\n      border: 2px solid var(--white-color);\r\n    }\r\n  }\r\n\r\n  &__submit {\r\n    height: 3.4rem;\r\n    width: 4rem;\r\n    border: 2px solid var(--light-grey-color-3);\r\n    border-left: 1px solid var(--light-grey-color-3);\r\n    border-radius: 0 0.4rem 0.4rem 0;\r\n    background: var(--light-grey-color-2);\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n      border: 1px solid var(--medium-dark-color-2);\r\n    }\r\n\r\n    &:hover .search__icon {\r\n      fill: var(--dark-grey-color);\r\n    }\r\n\r\n    &:active {\r\n      border: 1px solid var(--medium-dark-color-1);\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    width: 1.4rem;\r\n    height: 1.4rem;\r\n    fill: var(--grey-color);\r\n  }\r\n}\r\n",".star {\r\n  background: center/cover url('/src/img/star.svg');\r\n  width: 1.32rem;\r\n  height: 1.56rem;\r\n  margin-right: 0.4rem;\r\n  // background-color: var(--dark-grey);\r\n}\r\n",".table {\r\n  border-color: gray;\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  background: var(--white-color);\r\n  font-size: 1.3rem;\r\n  line-height: 1.8rem;\r\n  vertical-align: middle;\r\n\r\n  th,\r\n  td {\r\n    &:nth-child(1) {\r\n      text-align: center;\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      width: 1%;\r\n      white-space: nowrap;\r\n      display: none;\r\n\r\n      @include respondMin(laptopS) {\r\n        display: table-cell;\r\n      }\r\n    }\r\n\r\n    &:nth-child(3) {\r\n      text-align: left;\r\n    }\r\n\r\n    &:nth-child(4) {\r\n      text-align: right;\r\n    }\r\n  }\r\n\r\n  thead {\r\n    background: var(--light-grey-color-4);\r\n    color: var(--dark-grey-blue-color-2);\r\n\r\n    th {\r\n      padding: 1.5rem 1rem;\r\n      font-weight: 400;\r\n      border-bottom: 1px solid var(--light-grey-color-3);\r\n      color: rgba(0, 0, 0, 0.57);\r\n    }\r\n  }\r\n\r\n  tbody {\r\n    td {\r\n      padding: 0.5rem;\r\n      border-top: 1px solid var(--light-grey-color-3);\r\n    }\r\n  }\r\n\r\n  &__number,\r\n  &__score {\r\n    margin: 1rem 0;\r\n    line-height: 1.7rem;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  &__number {\r\n    font-weight: 700;\r\n  }\r\n\r\n  &__score {\r\n    font-weight: 400;\r\n  }\r\n\r\n  &__game-cover {\r\n    img {\r\n      width: 4rem;\r\n      object-fit: cover;\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  &__stub {\r\n    width: 4rem;\r\n    height: 5.3rem;\r\n    background: var(--grey-color);\r\n  }\r\n\r\n  &__game-name {\r\n    a:link,\r\n    a:visited {\r\n      text-decoration: none;\r\n      color: var(--primary-color);\r\n    }\r\n\r\n    a:hover,\r\n    a:active {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n\r\n  &__rating {\r\n    margin: 0.5rem 0;\r\n    display: flex;\r\n\r\n    span {\r\n      font-size: 1.1rem;\r\n      line-height: 1.5rem;\r\n    }\r\n  }\r\n\r\n  &__stars {\r\n    display: flex;\r\n    cursor: pointer;\r\n    margin-left: 0.4rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/header-sprite.svg */ "./src/img/header-sprite.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/dropdown-menu-sprite.svg */ "./src/img/dropdown-menu-sprite.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-search" });
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-gamepad" });
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-caret-down" });
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-binoculars" });
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-thumbs-o-up" });
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-search-plus" });
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-hourglass-3" });
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-truck" });
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-line-chart" });
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-plus-circle" });
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-database" });
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-display" });
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-clock2" });
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-dropbox" });
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-group" });
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-pie-chart" });
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-discord" });
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-question-circle" });
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-information-solid" });
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-mic" });
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___, { hash: "#icon-envelope-o" });
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#icon-twitch" });
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@500&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n\r\n    <title>Top Games</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"wrapper--dark-grey\">\r\n      <header id=\"header\" class=\"header\">\r\n        <a href=\"#\" class=\"logo\">\r\n          <div></div>\r\n        </a>\r\n\r\n        <div class=\"header__burder\">\r\n          <button class=\"burger\" id=\"navbar-burger-btn\">\r\n            <div class=\"burger__line\"></div>\r\n            <div class=\"burger__line\"></div>\r\n            <div class=\"burger__line\"></div>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"navbar__container\">\r\n          <nav id=\"navbar\" class=\"navbar navbar--collapsed\">\r\n            <form id=\"search\" class=\"navbar__search search\" action=\"\">\r\n              <input\r\n                class=\"search__input form__input\"\r\n                type=\"search\"\r\n                placeholder=\"Search\"\r\n                name=\"search\"\r\n                id=\"search-input\"\r\n              />\r\n              <button class=\"search__submit\" type=\"submit\">\r\n                <svg class=\"search__icon\">\r\n                  <use\r\n                    xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n                  ></use>\r\n                </svg>\r\n              </button>\r\n            </form>\r\n\r\n            <ul class=\"menu-list menu-list--navbar menu-list--row\">\r\n              <li class=\"menu-list__item menu-list__item--navbar\">\r\n                <a\r\n                  class=\"navbar__link menu-list__link--poppins\"\r\n                  id=\"games-navbar\"\r\n                  data-section=\"games\"\r\n                  href=\"#\"\r\n                >\r\n                  <div class=\"navbar__content\">\r\n                    <svg class=\"navbar__icon navbar__icon--games\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                    <span class=\"navbar__title\">games</span>\r\n                    <svg class=\"navbar__caret\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                  </div>\r\n                </a>\r\n\r\n                <div\r\n                  class=\"dropdown-menu dropdown-menu--hide\"\r\n                  id=\"games-dropdown-menu\"\r\n                  data-section=\"games\"\r\n                >\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Discover\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Reviews\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Advanced Search\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                  <div class=\"dropdown-menu__separator\"></div>\r\n\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Coming Soon\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Recently Released\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Top 100\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                  <div class=\"dropdown-menu__separator\"></div>\r\n\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Add Game\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Add Company\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"menu-list__item menu-list__item--navbar\">\r\n                <a\r\n                  class=\"navbar__link\"\r\n                  id=\"database-navbar\"\r\n                  data-section=\"database\"\r\n                  href=\"#\"\r\n                >\r\n                  <div class=\"navbar__content\">\r\n                    <svg class=\"navbar__icon navbar__icon--database\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                    <span class=\"navbar__title\">database</span>\r\n                    <svg class=\"navbar__caret\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                  </div>\r\n                </a>\r\n\r\n                <div\r\n                  class=\"dropdown-menu dropdown-menu--hide\"\r\n                  id=\"database-dropdown-menu\"\r\n                  data-section=\"database\"\r\n                >\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Games\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Platforms\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Events\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                  <div class=\"dropdown-menu__separator\"></div>\r\n\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Developer API\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"menu-list__item menu-list__item--navbar\">\r\n                <a\r\n                  class=\"navbar__link\"\r\n                  id=\"community-navbar\"\r\n                  data-section=\"community\"\r\n                  href=\"#\"\r\n                >\r\n                  <div class=\"navbar__content\">\r\n                    <svg class=\"navbar__icon navbar__icon--community\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                    <span class=\"navbar__title\">community</span>\r\n                    <svg class=\"navbar__caret\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                  </div>\r\n                </a>\r\n\r\n                <div\r\n                  class=\"dropdown-menu dropdown-menu--hide\"\r\n                  id=\"community-dropdown-menu\"\r\n                  data-section=\"community\"\r\n                >\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Karma Hunters\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Discord\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <li class=\"menu-list__item menu-list__item--navbar\">\r\n                <a\r\n                  class=\"navbar__link\"\r\n                  id=\"help-navbar\"\r\n                  data-section=\"help\"\r\n                  href=\"#\"\r\n                >\r\n                  <div class=\"navbar__content\">\r\n                    <svg class=\"navbar__icon navbar__icon--help\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                    <span class=\"navbar__title\">help</span>\r\n                    <svg class=\"navbar__caret\">\r\n                      <use\r\n                        xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                      ></use>\r\n                    </svg>\r\n                  </div>\r\n                </a>\r\n\r\n                <div\r\n                  class=\"dropdown-menu dropdown-menu--hide\"\r\n                  id=\"help-dropdown-menu\"\r\n                  data-section=\"help\"\r\n                >\r\n                  <div class=\"dropdown-menu__content-block\">\r\n                    <ul class=\"menu-list menu-list--column\">\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          About IGDB\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Contributions\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          UserVoice\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li class=\"menu-list__item\">\r\n                        <a class=\"dropdown-menu__link\" href=\"#\">\r\n                          <svg class=\"dropdown-menu__icon\">\r\n                            <use\r\n                              xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"\r\n                            ></use>\r\n                          </svg>\r\n                          Contact\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n\r\n        <ul class=\"menu-list\">\r\n          <li class=\"menu-list__item\">\r\n            <a href=\"#\" class=\"login\" id=\"login\">\r\n              <svg class=\"login__icon\">\r\n                <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"></use>\r\n              </svg>\r\n              <span>Login with Twitch</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </header>\r\n    </div>\r\n\r\n    <div class=\"wrapper--light-grey\">\r\n      <div class=\"main-container\">\r\n        <main>\r\n          <section class=\"content\">\r\n            <ol class=\"breadcrumb menu-list menu-list--row\">\r\n              <li>\r\n                <a class=\"breadcrumb__link\" target=\"_blank\" href=\"/\">Home</a>\r\n              </li>\r\n              <li>Top 100</li>\r\n              <li>Games</li>\r\n            </ol>\r\n            <h1 class=\"content__header\">Best Games</h1>\r\n            <div class=\"mar-lg-bottom\">\r\n              <form action=\"\" method=\"\" class=\"filter\">\r\n                <div class=\"form__cell\">\r\n                  <label class=\"form__label\" for=\"top-platform-filter\">\r\n                    Platform:\r\n                  </label>\r\n                  <select\r\n                    name=\"top_platform_filter\"\r\n                    id=\"top-platform-filter\"\r\n                    class=\"form__input\"\r\n                  >\r\n                    <option value=\"all\">All Platforms</option>\r\n                    <option value=\"linux\">Linux</option>\r\n                    <option value=\"mac\">Mac</option>\r\n                    <option value=\"win\">PC (Microsoft Windows)</option>\r\n                    <option value=\"ps3\">Play Station 3</option>\r\n                    <option value=\"ps4\">Play Station 4</option>\r\n                    <option value=\"wiiu\">Wii U</option>\r\n                    <option value=\"xbox360\">Xbox 360</option>\r\n                    <option value=\"xboxone\">Xbox One</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form__cell\">\r\n                  <label class=\"form__label\" for=\"top_from_year\">\r\n                    From Year:\r\n                  </label>\r\n                  <input\r\n                    id=\"top_from_year\"\r\n                    type=\"text\"\r\n                    placeholder=\"1900\"\r\n                    value=\"1900\"\r\n                    class=\"form__input\"\r\n                  />\r\n                </div>\r\n                <div class=\"form__cell\">\r\n                  <label class=\"form__label\" for=\"top_to_year\">To Year:</label>\r\n                  <input\r\n                    id=\"top_to_year\"\r\n                    type=\"text\"\r\n                    placeholder=\"YYYY\"\r\n                    value=\"2023\"\r\n                    class=\"form__input\"\r\n                  />\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n            <table id=\"table\" class=\"table content__table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th></th>\r\n                  <th>Name</th>\r\n                  <th>Score</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody></tbody>\r\n            </table>\r\n          </section>\r\n        </main>\r\n\r\n        <aside class=\"aside\">\r\n          <h2 class=\"aside__header\">Other Top 100s</h2>\r\n          <nav id=\"aside-nav\" class=\"aside__nav\">\r\n            <ul class=\"menu-list menu-list--column\">\r\n              <li>\r\n                <a href=\"#\" class=\"aside__link aside__link--active\">Games</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"aside__link\">Companies</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"aside__link\">Contributors</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"aside__link\">Most Anticipated</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <br />\r\n          <div class=\"aside__pad pad\">\r\n            <h5 class=\"pad__header\">How are the top lists calculated?</h5>\r\n            <p class=\"pad__description\">\r\n              We use a <strong>weighted rating</strong>, meaning we calculate a\r\n              new value not only based on the average rating but the number of\r\n              votes too. This gives us a more accurate \"top\" list.\r\n            </p>\r\n          </div>\r\n          <hr />\r\n          <br />\r\n        </aside>\r\n\r\n        <footer id=\"footer\" class=\"footer\">\r\n          <div class=\"footer__container\">\r\n            <div class=\"footer__mobile-btns\">\r\n              <a id=\"back-to-top\" class=\"footer__mobile-btn\" href=\"#header\">\r\n                Back to Top\r\n              </a>\r\n              <a class=\"footer__mobile-btn\" href=\"#\">Request mobile site</a>\r\n            </div>\r\n            <br class=\"footer__separator\" />\r\n            <div class=\"footer__links\">\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv/p/legal/privacy-policy/\"\r\n                target=\"_blank\"\r\n                rel=\"nofollow\"\r\n              >\r\n                Privacy Notice\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv/p/legal/terms-of-service/\"\r\n                target=\"_blank\"\r\n                rel=\"nofollow\"\r\n              >\r\n                Terms\r\n              </a>\r\n              <span> - </span>\r\n              <a class=\"footer__link\" href=\"/content-policy\">\r\n                Content Policy\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv/p/legal/community-guidelines/\"\r\n                target=\"_blank\"\r\n                rel=\"nofollow\"\r\n              >\r\n                Community Guidelines\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv/p/legal/developer-agreement/\"\r\n                target=\"_blank\"\r\n                rel=\"nofollow\"\r\n              >\r\n                Developer Terms\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv/p/en/legal/dmca-guidelines/\"\r\n                target=\"_blank\"\r\n              >\r\n                DMCA guidelines\r\n              </a>\r\n              <span> - </span>\r\n              <a class=\"footer__link\" href=\"/api\" target=\"_self\"> API </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://github.com/twitchtv/igdb-contribution-guidelines/wiki\"\r\n                target=\"_blank\"\r\n              >\r\n                Contribution Guidelines\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://discord.gg/WvBNFRu\"\r\n                target=\"_blank\"\r\n              >\r\n                Discord\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://twitter.com/IGDBcom\"\r\n                target=\"_blank\"\r\n              >\r\n                Twitter\r\n              </a>\r\n              <span> - </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://twitch.uservoice.com/forums/929953-igdb\"\r\n                target=\"_blank\"\r\n              >\r\n                UserVoice\r\n              </a>\r\n            </div>\r\n            <div class=\"footer__made\">\r\n              <span>IGDB is operated by </span>\r\n              <a\r\n                class=\"footer__link\"\r\n                href=\"https://www.twitch.tv\"\r\n                target=\"_blank\"\r\n                >Twitch</a\r\n              >\r\n            </div>\r\n          </div>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/dropdown-menu-sprite.svg":
/*!******************************************!*\
  !*** ./src/img/dropdown-menu-sprite.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dropdown-menu-sprite.svg";

/***/ }),

/***/ "./src/img/header-sprite.svg":
/*!***********************************!*\
  !*** ./src/img/header-sprite.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/header-sprite.svg";

/***/ }),

/***/ "./src/img/logo-72x72.png":
/*!********************************!*\
  !*** ./src/img/logo-72x72.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo-72x72.png";

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/star.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scripts_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/control.js */ "./src/scripts/control.js");



(0,_scripts_control_js__WEBPACK_IMPORTED_MODULE_2__.init)();
})();

/******/ })()
;
//# sourceMappingURL=main.552db07c02426041f4d3.js.map