import { Component } from '@angular/core';
import { Agency } from '../../../../services/agency';
import { ClientService } from '../../../../services/client';

@Component({
  selector: 'agency-sidebar',
  styles: [require('./agency-sidebar.style.scss')],
  template: require('./agency-sidebar.template.html')
})

export class AgencySidebarComponent {
  agencies: Agency[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // don't need an observable because only doing this once
    this.clientService.getAgencies().subscribe(agencies => {
      this.agencies = agencies;
    });
  }

  getIcon(agency) {
    return `assets/img/logos/agencies/${agency.acronym}-50x50.png`;
  }

}
