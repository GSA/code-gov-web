'use strict';

/*global customElements*/
/* global fetch */
/*global HTMLElement*/

(function() {
  class JSONSchemaValidator extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
      this.default_ajv_url = 'https://unpkg.com/ajv@6.5.5/dist/ajv.min.js'
      this.default_json_editor_url = 'https://unpkg.com/jsoneditor@5.25.0';
      this.promises = {};
    }

    static get observedAttributes() {
      return ['ajv', 'jsoneditor', 'metaschema', 'schema'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      const uid = Math.ceil((Math.random() * 10e10).toString())
      this.id = `schema-validator-${uid}`
      this.innerHTML = `<div>
        <div id="jsoneditor" style="box-sizing: border-box; height: 500px; padding: 15px; width: 100%;"></div>
        <div id="schema-validation-errors" style="box-sizing: border-box; padding: 15px; width: 100%;"></div>
        <link href="${this.json_editor_url}/dist/jsoneditor.min.css" rel="stylesheet" type="text/css">
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
      return this.loadScript(this.ajv_url).then(() => {
        if (!this.ajv) {
          this.ajv = new window.Ajv({ allErrors: true, schemaId: 'id' });
        }
        return this.ajv
      })
    }

    getJSONEditor() {
      return this.loadScript(this.json_editor_url + '/dist/jsoneditor.min.js')
        .then(() => window.JSONEditor)
    }

    loadScript(url) {
      if (!this.promises[url]) {
        this.promises[url] = new Promise(resolve => {
          const script = document.createElement("script");
          script.src = url;
          script.onload = resolve
          document.body.appendChild(script)
        })
      }
      return Promise.resolve(this.promises[url])
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
      this.ajv_url = this.getAttribute('ajv') || this.default_ajv_url
      this.json_editor_url = this.getAttribute('jsoneditor') || this.default_json_editor_url
      this.schemaurl = this.getAttribute('schema')
      this.metaschemaurl = this.getAttribute('metaschema')
      this.updated = Promise.all([
        this.getAjv(),
        this.getJSONEditor(),
        this.getMetaSchema(),
        this.getSchema()
      ]).then(([ajv, JSONEditor, metaschema, schema]) => {

        console.log("[ajv, JSONEditor, metaschema, schema]:", [ajv, JSONEditor, metaschema, schema])
        try {
          ajv.addMetaSchema(metaschema);
        } catch (error) {
          console.warn(error);
        }

        if (!this.editor) {
          // create the editor
          var container = this.querySelector("#jsoneditor");
          var options = {
            ajv,
            mode: 'text',
            modes: ['text', 'tree']
          };
          this.editor = new JSONEditor(container, options, '');
          this.editor.setSchema(schema)
          this.editor.setText('')
        }
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