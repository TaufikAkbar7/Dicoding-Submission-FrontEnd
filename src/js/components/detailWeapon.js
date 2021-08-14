class DetailWeapon extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  sliceMethod(data) {
    this.result = data.slice(29);
    return this.result;
  }

  render() {
    this.shadowDOM.innerHTML = `
        
        <style>

        .object-cover {
            -o-object-fit: contain;
               object-fit: contain;
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

          .justify-between {
            justify-content: space-between;
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

          .bg-red {
            background: red;
          }

          .bg-blue {
            background: blue;
          }

          .bg-green {
            background: green;
          }

          .items-end {
            align-items: flex-end;
          }

          .w-96 {
            width: 24rem;
          }

          @media(min-width: 576px) and (max-width: 768px) {
            .bg-card:nth-child(even) {
              margin-top: 1.25rem;
            }
            .bg-card:nth-child(3) {
              margin-top: 1.25rem;
            }
          }
  
          @media(min-width: 768px) and (max-width: 1280px) {
            .bg-card:nth-child(3) {
              margin-top: 1.25rem;
            }
            .bg-card:nth-child(4) {
              margin-top: 1.25rem;
            }
            .bg-card:nth-child(even) {
              margin-left: 1.25rem;
            }
          }
  
          @media(min-width: 1280px) {
            .bg-card:nth-child(2) {
              margin-left: 1.25rem;
            }
            .bg-card:nth-child(3) {
              margin-left: 1.25rem;
            }
            .bg-card:nth-child(4) {
              margin-top: 1.25rem;
            }
          }

        </style>

        <div class="flex flex-col justify-center items-center p-5 text-white">
          <img class="object-cover" width="350" height="100" src="${this._data.displayIcon}">
          <h4 class="font-semibold text-xl">${this._data.displayName} | ${this._data.shopData.category}</h4>
          <div class="flex flex-row justify-between w-96 text-gray">
            <div class="flex flex-col">
              <p>Cost</p>
              <p>Magazine Capacity</p>
              <p>Wall Penetration</p>
              <p>Head Damage</p>
              <p>Body Damage</p>
              <p>Leg Damage</p>
            </div>
            <div class="flex flex-col items-end">
              <p>${this._data.shopData.cost}</p>
              <p>${this._data.weaponStats.magazineSize}</p>
              <p>${this.sliceMethod(this._data.weaponStats.wallPenetration)}</p>
              <p>${this._data.weaponStats.damageRanges[0].headDamage}</p>
              <p>${this._data.weaponStats.damageRanges[0].bodyDamage}</p>
              <p>${this._data.weaponStats.damageRanges[0].legDamage}</p>
              </div>
          </div>
          <h3>Skins</h3>
          <div class="mt-5 flex flex-wrap justify-center">
            <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="320" height="100" src="${this._data.skins[0].displayIcon}">
                <h4 class="font-semibold text-lg">${this._data.skins[0].displayName}</h4>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="320" height="100" src="${this._data.skins[3].displayIcon}">
                <h4 class="font-semibold text-lg">${this._data.skins[3].displayName}</h4>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="320" height="100" src="${this._data.skins[4].displayIcon}">
                <h4 class="font-semibold text-lg">${this._data.skins[4].displayName}</h4>
              </div>
              <div class="bg-card flex flex-col rounded p-5 w-72 items-center">
                <img class="object-cover" width="320" height="100" src="${this._data.skins[5].displayIcon}">
                <h4 class="font-semibold text-lg">${this._data.skins[5].displayName}</h4>
              </div>
          </div>
        </div>
        `;
  }
}

customElements.define('detail-weapon', DetailWeapon);
