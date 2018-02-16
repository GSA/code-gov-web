import { Component, Input } from '@angular/core';

@Component({
  selector: 'agency-list-item',
  styleUrls: ['./agency-list-item.styles.scss'],
  templateUrl: './agency-list-item.template.html'
})

export class AgencyListItemComponent {
  @Input() agency;

  constructor() {}

  getIcon() {
    return `assets/img/logos/agencies/${this.agency.id}-50x50.png`;
  }
}
