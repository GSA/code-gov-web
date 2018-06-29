import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Options } from '../options';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { api } from '../../../../config/code-gov-config.json';

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
  website?: string;
  codeUrl?: string;
  numRepos?: string;
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

export interface AgencyStatus {
  timestamp: string;
  statuses: object;
}

@Injectable()
export class ClientService {

  private BASE: string = api.base;
  private KEY: string = process.env.CODE_GOV_API_KEY || api.key;

  constructor (private http: Http) {
  }
  getStatuses(): Observable<AgencyStatus> {
    let url = this.BASE + 'status.json';
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => {
      return data;
    });
  }
  getAgencies(): Observable<Agency[]> {
    let url = this.BASE + `agencies?size=1000&api_key=${this.KEY}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => {
      return data.agencies.sort(function(a: Agency, b: Agency) {
        return a.name.localeCompare(b.name);
      });
    });
  }

  getAgencyByAcronym(acronym: string): Observable<Agency> {
    let url = this.BASE + `agencies?size=1000&api_key=${this.KEY}`;
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
    let url = this.BASE + `repos?agency.acronym=${acronym}&size=${size}&sort=name__asc&api_key=${this.KEY}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.repos);
  }

  getRepoByID(acronym: string = ''): Observable<Repo> {
    let url = this.BASE + `repos/${acronym}?api_key=${this.KEY}`;
    return this.http.get(url)
    .map((response: Response) => {
      var data = response.json();
      data.additional_data = {
        "project_doi": "http://dx.doi.org/10.1000/456%23789",
        "version_doi": "http://dx.doi.org/10.1000/456%23789",
        "publication": "BLa bla bal Publishers",
        "citation": "Pizzi C, Caraglia M, Cianciulli M, Fabbrocini A, Libroia A, Matano E, Contegiacomo A, Del Prete S, Abbruzzese A, Martignetti A, et al. 2002. Low-dose recombinant IL-2 induces psychological changes: monitoring by Minnesota Multiphasic Personality Inventory (MMPI). Anticancer Res. 22(2A):727–732.",
        "contributor(s)": ["Christopher Pizzi", "Michael Caraglia", "Morgan Cianciulli", "Alexander Fabbrocini", "Anders Libroia", "Eric Matano", "Alexander Contegiacomo", "Skippy Del Prete", "Alexander Abbruzzese", "Alexander Martignetti"],
        "language, natural": "English",
        "operating system": "Windows 10"
      };
      return data;
    });
  }

  suggest(term: string = '', size: number = 10) {
    let url = this.BASE + `terms?term=${term}&size=${size}&api_key=${this.KEY}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => data.terms);
  }

  search(text: string = '', size: number = 10) {
    let permissionsFilter = '&permissions.usageType=openSource&permissions.usageType=governmentWideReuse';
    let url = this.BASE + `repos?q=${text}` + permissionsFilter + `&size=${size}&api_key=${this.KEY}`;
    return this.http.get(url)
    .map((response: Response) => response.json())
    .map((data: any) => {
      data.repos.filter(repo => {
        return repo.permissions
          && repo.permissions.usageType
          && ['openSource', 'governmentWideReuse'].indexOf(repo.permissions.usageType) > -1;
      });
      return data;
    });
  }

}
