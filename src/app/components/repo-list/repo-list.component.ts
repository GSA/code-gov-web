import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search';

@Component({
  selector: 'repo-list',
  template: require('./repo-list.template.html'),
  styles: [require('./repo-list.styles.scss')],
})

export class RepoListComponent {
  private results = [];
  private subscription: Subscription;
  private total: number;

  constructor(
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.searchResultsReturned$.subscribe(results => {
      this.results = results;
      this.total = this.searchService.total;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hasRepos() {
    return this.results.length > 0;
  }

  onScroll() {
    this.searchService.nextPage();
  }
}
