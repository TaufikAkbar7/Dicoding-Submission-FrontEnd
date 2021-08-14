class DataItemAgent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data({ name, img, id }) {
    this._data = { name, img, id };
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

      .flex-col {
        flex-direction: column;
      }

      .items-center {
        align-items: center;
      }
      
      .text-gray {
        --tw-text-opacity: 1;
        color: rgba(156, 163, 175, var(--tw-text-opacity));
      }

      .font-semibold {
        font-weight: 600;
      }

      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      .cursor-pointer {
        cursor: pointer;
      }

      .ml-2 {
        margin-left: 2rem;
      }

      div:hover {
        background-color: #191D2C;
      }

      .p-3 {
        padding: 1rem;
      }

      </style>

      <div class="flex flex-col items-center ml-2 p-3" data-id=${this._data.id}>
      <img class="object-cover cursor-pointer img" width="100" src="${this._data.img}">
      <p class="text-gray font-semibold text-sm">${this._data.name}</p>
      </div>
      `;

    this.shadowDOM.querySelector('.img').addEventListener('click', (e) => {
      const getId = e.target.parentElement.dataset.id;
      window.location.href = `/detailAgent.html?id=${getId}`;
    });
  }
}

customElements.define('data-item-agent', DataItemAgent);
