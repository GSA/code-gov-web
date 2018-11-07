'use strict';

/*global customElements*/
/* global fetch */
/*global HTMLElement*/

(function() {
  class JSONSchemaValidator extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
      this.ajvurl = 'https://cdnjs.cloudflare.com/ajax/libs/ajv/6.5.5/ajv.min.js'
    }

    static get observedAttributes() {
      return ['ajv', 'metaschema', 'schema'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      const uid = Math.ceil((Math.random() * 10e10).toString())
      this.id = `schema-validator-${uid}`
      this.innerHTML = `<div>
        <textarea
          onChange="event.target.parentElement.parentElement.validateInput()"
          onKeyup="event.target.parentElement.parentElement.validateInput()"
          style="box-sizing: border-box; height: 500px; padding: 15px; resize: none; width: 100%;"
        ></textarea>
        <div id="schema-validation-errors" style="box-sizing: border-box; padding: 15px; width: 100%;"></div>
      </div>`;
      this.update();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'schema') {
        this.update();
      }
    }

    getHTML() {

      return `
      ${this.getStyle()}
      <div>
        <textarea onChange=style="box-sizing: border-box; height: 500px; padding: 15px; resize: none; width: 100%;"></textarea>
      </div>
      `
    }

    getJSON(url) {
      return fetch(url).then(response => response.json())
    }

    getMetaSchema() {
      return this.getJSON(this.metaschemaurl)
    }

    getSchema() {
      return this.getJSON(this.schemaurl)
    }

    getAjv() {
      if (this.ajv) {
        return Promise.resolve(this.ajv);
      } else {
        return new Promise(resolve => {
          const script = document.createElement("script");
          script.src = this.ajvurl;
          script.onload = () => {
            this.ajv = new window.Ajv({ allErrors: true, schemaId: 'id' });
            resolve(this.ajv)
          };
          document.body.appendChild(script)
        })
      }
    }

    getStyle() {
      const { id } = this
      return `
      <style>
      </style>`
    }

    validateInput() {
      let errors;
      let parsed;
      console.log("starting validate")
      const text = this.querySelector('textarea').value;
      try {
        parsed = JSON.parse(text)
      } catch (error) {
        console.error("Failed to parsed JSON.  It appears that the user did not enter valid JSON");
        console.error(error);
      }
      if (parsed) {
        this.validate(parsed)
        this.updateErrors(this.validate.errors)
      } else {
        this.updateErrors([{ dataPath: "JSON File", message: "This does not appear to be a valid JSON file"}])
      }

    }

    update() {
      this.ajvurl = this.getAttribute('ajv') || this.ajvurl
      this.schemaurl = this.getAttribute('schema')
      this.metaschemaurl = this.getAttribute('metaschema')
      Promise.all([
        this.getAjv(),
        this.getMetaSchema(),
        this.getSchema()
      ]).then(([ajv, metaschema, schema]) => {
        console.log("[ajv, metaschema, schema]:", [ajv, metaschema, schema])
        try {
          this.ajv.addMetaSchema(metaschema);
        } catch (error) {
          console.warn(error);
        }
        this.validate = this.ajv.compile(schema);
      })
    }

    updateErrors(errors) {
      const errorBox = document.getElementById("schema-validation-errors")
      console.log("err")
      if (Array.isArray(errors) && errors.length > 0) {
        const numberOfProblems = errors.length
        errorBox.innerHTML = `
          <div>Number of Problems: ${numberOfProblems}</div>
          ${errors.map(error => `<div>${error.dataPath}: ${error.message}</div>`).join('')}
        `;
      } else {
        errorBox.innerHTML = '';
      }
    }

  }

  // let the browser know about the custom element
  customElements.define('json-schema-validator', JSONSchemaValidator);
})();