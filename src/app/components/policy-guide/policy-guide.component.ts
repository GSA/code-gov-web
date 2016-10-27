import { Component } from '@angular/core';
import { StateService } from '../../services/state';

@Component({
  selector: 'policy-guide',
  styles: [require('./policy-guide.style.scss')],
  template: require('./policy-guide.template.html')
})
export class PolicyGuideComponent {

  constructor(public stateService: StateService) {
    this.stateService.set('section', 'policy-guide');
  }
}
