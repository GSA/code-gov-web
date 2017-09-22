import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-layout',
  encapsulation: ViewEncapsulation.None,
  template: require('./shared-layout.template.html'),
})

export class SharedLayoutComponent {
}
