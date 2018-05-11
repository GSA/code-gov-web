import { Component } from '@angular/core';
import { Agency, ClientService } from '../../../../services/client';

import { content } from '../../../../../../config/code-gov-config.json';

@Component({
  selector: 'agency-sidebar',
  styles: [require('./agency-sidebar.style.scss')],
  template: require('./agency-sidebar.template.html')
})


export class AgencySidebarComponent {
  agencies: Agency[];
  private browse_by_text: string = content.browse_projects.browse_by_text;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // don't need an observable because only doing this once
    this.clientService.getAgencies().subscribe(
      (agencies: Agency[]) => {

        if (content.browse_projects && content.browse_projects.agencies) {
          const incl = content.browse_projects.agencies;
          agencies = agencies.filter(agency => {
            return incl.includes(agency.acronym) || incl.includes(agency.name);
          });
        }
        this.agencies = agencies;
      }
    );
  }

  getIcon(agency: Agency) {
    return `assets/img/logos/agencies/${agency.acronym}-50x50.png`;
  }

}
