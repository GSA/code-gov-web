import { Component } from '@angular/core';

import { StateService } from '../../services/state';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})
export class HomeComponent {
  url = 'https://pif.gov';

  constructor(public stateService: StateService) {
    this.stateService.set('section', 'home');
  }
}
