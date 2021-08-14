import './dataItemAgent';

class DataListAgent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set listData(listData) {
    this._listData = listData;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._listData.forEach((item) => {
      const itemElement = document.createElement('data-item-agent');
      itemElement.data = item;
      this.shadowDOM.appendChild(itemElement);
    });
  }
}

customElements.define('data-list-agent', DataListAgent);
