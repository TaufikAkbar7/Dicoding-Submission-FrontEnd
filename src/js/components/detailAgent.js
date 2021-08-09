class DetailAgent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    console.log(this._data);
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

        <style>

        .object-cover {
          -o-object-fit: cover;
             object-fit: cover;
        }
  
        .flex {
          display: flex;
        }
  
        .flex-row {
          flex-direction: row;
        }

        .flex-col {
          flex-direction: column;
        }

        .items-center {
          align-items: center;
        }
        
        .text-white {
          --tw-text-opacity: 1;
          color: rgba(255, 255, 255, var(--tw-text-opacity));
        }
  
        .font-semibold {
          font-weight: 600;
        }

        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }

        .justify-center {
          justify-content: center;
        }

        .p-5 {
          padding: 1.25rem;
        }

        .flex-wrap {
          flex-wrap: wrap;
        }

        .bg-card {
          background: #252A3C;
        }

        .rounded {
          border-radius: 0.25rem;
        }

        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        .w-72 {
          width: 18rem;
        }

        .text-skill {
          color: #56B7B2;
        }

        .text-gray {
          --tw-text-opacity: 1;
          color: rgba(209, 213, 219, var(--tw-text-opacity));
        }

        .justify-around {
          justify-content: space-around;
        }

        .mt-5 {
          margin-top: 1.25rem;
        }

        .text-skill-ult {
          color: #EA5053;
        }

        </style>

        <div class="flex flex-col justify-center items-center p-5 text-white">
          <img class="object-cover" src="${this._data.displayIcon}">
          <h4 class=" font-semibold text-xl">${this._data.displayName}</h4>
          <div class="p-5">
            <h4 class="font-semibold text-xl">Description</h4>
            <p class="text-gray">${this._data.description}</p>
            <h4 class="font-semibold text-xl ">Skills</h4>
            <div class="flex flex-wrap justify-around skill-list">
              <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="50" height="50" src="${this._data.abilities[0].displayIcon}">
                <h4 class="font-semibold text-lg text-skill">${this._data.abilities[0].displayName} | ${this._data.abilities[0].slot}</h4>
                <p class="text-gray">${this._data.abilities[0].description}</p>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="50" height="50" src="${this._data.abilities[1].displayIcon}">
                <h4 class="font-semibold text-lg text-skill">${this._data.abilities[1].displayName} | ${this._data.abilities[1].slot}</h4>
                <p class="text-gray">${this._data.abilities[1].description}</p>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 mt-5 items-center">
                <img class="object-cover" width="50" height="50" src="${this._data.abilities[2].displayIcon}">
                <h4 class="font-semibold text-lg text-skill">${this._data.abilities[2].displayName} | ${this._data.abilities[2].slot}</h4>
                <p class="text-gray">${this._data.abilities[2].description}</p>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 mt-5 items-center">
                <img class="object-cover" width="50" height="50" src="${this._data.abilities[3].displayIcon}">
                <h4 class="font-semibold text-lg text-skill-ult">${this._data.abilities[3].displayName} | ${this._data.abilities[3].slot}</h4>
                <p class="text-gray">${this._data.abilities[3].description}</p>
              </div>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('detail-agent', DetailAgent);
