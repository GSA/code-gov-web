import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Options } from '../options';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

interface Options {
  base?: string;
  debug?: boolean;
  environment?: string;
}

export interface Requirements {
  agencyWidePolicy: number;
  openSourceRequirement: number;
  inventoryRequirement: number;
  schemaFormat: number;
  overallCompliance: number;
}

export interface Agency {
  acronym: string;
  name: string;
  website: string;
  codeUrl: string;
  numRepos: string;
  requirements?: Requirements;
}

export interface Contact {
  email: string;
}

export interface License {
  URL: string;
  name: string;
}

export interface Permissions {
  usageType: string;
  exemptionText: string;
  licenses: License[];
}

export interface Date {
  created: string;
  lastModified: string;
  metadataLastUpdated: string;
}

export interface RelatedCode {
  codeName: string;
  codeURL: string;
  isGovernmentRepo: boolean;
}

export interface ReusedCode {
  name: string;
  URL: string;
}

export interface Repo {
  name: string;
  description: string;
  tags: string[];
  contact: Contact;
  agency: Agency;
  laborHours: number;
  repositoryURL: string;
  homepageURL: string;
  permissions: Permissions;
  date: Date;
  vcs: string;
  disclaimerText: string;
  disclaimerURL: string;
  relatedCode: RelatedCode[];
  reusedCode: ReusedCode[];
  repoID: string;
}

@Injectable()
export class ClientService {

  //private BASE: string = 'https://code-api-staging.app.cloud.gov/api/0.1/';
  private BASE: string = 'https://code-api.app.cloud.gov/api/0.1/';

  constructor (private http: Http) { }

  getAgencies(): Observable<Agency[]> {
    let url = this.BASE + 'agencies';
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => {
      return data.agencies.sort(function(a: Agency, b: Agency) {
        return a.name.localeCompare(b.name);
      });
    });
  }

  getAgencyByAcronym(acronym: string): Observable<Agency> {
    let url = this.BASE + 'agencies';
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => {
      return data.agencies.find((agency: Agency) => agency.acronym === acronym);
    });
  }

  getAgencyRepos(acronym: string = '', size: number = 10): Observable<Repo[]> {
    /*
      - permissions.usageType is 'openSource' or 'governmentWideReuse'
    */
    console.error("starting getAgencyRepos with", acronym, "and", size);
    let url = this.BASE + `repos?agency.acronym=${acronym}&size=${size}&sort=name__asc`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.repos);
  }

  getRepoByID(acronym: string = ''): Observable<Repo> {
    let url = this.BASE + `repos/${acronym}`;
    return this.http.get(url)
    .map((response: Response) => response.json());
  }

  suggest(term: string = '', size: number = 10) {
    let url = this.BASE + `terms?term=${term}&size=${size}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.terms);
  }

  search(text: string = '', size: number = 10) {
    let url = this.BASE + `repos?q=${text}&size=${size}`;
    return this.http.get(url)
    .map((response: Response) => response.json());
  }

}
