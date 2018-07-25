import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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


/**
 * Class representing a search results page for repositories.
 */

@Component({
  selector: 'search-results',
  styles: [require('./search-results.styles.scss')],
  template: require('./search-results.template.html'),
  encapsulation: ViewEncapsulation.None,
})

export class SearchResultsComponent {
  public searchQuery: string = '';
  private bannerImage: SafeStyle;
  private queryValue: string = '';
  private routeSubscription: Subscription;
  private results = [];
  private filteredResults = [];
  private total: number;
  private isLoading = true;
  private filterForm: FormGroup;
  private metaForm: FormGroup;
  private pageSize = 10;
  private sort = 'relevance';
  private agencies = [];
  private licenses = [];
  private languages = [];

  /**
   * Constructs a SearchResultsComponent.
   *
   * @constructor
   * @param {StateService} stateService - A service for managing the state of the site
   * @param {ActivatedRoute} activatedRoute - The currently active route
   * @param {ClientService} clientService - A service for searching repositories
   */
  constructor(
    public stateService: StateService,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private hostElement: ElementRef,
    private cd: ChangeDetectorRef
  ) {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  }

  ngOnInit() {
    this.stateService.set('section', 'explore-code');

    this.routeSubscription = this.activatedRoute.queryParams.subscribe(
      (response: any) => {
        this.queryValue = response.q;
        this.clientService.search(this.queryValue, 100).subscribe(data => {
          let repos = data.repos;

          if (content.search && content.search.entities) {
            const entities = content.search.entities;
            repos = repos.filter(repo => {
              return entities.includes(repo.agency.name)
              || entities.includes(repo.agency.acronym)
              || entities.includes(repo.organization);
            });
          }

          this.results = repos;
          this.total = repos.length;
          this.isLoading = false;

          this.setFederalAgencies();
          this.setLanguages();
          this.setLicenses();
          this.cd.detectChanges();
        });
      }
    );
  }

  /**
   * On removal from the DOM, unsubscribe from URL updates.
   */
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  
  getFilterBoxValues(title) {
    try {
      return this.hostElement.nativeElement.querySelector(`filter-box[title='${title}']`).values;
    } catch (error) {
      console.error(`getFilterBoxValues caught the following error with ${title}`, error);
    }
  }

  filterUsageType(result) {
    const selectedUsageTypes = this.getFilterBoxValues('Usage Type');

    if (selectedUsageTypes.length === 0) {
      return true;
    } else {
      return selectedUsageTypes.includes(result.permissions.usageType);
    }
  }  

  filterOrgType(result) {
    const orgTypes = this.getFilterBoxValues('Organization Type');
    if (orgTypes.length === 0) {
      return true;
    } else {
      return orgTypes.includes(result.orgType || 'federal');
    }
  }

  filterFederalAgency(result) {
    const names = this.getFilterBoxValues('Federal Agency');
    if (names.length === 0) {
      return true;
    } else if (names.length > 0) {
      return names.includes(result.agency.name); 
    }
  }

  filterLanguages(result) {
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

  filterLicenses(result) {
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

  filterResults() {
    this.filteredResults = this.results
      .filter(this.filterLanguages.bind(this))
      .filter(this.filterLicenses.bind(this))
      .filter(this.filterUsageType.bind(this))
    //  .filter(this.filterOrgType.bind(this))
      .filter(this.filterFederalAgency.bind(this));
  }

  setLanguages() {
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

  setFederalAgencies() {
    this.agencies = Array.from(new Set(this.results.map(repo => repo.agency.name)));
  }

  setLicenses() {
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
  
  onFilterBoxChange(event) {
    this.filterResults();
  }
}
