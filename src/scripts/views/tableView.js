import View from './view';

class TableView extends View {
  _table = document.querySelector('table');

  _generateGameMarkup(game) {
    return `
      <tr>
        <td><h4 class="table__number text--muted">${game.number}</h4></td>
        <td>
          <a href="/games/baldurs-gate-3">
            <div class="table__game-cover">
              <img
                src="/src/img/games/Buldurs Gate 3.png"
                alt="Cover of Buldurs Gate 3"
              />
            </div>
          </a>
        </td>
        <td>
          <div class="table__game-name">
            <a href="/games/baldurs-gate-3">${game.name}</a>
            <span class="mg-sm-left text--muted">(${game.releaseYear})</span>
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

  createTable(games) {
    games.forEach((game) => {
      const gameMarkup = this._generateGameMarkup(game);
      this._table.insertAdjacentHTML('beforeend', gameMarkup);
    });
  }
}

export default new TableView();
