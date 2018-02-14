import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Options } from '../options';
import 'rxjs/add/operator/map';

interface Options {
  base?: string;
  debug?: boolean;
  environment?: string;
}

@Injectable()
export class ClientService {

  private BASE: string = 'https://code-api-staging.app.cloud.gov/api/0.1/';

  constructor (private http: Http) { }

  getAgencies() {
    let url = this.BASE + 'agencies';
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.agencies);
  }

  getAgencyRepos(agencyId = '', size = 10) {
    /*
      - permissions.usageType is 'openSource' or 'governmentWideReuse'
    */
    let url = this.BASE + `repos?agency.acronym=${agencyId}&size=${size}&sort=name__asc`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.repos);
  }

  getRepoByID(repoId = '') {
    let url = this.BASE + `repos/${repoId}`;
    return this.http.get(url)
    .map((response: Response) => response.json());
  }

  suggest(term = '', size = 10) {
    let url = this.BASE + `terms?term=${term}&size=${size}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.terms);
  }

   search(text = '', size = 10) {
     let url = this.BASE + `repos?q=${text}&size=${size}`;
     return this.http.get(url)
     .map((response: Response) => response.json());
   }

}
