import { LitElement, html, css } from "lit";
import "./components/select-item";
import "./components/get-data";
import "./components/show-data";

export class ZeldasMaterial extends LitElement {
  static properties = {
    selectedItem: { type: String },
    selectedData: { type: Object, reflect: true },
  };

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 100vw;
        height: 100vh;
      }
    `,
  ];
  constructor() {
    super();
    this.selectedItem = "monsters";
    this.url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";

    this.addEventListener("selectItem", (e) => {
      this.selectedItem = e.detail["item"];
      console.log(this.selectedItem);
    });

    this.addEventListener("ApiData", (e) => {
      this.selectedData = e.detail.data.data;
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
      <show-data .selectedData=${this.selectedData}></show-data>
    `;
  }


}
customElements.define("zeldas-material", ZeldasMaterial);
