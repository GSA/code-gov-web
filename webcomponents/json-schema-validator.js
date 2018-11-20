'use strict';
/*global customElements*/

/*global HTMLElement*/

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  let JSONSchemaValidator =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JSONSchemaValidator, _HTMLElement);

    function JSONSchemaValidator() {
      var _this;

      _classCallCheck(this, JSONSchemaValidator);

      // establish prototype chain
      _this = _possibleConstructorReturn(this, _getPrototypeOf(JSONSchemaValidator).call(this));
      _this.default_ajv_url = 'https://unpkg.com/ajv@6.5.5/dist/ajv.min.js';
      _this.default_json_editor_url = 'https://unpkg.com/jsoneditor@5.25.0';
      _this.promises = {};
      return _this;
    }

    _createClass(JSONSchemaValidator, [{
      key: "connectedCallback",
      // fires after the element has been attached to the DOM
      value: function connectedCallback() {
        const uid = Math.ceil((Math.random() * 10e10).toString());
        this.id = "schema-validator-".concat(uid);
        this.innerHTML = "<div>\n        <div id=\"jsoneditor\" style=\"box-sizing: border-box; height: 500px; padding: 15px; width: 100%;\"></div>\n        <div id=\"schema-validation-errors\" style=\"box-sizing: border-box; padding: 15px; width: 100%;\"></div>\n        <link href=\"".concat(this.json_editor_url, "/dist/jsoneditor.min.css\" rel=\"stylesheet\" type=\"text/css\">\n      </div>");
        this.update();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'schema') {
          this.update();
        }
      }
    }, {
      key: "getHTML",
      value: function getHTML() {
        return '<div><textarea onChange=style="box-sizing: border-box; height: 500px; padding: 15px; resize: none; width: 100%;"></textarea></div>';
      }
    }, {
      key: "getJSON",
      value: function getJSON(url) {
        return new Promise(function (resolve) {
          var xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              resolve(JSON.parse(xhr.response));
            }
          };

          xhr.open('GET', url, true);
          xhr.send('');
        });
      }
    }, {
      key: "getMetaSchema",
      value: function getMetaSchema() {
        return this.getJSON(this.metaschemaurl);
      }
    }, {
      key: "getSchema",
      value: function getSchema() {
        return this.getJSON(this.schemaurl);
      }
    }, {
      key: "getAjv",
      value: function getAjv() {
        var _this2 = this;

        return this.loadScript(this.ajv_url).then(function () {
          if (!_this2.ajv) {
            _this2.ajv = new window.Ajv({
              allErrors: true,
              schemaId: 'id'
            });
          }

          return _this2.ajv;
        });
      }
    }, {
      key: "getJSONEditor",
      value: function getJSONEditor() {
        return this.loadScript(this.json_editor_url + '/dist/jsoneditor.min.js').then(function () {
          return window.JSONEditor;
        });
      }
    }, {
      key: "loadScript",
      value: function loadScript(url) {
        if (!this.promises[url]) {
          this.promises[url] = new Promise(function (resolve) {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            document.body.appendChild(script);
          });
        }

        return Promise.resolve(this.promises[url]);
      }
    }, {
      key: "validateInput",
      value: function validateInput() {
        let errors;
        let parsed;
        console.log("starting validate");
        const text = this.querySelector('textarea').value;

        try {
          parsed = JSON.parse(text);
        } catch (error) {
          console.error("Failed to parsed JSON.  It appears that the user did not enter valid JSON");
          console.error(error);
        }

        if (parsed) {
          this.validate(parsed);
          this.updateErrors(this.validate.errors);
        } else {
          this.updateErrors([{
            dataPath: "JSON File",
            message: "This does not appear to be a valid JSON file"
          }]);
        }
      }
    }, {
      key: "update",
      value: function update() {
        var _this3 = this;

        this.ajv_url = this.getAttribute('ajv') || this.default_ajv_url;
        this.json_editor_url = this.getAttribute('jsoneditor') || this.default_json_editor_url;
        this.schemaurl = this.getAttribute('schema');
        this.metaschemaurl = this.getAttribute('metaschema');
        this.updated = Promise.all([this.getAjv(), this.getJSONEditor(), this.getMetaSchema(), this.getSchema()]).then(function (values) {
          const _values = _slicedToArray(values, 4),
                ajv = _values[0],
                JSONEditor = _values[1],
                metaschema = _values[2],
                schema = _values[3];

          console.log("[ajv, JSONEditor, metaschema, schema]:", [ajv, JSONEditor, metaschema, schema]);

          try {
            ajv.addMetaSchema(metaschema);
          } catch (error) {
            console.warn(error);
          }

          if (!_this3.editor) {
            // create the editor
            var container = _this3.querySelector("#jsoneditor");

            var options = {
              ajv: ajv,
              mode: 'text',
              modes: ['text', 'tree']
            };
            _this3.editor = new JSONEditor(container, options, '');

            _this3.editor.setSchema(schema);

            _this3.editor.setText('');
          }
        });
      }
    }, {
      key: "updateErrors",
      value: function updateErrors(errors) {
        const errorBox = document.getElementById("schema-validation-errors");
        console.log("err");

        if (Array.isArray(errors) && errors.length > 0) {
          const numberOfProblems = errors.length;
          errorBox.innerHTML = "\n          <div>Number of Problems: ".concat(numberOfProblems, "</div>\n          ").concat(errors.map(function (error) {
            return "<div>".concat(error.dataPath, ": ").concat(error.message, "</div>");
          }).join(''), "\n        ");
        } else {
          errorBox.innerHTML = '';
        }
      }
    }], [{
      key: "observedAttributes",
      get: function () {
        return ['ajv', 'jsoneditor', 'metaschema', 'schema'];
      }
    }]);

    return JSONSchemaValidator;
  }(_wrapNativeSuper(HTMLElement)); // let the browser know about the custom element


  customElements.define('json-schema-validator', JSONSchemaValidator);
})();
