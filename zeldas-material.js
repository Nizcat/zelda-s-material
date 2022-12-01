import { LitElement, html, css } from "lit";
import "./components/select-item";
import "./components/get-data";

export class ZeldasMaterial extends LitElement {
  static properties = {
    selectedItem: { type: String },
  };

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 90vw;
        height: 90vh;
      }
    `,
  ];
  constructor() {
    super();
    this.selectedItem ="monsters";

    this.addEventListener("selectItem", (e) => {
      this.selectedItem = e.detail["item"];
      console.log(this.selectedItem);
    });

    this.addEventListener("ApiData", (e) => {
      console.log(e.detail.data.data, "trajimos");
      this._dataFormat(e.detail.data.data);
      this.requestUpdate();
    });
  }

 

  render() {
    return html`
      <select-item></select-item>
      <get-data
        url="https://botw-compendium.herokuapp.com/api/v2/category/${this.selectedItem}"
        item=${this.selectedItem}
      ></get-data>
    `;
  }
}
customElements.define("zeldas-material", ZeldasMaterial);
