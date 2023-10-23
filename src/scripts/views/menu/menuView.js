class MenuView {
  _container = null;

  constructor(containerId) {
    this._container = document.querySelector(containerId);
  }

  addHandleMenuClick(handler) {
    this._container.addEventListener('click', handler);
  }
}

export default MenuView;
