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
import { BaseFilterPageComponent } from '../base-filter-page';
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

export class SearchResultsComponent extends BaseFilterPageComponent {

  constructor(
    public stateService: StateService,
    public activatedRoute: ActivatedRoute,
    public clientService: ClientService,
    public sanitizer: DomSanitizer,
    public hostElement: ElementRef,
    public cd: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);

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

          super.setFederalAgencies();
          super.setLanguages();
          super.setLicenses();
          this.cd.detectChanges();
        });
      }
    );
  }

}
