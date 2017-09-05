import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Class representing a subnav.
 */

@Component({
  selector: 'subnav',
  styles: [require('./subnav.style.scss')],
  template: require('./subnav.template.html'),
  encapsulation: ViewEncapsulation.None
})

export class SubnavComponent {

}
