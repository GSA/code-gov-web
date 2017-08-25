import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search';

@Component({
  selector: 'repo-list',
  template: require('./repo-list.template.html'),
  styles: [require('./repo-list.styles.scss')],
})

export class RepoListComponent {
  private repositories = [];
  private subscription: Subscription;
  private total: number;

  constructor(
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.searchResultsReturned$.subscribe(results => {
      this.repositories = results;
      this.total = this.searchService.total;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hasRepos() {
    return this.repositories.length > 0;
  }

  onScroll() {
    this.searchService.nextPage();
  }
}
