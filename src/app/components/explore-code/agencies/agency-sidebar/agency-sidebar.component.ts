import { Component } from '@angular/core';
import { AgencyService, Agency } from '../../../../services/agency';

@Component({
  selector: 'agency-sidebar',
  styleUrls: ['./agency-sidebar.style.scss'],
  templateUrl: './agency-sidebar.template.html'
})

export class AgencySidebarComponent {
  agencies: Agency[];

  constructor(
    private agencyService: AgencyService
  ) {
  }

  ngOnInit() {
    this.agencies = this.agencyService.getAgencies();
  }

  getIcon(agency) {
    return this.agencyService.getIcon(agency);
  }

}
