import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ApiService } from '../api';

@Injectable()
export class AgencyService extends ApiService {
  public agencies: any;

  constructor(private http: Http) {
    super(http);
  }

  getAgency(term, value) {
    return this.agencies.filter(agency => agency[term].toLowerCase() === value.toLowerCase())[0];
  }

  getAgencies() {
    let query = '?size=100';
    return super.fetch('agencies', query);
  }

  setAgencies(agencies) {
    this.agencies = agencies;
  }
}
