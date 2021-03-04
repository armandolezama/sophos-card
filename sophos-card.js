import { LitElement, html } from 'lit-element';
import styles from './sophos-card-styles';

export class SophosCard extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.pictureSRC = '';
    this.pictureAlt = '';
    this.title = '';
    this.subtitle = '';
    this.description = '';
  }

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      pictureSRC : { type: String },
      pictureAlt : { type: String },
      title : { type: String },
      subtitle : { type : String},
      description : { type : String }
    };
  }

  static get styles() {
    return styles;
  };

  createPicture() {
    if(this.pictureSRC !== '' && this.pictureAlt !== ''){
      return html`<img id="picture" src="${this.pictureSRC}" alt="${this.pictureAlt}">`
    }
  }

  createTitle() {
    if(this.title !== ''){
      return html`
        <h2 id="title">${this.title}</h2>
      `;
    }
  }

  createSubtitle() {
    if(this.subtitle !== '') {
      return html`
        <h3 id="subtitle">${this.subtitle}</h3>
      `;
    }
  }

  createDescription() {
    if(this.description !== '') {
      return html `
        <p id="description">
          ${this.description}
        </p> 
      `;
    }
  }

  render() {
    return html`
    <div id="main-container">

      <div id="picture-container">
        ${this.createPicture()}
      </div>
      <div id="title-container">
        ${this.createTitle()}
      </div>

      <div id="subtitle-container">
        ${this.createSubtitle()}
      </div>

      <div id="description-container">
        ${this.createDescription()}
      </div>
    </div>
    `;
  }
}
customElements.define('sophos-card', SophosCard);