import { LitElement, html, css } from "lit";

export default class SelectItem extends LitElement {
  static properties = {
    item: { type: String },
  };

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
  }

  _sendItem(item) {
    this.dispatchEvent(
      new CustomEvent("selectItem", {
        detail: { item },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div>
        <h1>Zelda's monsters</h1>
        <select name="items" id="items" @change="${this.getItem}">
          <option value="monsters">Monsters</option>
          <option value="equipment">Equipment</option>
          <option value="materials">Material</option>
          <option value="creatures">Creatures</option>
        </select>
      </div>
    `;
  }
  getItem() {
    this.item = this.shadowRoot.getElementById("items").value;
    this._sendItem(this.item);
  }
}
customElements.define("select-item", SelectItem);
