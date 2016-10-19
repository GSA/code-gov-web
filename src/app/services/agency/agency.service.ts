import { Injectable } from '@angular/core';
import { AGENCIES } from './agency.data';

@Injectable()
export class AgencyService {
  agencies = AGENCIES;

  getAgencies() {
    return this.agencies;
  }

  getAgency(id) {
    return this.agencies.filter(agency => agency.id === id)[0];
  }
}
