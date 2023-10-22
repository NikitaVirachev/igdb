class View {
  #form = document.querySelector('#search');

  addHandlSubmitForm(handler) {
    this.#form.addEventListener('click', handler);
  }
}

export default new View();
