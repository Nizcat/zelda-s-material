import { LitElement, html, css } from "lit";

export class ShowData extends LitElement {
  static properties = {
    selectedData: { type: Object },
  }
  static styles = [
    css`
       :host {
        display: flex;
        background-color: black;
        justify-content: center;
      }
      .cardContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2em;
        margin-top: 2em;
        justify-items: center;

        width: 90vw;
      }
      .card {
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 1em;
        border-radius: 15px;
        justify-content: calc();
        align-items: center;
      }
      .imageCard {
        box-shadow: 0.4em 0.4em 1em white;
      }
      .locationList {
        align-self: flex-start;
      }
    `,
  ];
  firstUpdated() {
    super.firstUpdated();
    this.selectedData;
   
  }
  constructor(){
    super()
    
    this.selectedData=[{}]
  }


  render() {
    return html`<div class="cardContainer">
    ${this.selectedData.map(
      (element) =>          
        html`
          ${element.name != "name"
            ? html` <div class="card">
                <h2>${element.name}</h2>
                <img src="${element.image}" class="imageCard" />
                <p>${element.description}</p>
                ${element.common_locations != null
                  ? html` <p>Common locations:</p>
                      ${element.common_locations.map(
                        (element) =>
                          html` <li class="locationList">${element}</li> `
                      )}`
                  : html`<p></p>`}
              </div>`
            : html``}
        `
    )}
  </div>
      
    `;
  }
}
customElements.define("show-data", ShowData);
