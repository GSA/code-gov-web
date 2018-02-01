import { Injectable } from '@angular/core';
import { AGENCIES } from './agency.data';

@Injectable()
export class AgencyService {
  agencies: Agency[] = AGENCIES;

  getAgency(id): Agency {
    return this.agencies.find(agency => agency.id === id);
  }

  getByName(name: string): Agency {
    return this.agencies.find(agency => agency.name.toLowerCase() === name.toLowerCase());
  }
}

export interface Agency {
  id: string;
  name: string;
}
