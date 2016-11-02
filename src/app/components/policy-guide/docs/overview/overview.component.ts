import { Component, Output, EventEmitter } from '@angular/core';

import { MobileService } from '../../../../services/mobile';

@Component({
  selector: 'overview',
  template: require('./overview.template.html')
})
export class OverviewComponent {

  constructor(private mobileService: MobileService) {
    this.mobileService.hideMenu();
  }
}
