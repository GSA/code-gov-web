import { Component } from '@angular/core';
import { StateService } from '../../services/state';

@Component({
  selector: 'privacy-policy',
  styles: [require('./privacy-policy.style.scss')],
  template: require('./privacy-policy.template.html')
})

export class PrivacyPolicyComponent {

  constructor(public stateService: StateService) {
    this.stateService.set('section', 'privacy-policy');
  }
}
