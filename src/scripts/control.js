import * as model from './model.js';
import view from './views/view.js';

const controlSubmitForm = function (e) {
  e.preventDefault();
};

export const init = function () {
  view.addHandlSubmitForm(controlSubmitForm);
};
