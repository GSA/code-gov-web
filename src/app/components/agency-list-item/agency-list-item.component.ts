import { Component, Input } from '@angular/core';

@Component({
  selector: 'agency-list-item',
  styles: [require('./agency-list-item.styles.scss')],
  template: require('./agency-list-item.template.html')
})

export class AgencyListItemComponent {
  @Input() agency;

  constructor() {}
}
