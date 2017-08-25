import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search';

@Component({
  selector: 'repo-list',
  template: require('./repo-list.template.html'),
})

export class RepoListComponent {
  private repositories = [];
  private subscription: Subscription;
  private reposTotal: number;

  constructor(
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.searchResultsReturned$.subscribe(results => {
      this.repositories = results;
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
