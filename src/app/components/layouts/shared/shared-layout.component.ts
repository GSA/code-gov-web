import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-layout',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./shared-layout.style.scss')],
  template: require('./shared-layout.template.html'),
})

export class SharedLayoutComponent {
}
