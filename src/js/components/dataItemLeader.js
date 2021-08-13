class DataItemLeader extends HTMLElement {
  constructor() {
    super();
  }

  set data(data) {
    this._data = data;
    console.log(data);
    this.render();
  }

  render() {
    this.innerHTML = `
    <tr>
    <td>${this._data.leaderboardRank}</td>
    <td>${this._data.gameName} #${this._data.tagLine}</td>
    <td>${this._data.rankedRating}</td>
    <td>${this._data.numberOfWins}</td>
    </tr>
    `;
  }
}

customElements.define('item-leader', DataItemLeader);
