import View from '../view';

class FormView extends View {
  _form = null;

  constructor(formID) {
    super();
    this._form = document.querySelector(formID);
  }

  addHandlSubmitForm(handler) {
    this._form.addEventListener('click', handler);
  }
}

export default FormView;
