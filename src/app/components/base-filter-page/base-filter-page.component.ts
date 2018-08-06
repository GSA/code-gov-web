import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import * as licenseList from 'spdx-license-list';
import { ClientService } from '../../services/client';
import { StateService } from '../../services/state';
import * as allLanguages from '../../../enums/languages.json';

import { content, images } from '../../../../config/code-gov-config.json';

const licenseNameToId = {};
const licenseIdToName = {};
Object.entries(licenseList).forEach(values => {
  const [licenseId, licenseData] = values;
  const licenseName = licenseData.name;
  licenseNameToId[licenseName] = licenseId;
  licenseIdToName[licenseId] = licenseName;
});


@Component({
  selector: 'base-filter-page',
  template: ''
})

export class BaseFilterPageComponent {
  public searchQuery: string = '';
  public bannerImage: SafeStyle;
  public queryValue: string = '';
  public routeSubscription: Subscription;
  public results = [];
  public filteredResults = [];
  public total: number;
  public isLoading = true;
  public pageSize = 10;
  public sort = 'relevance';
  public agencies = [];
  public licenses = [];
  public languages = [];
  public hostElement: ElementRef;


  /**
   * On removal from the DOM, unsubscribe from URL updates.
   */
  public ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  
  public getFilterBoxValues(title) {
    try {
      return this.hostElement.nativeElement.querySelector(`filter-box[title='${title}']`).values;
    } catch (error) {
      console.error(`getFilterBoxValues caught the following error with ${title}`, error);
    }
  }

  public filterUsageType(result) {
    const selectedUsageTypes = this.getFilterBoxValues('Usage Type');

    if (selectedUsageTypes.length === 0) {
      return true;
    } else {
      return selectedUsageTypes.includes(result.permissions.usageType);
    }
  }  

  public filterOrgType(result) {
    const orgTypes = this.getFilterBoxValues('Organization Type');
    if (orgTypes.length === 0) {
      return true;
    } else {
      return orgTypes.includes(result.orgType || 'federal');
    }
  }

  public filterFederalAgency(result) {
    const names = this.getFilterBoxValues('Federal Agency');
    if (names.length === 0) {
      return true;
    } else if (names.length > 0) {
      return names.includes(result.agency.name); 
    }
  }

  public filterLanguages(result) {
    const selectedLangs = this.getFilterBoxValues('Language');

    if (selectedLangs.length === 0) {
      return true;
    } else if (selectedLangs.length > 0) {
      const repoLanguages = result.languages;
      if (Array.isArray(repoLanguages)) {
        return repoLanguages.some(repoLang => selectedLangs.includes(repoLang));
      }
    }
  }

  public filterLicenses(result) {
    const selectedLicenseIds = this.getFilterBoxValues('License');
    const selectedLicenseNames = selectedLicenseIds.map(id => licenseIdToName[id]);
    let selectedLicenses = Array.from(new Set(selectedLicenseIds.concat(selectedLicenseNames)));

    if (selectedLicenseIds.length === 0) {
      return true;      
    } else if (selectedLicenseIds.length > 0) {
      if (Array.isArray(result.permissions.licenses)) {
        const objLicenseNames = result.permissions.licenses.map(license => license.name);
        return selectedLicenses.some(l => objLicenseNames.includes(l));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public filterResults() {
    this.filteredResults = this.results
      .filter(this.filterLanguages.bind(this))
      .filter(this.filterLicenses.bind(this))
      .filter(this.filterUsageType.bind(this))
    //  .filter(this.filterOrgType.bind(this))
      .filter(this.filterFederalAgency.bind(this));
  }

  public setLanguages() {
    let languages = new Set();
    this.results.forEach(result => {
      if (Array.isArray(result.languages)) {
        result.languages.forEach(language=> {
          if (allLanguages.includes(language)) {
            languages.add(language);
          }
        });
      }
    });
    this.languages = Array.from(languages).sort();
  }

  public setFederalAgencies() {
    this.agencies = Array.from(new Set(this.results.map(repo => repo.agency.name)));
  }

  public setLicenses() {
    let licenses = new Set();
    this.results.forEach(result => {
      if (result.permissions && result.permissions.licenses) {
        result.permissions.licenses.forEach(license => {
          if (license.name) {
            const licenseName = license.name;
            if (licenseNameToId.hasOwnProperty(licenseName)) {
              licenses.add(JSON.stringify({ name: licenseName, value: licenseNameToId[licenseName] }));
            } else if (licenseIdToName.hasOwnProperty(licenseName)) {
              licenses.add(JSON.stringify({ name: licenseIdToName[licenseName], value: licenseName }));
            }
          }
        });
      }
    });
    this.licenses = Array.from(licenses)
      .map(license => JSON.parse(license))
      .sort((a, b) => a.name < b.name ? -1 : 1);      
  }
  
  public onFilterBoxChange(event) {
    this.filterResults();
  }
}
