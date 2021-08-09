class DataItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data({ name, img, id }) {
    this._data = { name, img, id };
    this.render();
  }

  handleLink(id) {
    console.log(id);
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
      
      .text-white {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
      }

      .font-semibold {
        font-weight: 600;
      }

      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }

      .cursor-pointer {
        cursor: pointer;
      }

      </style>

      <div class="flex flex-col items-center" data-id=${this._data.id}>
      <img class="object-cover cursor-pointer img" width="100" src="${this._data.img}">
      <p class="text-white font-semibold text-lg">${this._data.name}</p>
      </div>
      `;

    this.shadowDOM.querySelector('.img').addEventListener('click', (e) => {
      const getId = e.target.parentElement.dataset.id;
      window.location.href = `/detail.html?id=${getId}`;
    });
  }
}

customElements.define('data-item', DataItem);
