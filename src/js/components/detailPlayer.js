class DetailPlayer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
      }
    
    set data(data) {
        this._data = data;
        console.log(data);
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `

        <style>
        
        .rounded {
            border-radius: 0.25rem;
        }
  
        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
  
        .w-72 {
            width: 10rem;
        }

        .flex {
            display: flex;
          }
    
        .flex-col {
            flex-direction: column;
        }

        .flex-row {
            flex-direction: row;
        }
        
        .items-start {
            align-items: start;
        }

        .items-center {
            align-items: center;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-around {
            justify-content: around;
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto;
        }

        .flex-wrap {
            flex-wrap: wrap;
        }

        .bg-card {
            background: #252A3C;
        }

        .p-5 {
            padding: 1.25rem;
        }

        .text-white {
            --tw-text-opacity: 1;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .container {
            width: 100%;
        }

        .ml-2 {
            margin-left: 2rem;
        }

        .mt-2 {
            margin-top: 2rem;
        }

        .text-gray {
            --tw-text-opacity: 1;
            color: rgba(156, 163, 175, var(--tw-text-opacity));
        }

        </style>

        <div class="mx-auto text-white flex flex-col justify-center items-center">
            <p>Name: ${this._data.name} # ${this._data.tag}</p>
            <p>Elo: ${this._data.current_data.elo}</p>
            <p>Tier: ${this._data.current_data.currenttierpatched}</p>
            <p>History season</p>
        <div class="container mx-auto flex flex-wrap justify-center items-center p-5 text-gray">
            <div class="bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 1 Act 1</p>
                <p>${this._data.by_season.e1a1.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e1a1.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e1a1.wins}</p>
            </div>
            <div class="ml-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 1 Act 2</p>
                <p>${this._data.by_season.e1a2.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e1a2.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e1a2.wins}</p>
            </div>
            <div class="ml-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 1 Act 3</p>
                <p>${this._data.by_season.e1a3.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e1a3.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e1a3.wins}</p>
            </div>
            <div class="ml-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 2 Act 1</p>
                <p>${this._data.by_season.e2a1.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e2a1.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e2a1.wins}</p>
            </div>
            <div class="ml-2 mt-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 2 Act 2</p>
                <p>${this._data.by_season.e2a2.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e2a2.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e2a2.wins}</p>
            </div>
            <div class="ml-2 mt-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 2 Act 3</p>
                <p>${this._data.by_season.e2a3.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e2a3.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e2a3.wins}</p>
            </div>
            <div class="ml-2 mt-2 bg-card flex flex-col rounded items-center p-5">
                <p class="text-white">Eps 3 Act 1</p>
                <p>${this._data.by_season.e3a1.final_rank_patched}</p>
                <p>Total Matchs: ${this._data.by_season.e3a1.number_of_games}</p>
                <p>Wins: ${this._data.by_season.e3a1.wins}</p>
            </div>
        </div>
        </div>
        `;
    }

}

customElements.define('detail-player', DetailPlayer);
