import { JsonPipe } from '@angular/common';
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { ClientService } from '../../services/client';
import { StateService } from '../../services/state';

import { content, images } from '../../../../config/code-gov-config.json';

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
    private hostElement: ElementRef    
  ) {

    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);

    this.filterForm = formBuilder.group({
      languages: {},
      licenses: {},
      usageTypes: {},
    });

    this.filterForm.setControl('usageTypes', this.formBuilder.group({
      openSource: false,
      governmentWideReuse: false,
    }));

    this.filterForm.valueChanges.subscribe(data => {
      this.filterResults();
    });

    /*
    this.metaForm = formBuilder.group({
      pageSize: this.pageSize,
      sort: this.sort,
    });
    */

    /*
    this.metaForm.valueChanges.subscribe(data => {
      this.pageSize = data.pageSize;
      this.sort = data.sort;

      this.filterResults();
    });
    */
    
    this.clientService.getAgencies().subscribe(data => {
      this.agencies = data.map(agency => agency.name);
    });
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
          this.buildFormControl('languages', this.getLanguages());
          this.buildFormControl('licenses', this.getLicenses());
          this.isLoading = false;
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

  buildFormControl(property, values) {
    this.filterForm.setControl(property, this.formBuilder.group(values.reduce((obj, key) => {
      obj[key] = this.formBuilder.control(false);
      return obj;
    }, {})));
  }

  /*
  sortResults(results) {
    if (this.metaForm.value.sort === 'date') {
      return results.sort((a, b) => {
        // Move entries without dates to the very end.
        if (!a.date) {
          return -1;
        }

        if (!b.date) {
          return 1;
        }

        return a.date.lastModified > b.date.lastModified ? -1 : a.date.lastModified === b.date.lastModified ? 0 : 1;
      });
    } else if (this.metaForm.value.sort === 'relevance') {
      return results.sort((a, b) => {
        return a.searchScore > b.searchScore ? -1 : a.searchScore === b.searchScore ? 0 : 1;
      });
    }
  }
  */

  getFilteredValues(property) {
    return Object.keys(this.filterForm.value[property]).filter(key => this.filterForm.value[property][key]);
  }
  
  filterOrgType(result) {
    const orgTypes = this.hostElement.nativeElement.querySelector("filter-box[title='Organization Type']").values;
    if (orgTypes.length === 0) {
      return true;
    } else {
      return orgTypes.includes(result.orgType || 'federal');
    }
  }

  filterFederalAgency(result) {
    const names = this.hostElement.nativeElement.querySelector("filter-box[title='Federal Agency']").values;
    if (names.length === 0) {
      return true;
    } else if (names.length > 0) {
      return names.includes(result.agency.name); 
    }
  }

  filterLanguages(result) {
    const filteredLanguages = this.getFilteredValues('languages');

    if (filteredLanguages.length > 0) {
      if (Array.isArray(result.languages)) {
        return filteredLanguages.every(l => result.languages.indexOf(l) > -1);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  filterLicenses(result) {
    const filteredLicenses = this.getFilteredValues('licenses');

    if (!result.permissions || !result.permissions.licenses || filteredLicenses.length === 0) {
      return true;
    }

    if (Array.isArray(result.permissions.licenses)) {
      return filteredLicenses.every(l => result.permissions.licenses.map(license => license.name).indexOf(l) > -1);
    } else {
      return false;
    }
  }

  filterUsageTypes(result) {
    const filteredUsageTypes = this.getFilteredValues('usageTypes');

    if (!result.permissions || !result.permissions.usageType || filteredUsageTypes.length === 0) {
      return true;
    }

    if (result.permissions.usageType) {
      return filteredUsageTypes.every(ut => result.permissions.usageType === ut);
    } else {
      return false;
    }
  }

  filterResults() {
    console.log("starting filterResults");
    this.filteredResults = this.results.filter(this.filterLanguages.bind(this))
      .filter(this.filterLicenses.bind(this))
      .filter(this.filterUsageTypes.bind(this))
    //  .filter(this.filterOrgType.bind(this))
      .filter(this.filterFederalAgency.bind(this));
  }

  getLanguages() {
    let languages = new Set();
    this.results.forEach(result => {
      if (Array.isArray(result.languages)) {
        result.languages.forEach((language: string) => {
          languages.add(language);
        });
      }
    });
    return Array.from(languages);
  }

  getLicenses() {
    let licenses = new Set();
    this.results.forEach(result => {
      if (result.permissions && result.permissions.licenses) {
        result.permissions.licenses.forEach(license => {
          if (license.name) {
            licenses.add(license.name);
          }
        });
      }
    });
    return Array.from(licenses);
  }
  
  onFilterBoxChange(event) {
    console.error("starting onFilterBoxChange");
    this.filterResults();
  }
}
