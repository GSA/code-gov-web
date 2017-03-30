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
  private activeRouteSub: Subscription;

  constructor(
    public stateService: StateService,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ){
    this.stateService.set('section', 'explore-code');
  }

  activeRoute$(): Observable<any> {
    return this.activatedRoute.queryParams;
  }

  newRouteSubscription(): Subscription {
    return this.activeRoute$().subscribe(
      (response: any) => {
        this.queryValue = response.q;
        this.searchQuery = '_fulltext=' + this.queryValue;
      }
    );
  }

  ngOnDestroy() {
    if (typeof this.activeRouteSub !== 'undefined') {
      this.activeRouteSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.activeRouteSub = this.newRouteSubscription();
  }
}
