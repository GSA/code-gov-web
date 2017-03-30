import { Component } from '@angular/core';
import { MobileService } from '../../services/mobile';
import { StateService } from '../../services/state';

@Component({
  selector: 'agencies',
  styles: [require('./agencies.style.scss')],
  template: require('./agencies.template.html')
})

export class AgenciesComponent {

  constructor(
    public stateService: StateService,
    private mobileService: MobileService
  ) {
    this.stateService.set('section', 'explore-code');
    this.mobileService.hideMenu();
  }
}
