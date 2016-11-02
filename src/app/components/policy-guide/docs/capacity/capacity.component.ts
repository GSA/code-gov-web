import { Component } from '@angular/core';

import { MobileService } from '../../../../services/mobile';

@Component({
  selector: 'capacity',
  template: require('./capacity.template.html')
})

export class CapacityComponent {

  constructor(private mobileService: MobileService) {
    this.mobileService.hideMenu();
  }
}
