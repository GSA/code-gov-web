'use strict';
/*
  Takes in a config and data json and renders a dashboard

  The config JSON should include mappings between numerical scores and what text to display

  The data JSON should be an object matching an entity to requirement statuses
*/

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
  /*global HTMLElement*/
  let ComplianceDashboard =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(ComplianceDashboard, _HTMLElement);

    function ComplianceDashboard() {
      var _this;

      _classCallCheck(this, ComplianceDashboard);

      // establish prototype chain
      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComplianceDashboard).call(this));
      _this.displayStatus = {
        'compliant': 'Fully compliant',
        'noncompliant': 'Non-compliant',
        'partial': 'Partially compliant'
      };
      return _this;
    }

    _createClass(ComplianceDashboard, [{
      key: "connectedCallback",
      // fires after the element has been attached to the DOM
      value: function connectedCallback() {
        this.update();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'config' || attrName === 'data') {
          this.update();
        }
      }
    }, {
      key: "getReqLine",
      value: function getReqLine(req, status, text) {
        return "<div class=\"req-".concat(this.uid, " ").concat(status, "\">").concat(text, "</div>");
      }
    }, {
      key: "getCard",
      value: function getCard(entry) {
        var _this2 = this;

        try {
          console.log("[@code.gov] starting getCard for:", entry);
          const img = entry.img,
                name = entry.name,
                requirements = entry.requirements;
          const overallStatus = this.getStatusAsText(requirements.overall);
          const uid = this.uid;
          return "<li class=\"card-".concat(uid, " ").concat(overallStatus, "\">\n          <div class=\"dashboard-entity-icon-").concat(uid, "\">\n            <img src=\"").concat(img, "\" alt=\"image of logo for ").concat(name, "\">\n          </div>\n          <div class=\"dashboard-entity-content\">\n            <div class=\"dashboard-entity-heading\">\n              <h3 class=\"h3-").concat(uid, "\">").concat(name, "</h3>\n              <h4 class=\"h4-").concat(uid, " ").concat(overallStatus, "\">").concat(this.displayStatus[overallStatus], "</h4>\n              ").concat(this.config.text.map(function (textPart) {
            const req = textPart.req,
                  variants = textPart.variants;

            const status = _this2.getStatusAsText(entry.requirements.sub[req]);

            console.log("status:", status);
            return _this2.getReqLine(req, status, variants[status]);
          }).join(''), "\n            </div>\n          </div>\n        </li>");
        } catch (error) {
          console.log("[@code.gov/compliance-dashboard] getCard is throwing an error");
          throw error;
        }
      }
    }, {
      key: "getHTML",
      value: function getHTML() {
        var _this3 = this;

        console.log("starting this.getHTML with", this.data);
        return "<div class=\"dashboard-container\">\n        <ul class=\"dashboard-list-".concat(this.uid, "\">\n          ").concat(this.data.map(function (entry) {
          return _this3.getCard(entry);
        }).join(''), "\n        </ul>\n      </div>");
      }
    }, {
      key: "getStatusAsText",
      value: function getStatusAsText(score) {
        const scores = this.config.scores;

        for (let displayStatus in scores) {
          const _scores$displayStatus = _slicedToArray(scores[displayStatus], 2),
                min = _scores$displayStatus[0],
                max = _scores$displayStatus[1];

          if (typeof min === 'number' && typeof max === 'number') {
            if (min <= score && score <= max) {
              return displayStatus;
            }
          } else if (typeof min === 'number' && typeof max !== 'number') {
            if (min <= score) {
              return displayStatus;
            }
          } else if (typeof min !== 'number' && typeof max == 'number') {
            if (score <= max) {
              return displayStatus;
            }
          }
        }

        return '';
      }
    }, {
      key: "getStyle",
      value: function getStyle() {
        const uid = this.uid;
        return "\n      <style>\n\n        #cd-".concat(uid, " .dashboard-list-").concat(uid, " {\n          list-style-type: none;\n          padding-left: 0;\n        }\n\n        #cd-").concat(uid, " .card-").concat(uid, " {\n          background: white;\n          border: 1px solid #aeb0b5;\n          border-left: 2em solid white;\n          box-sizing: border-box;\n          color: #5b616b;\n          display: block;\n          font-size: 0.95em;\n          margin-bottom: 1em;\n          margin-left: 15px;\n          overflow: hidden;\n          padding: 0.5em;\n          padding-left: 8em;\n          padding-right: 1em;\n          position: relative;\n          text-decoration: none;\n        }\n\n        #cd-").concat(uid, " .dashboard-entity-icon-").concat(uid, " {\n          left: 1.5em;\n          position: absolute;\n          top: 1.5em;\n          vertical-align: middle;\n          width: 5em;\n        }\n\n        #cd-").concat(uid, " .dashboard-entity-icon-").concat(uid, " img{\n          width: 100%;\n        }\n\n        #cd-").concat(uid, " .card-").concat(uid, ".compliant {\n          border-left-color: #2e8540;\n        }\n\n        #cd-").concat(uid, " .card-").concat(uid, ".partial {\n          border-left-color: #fdb81e;\n        }\n\n        #cd-").concat(uid, " .card-").concat(uid, ".noncompliant {\n          border-left-color: #981b1e;\n        }\n\n        .h3-").concat(uid, " {\n          font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n          font-size: 2rem;\n          font-weight: 500;\n          line-height: 1.3em;\n          margin-bottom: 0;\n          margin-top: 0;\n        }\n\n        .h4-").concat(uid, " {\n          color: #5b616b;\n          font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n          font-weight: 500;\n        }\n\n        .h4-").concat(uid, ".noncompliant {\n          color: #981b1e;\n        }\n\n        .h4-").concat(uid, ".partial {\n          color: #9a6b01;\n        }\n\n        .h4-").concat(uid, ".compliant {\n          color: #2e8540;\n        }\n\n        .req-").concat(uid, " {\n          border-bottom: 1px solid #e9e9e9;\n          border-left: 1.25em solid white;\n          color: #5b616b;\n          font-size: 0.9em;\n          margin-bottom: .5em;\n          margin-right: 2em;\n          max-width: 35em;\n          padding-left: .5em;\n        }\n\n        .req-").concat(uid, ".compliant {\n          border-left-color: #2e8540;\n        }\n\n        .req-").concat(uid, ".partial {\n          border-left-color: #fdb81e;\n        }\n\n        .req-").concat(uid, ".noncompliant {\n          border-left-color: #981b1e;\n        }\n      </style>");
      }
    }, {
      key: "update",
      value: function update() {
        this.uid = Math.ceil((Math.random() * 10e3).toString());
        this.setAttribute('id', 'cd-' + this.uid);
        this.config = JSON.parse(this.getAttribute('config'));

        if (!this.config) {
          console.warn("[@code.gov/compliance-dashboard] You did not set the config attribute in case you are wondering why nothing is appearing.");
        }

        this.data = JSON.parse(this.getAttribute('data'));

        if (!this.data) {
          console.warn("[@code.gov/compliance-dashboard] You did not set the data attribute in case you are wondering why nothing is appearing.");
        }

        if (this.config && this.data) {
          this.innerHTML = this.getStyle() + this.getHTML();
        }
      }
    }], [{
      key: "observedAttributes",
      get: function () {
        return ['config', 'data'];
      }
    }]);

    return ComplianceDashboard;
  }(_wrapNativeSuper(HTMLElement)); // let the browser know about the custom element

  /*global customElements*/


  customElements.define('compliance-dashboard', ComplianceDashboard);
})();
