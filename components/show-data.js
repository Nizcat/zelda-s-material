import { LitElement, html, css } from "lit";

export class ShowData extends LitElement {
  static properties = {
    selectedData: { type: Object },
  }
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  firstUpdated() {
    super.firstUpdated();
    this.selectedData;
   
  }
  constructor(){
    super()
    console.log(this.selectedData, "en el constructor");
    this.selectedData=[{}]
  }


  render() {
    return html`
      <p>${console.log(this.selectedData, "en render")}</p>
      <p>probando showdata</p>
    `;
  }
}
customElements.define("show-data", ShowData);
