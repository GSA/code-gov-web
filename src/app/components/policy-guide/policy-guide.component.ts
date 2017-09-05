import { Component } from '@angular/core';
import { StateService } from '../../services/state';

/**
 * Class representing the policy guide.
 */

@Component({
  selector: 'policy-guide',
  styles: [require('./policy-guide.style.scss')],
  template: require('./policy-guide.template.html')
})
export class PolicyGuideComponent {

  /**
   * Constructs a PolicyGuideComponent.
   *
   * @constructor
   * @param {StateService} stateService - A service for managing the state of the site
   */
  constructor(public stateService: StateService) {
    this.stateService.set('section', 'policy-guide');
  }
}
