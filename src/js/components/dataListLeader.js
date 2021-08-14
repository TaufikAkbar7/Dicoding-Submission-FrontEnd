class DataListLeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set listData(listData) {
    this._listData = listData;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>
    
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
    td, th {
        text-align: center;
        padding: 8px;
      }
      
    th {
        --tw-text-opacity: 1;
        color: rgba(229, 231, 235, var(--tw-text-opacity));
      }
    
    td {
        --tw-text-opacity: 1;
        color: rgba(156, 163, 175, var(--tw-text-opacity));
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .name:hover {
      color: #fff;
    }

    </style>

    <table>
    <tr>
    <th>Rank</th>
    <th>Player Name</th>
    <th>Ranked Rating</th>
    <th>Wins</th>
    </tr>
    <tr data-id=${this._listData[0].puuid}>
    <td>${this._listData[0].leaderboardRank}</td>
    <td class="cursor-pointer name">${this._listData[0].gameName} #${this._listData[0].tagLine}</td>
    <td>${this._listData[0].rankedRating}</td>
    <td>${this._listData[0].numberOfWins}</td>
    </tr>
    <tr data-id=${this._listData[1].puuid}>
    <td>${this._listData[1].leaderboardRank}</td>
    <td class="cursor-pointer name">${this._listData[1].gameName} #${this._listData[1].tagLine}</td>
    <td>${this._listData[1].rankedRating}</td>
    <td>${this._listData[1].numberOfWins}</td>
    </tr>
    <tr data-id=${this._listData[2].puuid}>
    <td>${this._listData[2].leaderboardRank}</td>
    <td class="cursor-pointer name">${this._listData[2].gameName} #${this._listData[2].tagLine}</td>
    <td>${this._listData[2].rankedRating}</td>
    <td>${this._listData[2].numberOfWins}</td>
    </tr>
    <tr data-id=${this._listData[3].puuid}>
    <td>${this._listData[3].leaderboardRank}</td>
    <td class="cursor-pointer name">${this._listData[3].gameName} #${this._listData[3].tagLine}</td>
    <td>${this._listData[3].rankedRating}</td>
    <td>${this._listData[3].numberOfWins}</td>
    </tr>
    <tr data-id=${this._listData[4].puuid}>
    <td>${this._listData[4].leaderboardRank}</td>
    <td class="cursor-pointer name">${this._listData[4].gameName} #${this._listData[4].tagLine}</td>
    <td>${this._listData[4].rankedRating}</td>
    <td>${this._listData[4].numberOfWins}</td>
    </tr>
    </table>
    `;

    const getElement = this.shadowDOM.querySelectorAll('.name');
    for (let i = 0; i < getElement.length; i += 1) {
      getElement[i].addEventListener('click', (e) => {
        const getId = e.target.parentElement.dataset.id;
        window.location.href = `/detailPlayer.html?id=${getId}`;
      });
    }
  }
}

customElements.define('data-list-leader', DataListLeader);
