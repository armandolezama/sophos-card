import { LitElement, html } from 'lit';
import styles from './sophos-card-styles';

export class SophosCard extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor () {
    super();
    this.pictureSRC = '';
    this.pictureAlt = '';
    this.cardTitle = '';
    this.subtitle = '';
    this.description = '';
    this.configContent = [];
    this._contentBuilder = {};
  }

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties () {
    return {
      pictureSRC : { type: String },
      pictureAlt : { type: String },
      cardTitle : { type: String },
      subtitle : { type : String},
      description : { type : String },
      configContent : { type : Array },
      _contentBuilder : { type : Object }
    };
  }

  /**
   * @readonly property
   * @static function
   * @memberof SophosCard
   * Styles getter for sophos-card-style.js
   */
  static get styles () {
    return styles;
  }

  
  firstUpdated () {
    super.firstUpdated();
    this._contentBuilder = {
      'pickture' : this._createPicture(),
      'title' : this._createTitle(),
      'subtitle' : this._createSubtitle(),
      'description' : this._createDescription(),
    };
  }

  /**
   *Fire event function for all click events from dom sections
   * @param {*} e event object
   * @memberof SophosCard
   */
  _fireClickEvent (e) {
    this.dispatchEvent( new CustomEvent(`sophos-card-click-${e.target.id}`) );
  }

  /**
   * Build image template function. Setted by properties 
   * @returns lit-html object
   */
  _createPicture () {
    if(this.pictureSRC !== '' && this.pictureAlt !== ''){
      return html`
        <div id="picture-container">
          <img 
          id="picture" 
          src=${this.pictureSRC} 
          alt=${this.pictureAlt}
          @click=${this._fireClickEvent}>
        </div>
      `;
    }
  }

  /**
   * Build title template function. Setted by properties 
   * @returns lit-html object
   */
  _createTitle () {
    if(this.cardTitle !== ''){
      return html`
        <h2 
        id="title"
        @click=${this._fireClickEvent}>
        ${this.cardTitle}
        </h2>
      `;
    }
  }

  /**
   * Build subtitle template function. Setted by properties 
   * @returns lit-html object
   */
  _createSubtitle () {
    if(this.subtitle !== '') {
      return html`
        <h3 
        id="subtitle"
        @click=${this._fireClickEvent}>
        ${this.subtitle}
        </h3>
      `;
    }
  }

  /**
   * Build description template function. Setted by properties 
   * @returns lit-html object
   */
  _createDescription () {
    if(this.description !== '') {
      return html `
        <p 
        id="description"
        @click=${this._fireClickEvent}>
        ${this.description}
        </p> 
      `;
    }
  }

  _createCard () {
    return this.configContent.map(( content )=> {
      const contentBuilded = this._contentBuilder[content];
      return contentBuilded;
    });
  }
  
  render () {
    return html`
    <div id="main-container">
      ${this._createCard()}
    </div>
    `;
  }
}
customElements.define('sophos-card', SophosCard);