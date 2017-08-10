import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { SearchService } from '../../services/search';
import { StateService } from '../../services/state';

@Component({
  selector: 'search-results',
  styles: [require('./search-results.styles.scss')],
  template: require('./search-results.template.html')
})

export class SearchResultsComponent {
  public searchQuery: string = '';
  private queryValue: string = '';
  private subscription: Subscription;

  constructor(
    public stateService: StateService,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
  ) {
    this.stateService.set('section', 'explore-code');

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (response: any) => {
        this.queryValue = response.q;
        this.searchService.search(this.queryValue);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
