class DetailWeapon extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set listData(listData) {
    this._listData = listData;
    console.log(listData);
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
            --tw-text-opacity: 1;
            color: rgba(96, 165, 250, var(--tw-text-opacity));
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
          <img class="object-cover" src="${this._listData.displayIcon}">
          <h4 class=" font-semibold text-xl">${this._listData.displayName} | ${this._listData.shopData.categoryText}</h4>
        </div>
        `;
  }
}

customElements.define('detail-weapon', DetailWeapon);
