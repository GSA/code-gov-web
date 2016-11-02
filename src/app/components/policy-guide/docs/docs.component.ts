import { Component, ViewEncapsulation } from '@angular/core';

import { MobileService } from '../../../services/mobile';

@Component({
  selector: 'docs',
  styles: [require('./docs.style.scss')],
  template: require('./docs.template.html'),
  encapsulation: ViewEncapsulation.None
})
export class DocsComponent {
  menuActive: boolean;

  constructor(private mobileService: MobileService) {
    this.menuActive = false;

    mobileService.activeMobileMenu$.subscribe(
      menuStatus => {
        this.menuActive = menuStatus;
      }
    );
  }
}
