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

/* global customElements */

/* global HTMLElement */
(function () {
  let JSONSchema =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JSONSchema, _HTMLElement);

    function JSONSchema() {
      _classCallCheck(this, JSONSchema);

      // establish prototype chain
      return _possibleConstructorReturn(this, _getPrototypeOf(JSONSchema).call(this));
    }

    _createClass(JSONSchema, [{
      key: "connectedCallback",
      // fires after the element has been attached to the DOM
      value: function connectedCallback() {
        this.update();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'url') {
          this.update();
        }
      }
    }, {
      key: "getHTML",
      value: function getHTML() {
        var _this = this;

        this.id = "schema-viewer-".concat(this.getUID());
        return "\n      ".concat(this.getStyle(), "\n      <div>\n        <h2>Field Definitions</h2>\n        <p color=\"#555\">The schema fields and definitions are listed below.  The optional fields are marked in red but serve to provide additional, helpful information. You can view a sample JSON file <a href=\"").concat(this.url, "\" target=\"blank\">here</a>.</p>\n        <div style=\"margin-bottom: 10px\">\n          <input id=\"json-schema-hide-optional-fields\" type=\"checkbox\" style=\"cursor: pointer; text-align: left\" onclick=\"document.getElementById('").concat(this.id, "').toggleOptionalFields()\">\n          <label for=\"json-schema-hide-optional-fields\" style=\"cursor: pointer\">Hide optional fields</label>\n        </div>\n        <div class=\"desktop-and-mobile-views\">\n          ").concat(this.getDetails(), "\n          <table>\n            <thead>\n              <tr>\n                <th class='field-name-column'>Field Name</th>\n                <th class='data-type-column'>Data Type</th>\n                <th class='description-column'>Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              ").concat(Object.entries(this.schema.properties).map(function (entry) {
          const _entry = _slicedToArray(entry, 2),
                key = _entry[0],
                value = _entry[1];

          const isRequired = _this.schema.required.includes(key);

          return _this.getSection(entry, isRequired, 0);
        }), "\n            </tbody>\n          </table>\n        </div>\n      </div>\n      ");
      }
    }, {
      key: "updateDetails",
      value: function updateDetails() {
        this.querySelector("#mobile-details").outerHTML = this.getDetails();
      }
    }, {
      key: "getDetails",
      value: function getDetails() {
        return "\n        <div id=\"mobile-details-overlay\"></div>\n        <div id=\"mobile-details\">\n          <table>\n            <thead>\n              <tr>\n                <th id='mobile-data-type-column'>Data Type</th>\n                <th class='mobile-description-column'>Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr style=\"background-color: ".concat(this.selectedBackgroundColor, "\">\n                <td class=\"mobile-data-type\">").concat(this.selectedDataType, "</td>\n                <td class=\"mobile-description\">").concat(this.selectedDescription, "</td>\n              </tr>\n              <tr>\n                <td class=\"back\" onclick=\"document.getElementById('").concat(this.id, "').hideDetails()\">\n                  <div id=\"back-arrow\" class=\"arrow-left\"></div>\n                  <div class=\"field-name-text\">back</div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      ");
      }
    }, {
      key: "getDescription",
      value: function getDescription(obj) {
        if (obj.description) {
          return obj.description;
        } else if (obj.array && obj.array.description) {
          return obj.array.description;
        } else if (obj.items && obj.items.description) {
          return obj.items.description;
        } else {
          return '';
        }
      }
    }, {
      key: "getRequired",
      value: function getRequired(obj) {
        if (obj.required) {
          return obj.required;
        } else if (obj.array && obj.array.required) {
          return obj.array.required;
        } else if (obj.items && obj.items.required) {
          return obj.items.required;
        }
      }
    }, {
      key: "getDropDown",
      value: function getDropDown(status) {
        if (status === 'collapsed') {
          return "<div class='dropdown' status=".concat(status, " onclick=\"document.getElementById('").concat(this.id, "').toggleDropDown(event)\"><div class=\"arrow-up-or-down\"></div></div>");
        } else if (status === 'expanded') {
          return "<div class='dropdown' status=".concat(status, " onclick=\"document.getElementById('").concat(this.id, "').toggleDropDown(event)\"><div class=\"arrow-up-or-down\"></div></div>");
        } else {
          return "<div class=\"dropdown\"></div>";
        }
      }
    }, {
      key: "getUID",
      value: function getUID() {
        return Math.ceil((Math.random() * 10e10).toString());
      }
    }, {
      key: "hideDetails",
      value: function hideDetails() {
        this.setAttribute("details", "false");
      }
    }, {
      key: "showDetails",
      value: function showDetails(rowID) {
        const row = document.getElementById(rowID);
        this.setAttribute("details", "true");
        this.selectedDataType = row.querySelector(".data-type").textContent.trim();
        this.selectedDescription = this.prettify(row.querySelector(".description").textContent.trim());
        this.selectedBackgroundColor = window.getComputedStyle(row).backgroundColor;
        this.updateDetails();
      }
    }, {
      key: "getSection",
      value: function getSection(entry, isRequired, indent) {
        var _this2 = this;

        try {
          const _entry2 = _slicedToArray(entry, 2),
                key = _entry2[0],
                value = _entry2[1];

          const items = value.items,
                properties = value.properties,
                type = value.type;
          const description = this.prettify(this.getDescription(value));
          const required = this.getRequired(value);
          const hasDropDown = this.hasDropDown(value);
          let trClasses = [];
          if (indent === 0) trClasses.push('first');
          if (isRequired === false) trClasses.push('optional');
          const trClass = trClasses.join(' ');
          const dropDownHTML = hasDropDown ? this.getDropDown('expanded') : this.getDropDown('invisble');
          const rowID = this.getUID();
          let html = "<tr id=\"".concat(rowID, "\" class=\"").concat(trClass, "\" indent=\"").concat(indent, "\">\n          <td style=\"padding-left: ").concat(10 + 20 * indent, "px\">\n            ").concat(dropDownHTML, "\n            <div class=\"field-name-text\">").concat(key, "</div>\n            <div class=\"details\" onclick=\"document.getElementById('").concat(this.id, "').showDetails('").concat(rowID, "')\">\n              <div class=\"details-text\">details</div>\n              <div class=\"details-arrow arrow-right\"></div>\n            </div>\n          </td>\n          <td class=\"data-type\">\n            <div>").concat(Array.isArray(type) ? type.join(' or ') : type, "</div>\n          </td>\n          <td class=\"description\">\n            <div>").concat(description, "</div>\n          </td>\n        </tr>");

          if (hasDropDown) {
            let entries;

            if (type.includes('array') && (items.type.includes('array') || items.type.includes('object'))) {
              entries = Object.entries(items.properties);
            } else if (type.includes('object')) {
              entries = Object.entries(properties);
            }

            if (entries) {
              html += entries.map(function (entry) {
                const _entry3 = _slicedToArray(entry, 2),
                      entryKey = _entry3[0],
                      entryValue = _entry3[1];

                const itemRequired = Array.isArray(required) && required.includes(entryKey);
                return _this2.getSection(entry, itemRequired, indent + 1);
              }).join('');
            }
          }

          return html;
        } catch (error) {
          console.error("error in getSection:", error);
          throw error;
        }
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
      key: "getSchema",
      value: function getSchema() {
        var _this3 = this;

        return this.getJSON(this.url).then(function (schema) {
          _this3.schema = schema;
          return schema;
        });
      }
    }, {
      key: "getStyle",
      value: function getStyle() {
        const arrowSize = '8px';
        const borderColor = 'lightgray';
        const id = this.id;
        return "\n      <style>\n        json-schema[hide-optional-fields='true'] tr.optional {\n          display: none;\n        }\n\n        #".concat(id, " > div {\n          background: white;\n          padding: 15px;\n          position: relative;\n        }\n\n        #").concat(id, " .desktop-and-mobile-views {\n          position: relative;\n        }\n\n        #").concat(id, " input {\n          height: 20px;\n          width: 20px;\n          vertical-align: sub;\n        }\n\n        #").concat(id, " [class*=arrow-] {\n          cursor: pointer;\n          height: 0;\n          width: 0;\n        }\n\n        #").concat(id, " .arrow-up {\n          border-left: ").concat(arrowSize, " solid transparent;\n          border-right: ").concat(arrowSize, " solid transparent;\n          border-top: ").concat(arrowSize, " solid #000;\n        }\n\n        #").concat(id, " .arrow-down {\n          border-left: ").concat(arrowSize, " solid transparent;\n          border-right: ").concat(arrowSize, " solid transparent;\n          border-top: ").concat(arrowSize, " solid #000;\n        }\n\n        #").concat(id, " .arrow-left {\n          border-top: ").concat(arrowSize, " solid transparent;\n          border-bottom: ").concat(arrowSize, " solid transparent;\n          border-right: ").concat(arrowSize, " solid #000;\n        }\n\n        #").concat(id, " .arrow-right {\n          border-top: ").concat(arrowSize, " solid transparent;\n          border-bottom: ").concat(arrowSize, " solid transparent;\n          border-left: ").concat(arrowSize, " solid #000;\n        }\n\n        #").concat(id, " th {\n          background: #323A45;\n          border-bottom: 1px solid ").concat(borderColor, ";\n          border-left: 1px solid ").concat(borderColor, ";\n          border-right: 1px solid ").concat(borderColor, ";\n          box-sizing: border-box;\n          color: white;\n          padding: .75rem 2rem;\n        }\n\n        @media screen and (max-width: 500px) {\n          #").concat(id, " th {\n            font-size: 1.1em;\n            padding: .75rem .2rem;\n          }\n        }\n\n        #").concat(id, " table {\n          border-collapse: collapse;\n          border-spacing:0;\n          width: 100%;\n        }\n\n        #").concat(id, " td {\n          border-bottom: 1px solid ").concat(borderColor, ";\n          border-left: 1px solid ").concat(borderColor, ";\n          border-right: 1px solid ").concat(borderColor, ";\n          box-sizing: border-box;\n          padding: 10px;\n        }\n\n        @media screen and (max-width: 500px) {\n          #").concat(id, " td {\n            padding: 5px;\n          }\n        }\n\n        #").concat(id, " td div, #").concat(id, " td span {\n        }\n\n        #").concat(id, " .field-name-column {\n          width: 35%;\n        }\n\n        #").concat(id, " .data-type-column {\n          width: 15%;\n        }\n\n        #").concat(id, " .dropdown {\n          display: inline-block;\n          padding-left: .25rem;\n          width: 30px;\n        }\n\n        #").concat(id, " .dropdown[status=expanded] > div {\n          border-left: ").concat(arrowSize, " solid transparent;\n          border-right: ").concat(arrowSize, " solid transparent;\n          border-top: ").concat(arrowSize, " solid black;\n        }\n\n        #").concat(id, " .dropdown[status=collapsed] > div {\n          border-bottom: ").concat(arrowSize, " solid black;\n          border-left: ").concat(arrowSize, " solid transparent;\n          border-right: ").concat(arrowSize, " solid transparent;\n        }\n\n        #").concat(id, " .data-type, #").concat(id, " .mobile-data-type {\n          text-align: center;\n        }\n\n        #").concat(id, " .field-name-text {\n          display: inline-block;\n        }\n\n        #").concat(id, " tr.first {\n          background: #F0F5FB;\n        }\n\n        #").concat(id, " tr.optional td {\n          color: rgb(153, 0, 51);\n        }\n\n        #").concat(id, " .details {\n          display: none;\n        }\n\n        #").concat(id, " #mobile-details {\n          display: none;\n        }\n\n        /* mobile view */\n        @media screen and (max-width: 600px) {\n          #").concat(id, " th.data-type-column,\n          #").concat(id, " th.description-column,\n          #").concat(id, " td.data-type,\n          #").concat(id, " td.description\n          {\n            display: none;\n          }\n\n          #").concat(id, " .details {\n            color: black;\n            cursor: pointer;\n            display: inline-block;\n            float: right;\n          }\n\n          #").concat(id, " .details-text {\n            display: inline-block;\n            margin-right: 5px;\n          }\n\n          #").concat(id, " .details-arrow, #").concat(id, " #back-arrow {\n            display: inline-block;\n            vertical-align: top;\n          }\n\n          #").concat(id, " #back-arrow {\n            margin-right: 5px;\n          }\n\n          #").concat(id, " #mobile-details {\n            background: white;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n            opacity: 0;\n            padding: 15px;\n            position: fixed;\n            transition: 2s;\n            right: 0;\n            top: 0;\n            z-index: -10;\n          }\n\n          #").concat(id, ":not([details=true]) #mobile-details {\n            display: none;\n            opacity: 0;\n          }\n\n          #").concat(id, "[details=true] #mobile-details {\n            display: block;\n            opacity: 1;\n            z-index: 11;\n          }\n\n          #").concat(id, " .dropdown {\n            padding-left: .15rem;\n            width: 20px;\n          }\n        }\n\n        #").concat(id, " td.back {\n          border: none;\n          cursor: pointer;\n          padding-bottom: 15px;\n          padding-top: 15px;\n          text-align: center;\n        }\n\n        #").concat(id, " td.back > div {\n          display: inline-block;\n        }\n\n        #").concat(id, " td.back:hover {\n          background: #323A45;\n          color: white;\n        }\n\n        #").concat(id, " td.back:hover .arrow-left {\n          border-right-color: white;\n        }\n\n        #mobile-data-type-column {\n          min-width: 75px;\n        }\n      </style>");
      }
    }, {
      key: "hasDropDown",
      value: function hasDropDown(item) {
        const type = item.type;
        return type.includes('array') && item.items.type !== 'string' || type.includes('object');
      }
    }, {
      key: "toggleDropDown",
      value: function toggleDropDown(event) {
        const target = event.target;
        const row = event.target.parentElement.parentElement.parentElement;
        const dropdownDiv = target.parentElement;
        const status = dropdownDiv.getAttribute('status');
        if (status === 'collapsed') dropdownDiv.setAttribute('status', 'expanded');else if (status === 'expanded') dropdownDiv.setAttribute('status', 'collapsed'); // iterate down rows setting display none to all until hit one with indent equal or less than current

        const indent = Number(row.getAttribute('indent') || 0);
        let sibling = row;

        while (sibling.nextElementSibling) {
          sibling = sibling.nextElementSibling;
          const siblingIndent = Number(sibling.getAttribute('indent') || 0);

          if (siblingIndent > indent) {
            if (sibling.style.display === 'none') {
              sibling.style.display = null;
            } else {
              sibling.style.display = 'none';
            }
          } else {
            break;
          }
        }
      }
    }, {
      key: "toggleOptionalFields",
      value: function toggleOptionalFields() {
        const attrName = "hide-optional-fields";
        const currentValue = this.getAttribute(attrName) || 'false';
        const newValue = currentValue === 'false' ? 'true' : 'false';
        this.setAttribute(attrName, newValue);
      }
    }, {
      key: "update",
      value: function update() {
        var _this4 = this;

        const url = this.getAttribute('url');

        if (url !== this.url) {
          this.url = url;
          this.getSchema(url).then(function (schema) {
            _this4.innerHTML = _this4.getHTML(); // fix weird bug where commas mysteriously appearing above table

            _this4.innerHTML = _this4.innerHTML.replace(/,{3,}/g, '');
          });
        }
      }
    }, {
      key: "prettify",
      value: function prettify(text) {
        text = this.urlify(text); // convert (1) cost: to \n\t(1) <b>cost</b>:

        const bulletRegex = /\(\d{1,2}\) [A-Za-z]{1,25}:/g;
        return text.replace(bulletRegex, function (match) {
          return "<br/>" + match.replace(/[A-Za-z]{1,25}/, function (name) {
            return "<b>".concat(name, "</b>");
          });
        });
      } // https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript

    }, {
      key: "urlify",
      value: function urlify(text) {
        const urlRegex = /(https?:\/\/[^\s']+)/g;
        return text.replace(urlRegex, function (url) {
          return "<a href=\"".concat(url, "\" target=\"_blank\">").concat(url, "</a>");
        });
      }
    }], [{
      key: "observedAttributes",
      get: function () {
        return ['url'];
      }
    }]);

    return JSONSchema;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('json-schema', JSONSchema);
})();
