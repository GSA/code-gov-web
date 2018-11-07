'use strict';

/*
  Takes in a config and data json and renders a dashboard

  The config JSON should include mappings between numerical scores and what text to display

  The data JSON should be an object matching an entity to requirement statuses
*/


(function() {
  /*global HTMLElement*/
  class ComplianceDashboard extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
      this.displayStatus = {
        'compliant': 'Fully compliant',
        'noncompliant': 'Non-compliant',
        'partial': 'Partially compliant'
      };
    }

    static get observedAttributes() {
      return ['config', 'data'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.update();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'config' || attrName === 'data') {
        this.update();
      }
    }

    getReqLine(req, status, text) {
      return `<div class="req-${this.uid} ${status}">${text}</div>`;
    }

    getCard(entry) {
      try {
        console.log("[@code.gov] starting getCard for:", entry);
        const { img, name, requirements } = entry;
        const overallStatus = this.getStatusAsText(requirements.overall);
        const { uid } = this
        return `<li class="card-${uid} ${overallStatus}">
          <div class="dashboard-entity-icon-${uid}">
            <img src="${img}" alt="image of logo for ${name}">
          </div>
          <div class="dashboard-entity-content">
            <div class="dashboard-entity-heading">
              <h3 class="h3-${uid}">${name}</h3>
              <h4 class="h4-${uid} ${overallStatus}">${this.displayStatus[overallStatus]}</h4>
              ${this.config.text.map(({req, variants}) => {
                const status =  this.getStatusAsText(entry.requirements.sub[req]);
                console.log("status:", status);
                return this.getReqLine(req, status, variants[status]);
              }).join('')}
            </div>
          </div>
        </li>`;

      } catch (error) {
        console.log("[@code.gov/compliance-dashboard] getCard is throwing an error")
        throw error;
      }
    }

    getHTML() {
      console.log("starting this.getHTML with", this.data);
      return `<div class="dashboard-container">
        <ul class="dashboard-list-${this.uid}">
          ${this.data.map(entry => this.getCard(entry)).join('')}
        </ul>
      </div>`;
    }


    getStatusAsText(score) {
      const scores = this.config.scores;
      for (let displayStatus in scores) {
        const [min, max] = scores[displayStatus];
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

    getStyle() {
      const { uid } = this
      return `
      <style>

        #cd-${uid} .dashboard-list-${uid} {
          list-style-type: none;
          padding-left: 0;
        }

        #cd-${uid} .card-${uid} {
          background: white;
          border: 1px solid #aeb0b5;
          border-left: 2em solid white;
          box-sizing: border-box;
          color: #5b616b;
          display: block;
          font-size: 0.95em;
          margin-bottom: 1em;
          margin-left: 15px;
          overflow: hidden;
          padding: 0.5em;
          padding-left: 8em;
          padding-right: 1em;
          position: relative;
          text-decoration: none;
        }

        #cd-${uid} .dashboard-entity-icon-${uid} {
          left: 1.5em;
          position: absolute;
          top: 1.5em;
          vertical-align: middle;
          width: 5em;
        }

        #cd-${uid} .dashboard-entity-icon-${uid} img{
          width: 100%;
        }

        #cd-${uid} .card-${uid}.compliant {
          border-left-color: #2e8540;
        }

        #cd-${uid} .card-${uid}.partial {
          border-left-color: #fdb81e;
        }

        #cd-${uid} .card-${uid}.noncompliant {
          border-left-color: #981b1e;
        }

        .h3-${uid} {
          font-family: "TT Lakes", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
          font-size: 2rem;
          font-weight: 500;
          line-height: 1.3em;
          margin-bottom: 0;
          margin-top: 0;
        }

        .h4-${uid} {
          color: #5b616b;
          font-family: "TT Lakes", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 500;
        }

        .h4-${uid}.noncompliant {
          color: #981b1e;
        }

        .h4-${uid}.partial {
          color: #9a6b01;
        }

        .h4-${uid}.compliant {
          color: #2e8540;
        }

        .req-${uid} {
          border-bottom: 1px solid #e9e9e9;
          border-left: 1.25em solid white;
          color: #5b616b;
          font-size: 0.9em;
          margin-bottom: .5em;
          margin-right: 2em;
          max-width: 35em;
          padding-left: .5em;
        }

        .req-${uid}.compliant {
          border-left-color: #2e8540;
        }

        .req-${uid}.partial {
          border-left-color: #fdb81e;
        }

        .req-${uid}.noncompliant {
          border-left-color: #981b1e;
        }
      </style>`
    }

    update() {
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
        this.innerHTML = this.getStyle()+this.getHTML();
      }
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('compliance-dashboard', ComplianceDashboard);
})();
