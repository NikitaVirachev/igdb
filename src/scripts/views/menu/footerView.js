import MenuView from './menuView';

class FooterView extends MenuView {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }
}

export default new FooterView('#footer');
