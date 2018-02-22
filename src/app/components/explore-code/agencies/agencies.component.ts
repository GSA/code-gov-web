import { Component } from '@angular/core';

import { MobileService } from '../../../services/mobile';

@Component({
  selector: 'agencies',
  styles: [require('./agencies.style.scss')],
  template: require('./agencies.template.html')
})

export class AgenciesComponent {

  constructor(private mobileService: MobileService) {
    console.error("starting agencies.componet.ts");
    this.mobileService.hideMenu();
  }
}
