import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { SearchService } from '../../services/search';

@Component({
  selector: 'repo-list',
  template: require('./repo-list.template.html')
})

export class RepoListComponent {
  @Input() query;
  public hasRepos: boolean = false;
  public showLoadMore: boolean = false;
  public repos: any;
  private numberOfReposToFetch: number = 15;
  private loadedRepos: any;
  private reposTotal: number = 0;
  private scrollTriggered: boolean = false;
  private searchStart: number = 0;
  private reposSub: Subscription;

  constructor(private searchService: SearchService){}

  checkRepos(): boolean {
    return this.repos != null && this.repos.length > 0;
  }

  getMoreRepos() {
    this.searchService.search(
      this.searchStart,
      this.numberOfReposToFetch,
      this.query
    )
    .subscribe(
      result => {
        if (result) {
          this.scrollTriggered = true;
          this.loadedRepos = result['repos'];
        } else {
          console.log("No Repos Found");
        }
      },
      error => {
        console.log(error)
      }
    );
  }

  loadMore() {
    if (this.remainingRepos()) {
      let returnedReposCount = this.loadedRepos.length
      this.repos.push(...this.loadedRepos);
      this.searchStart += returnedReposCount;

      if (this.remainingRepos()) {
        this.scrollTriggered = false;
      } else {
        this.showLoadMore = false;
      }
    }
  }

  newSearch(): Observable<any> {
    return this.searchService.search(
      this.searchStart,
      this.numberOfReposToFetch,
      this.query
    );
  }

  newSearchSubscription(): Subscription {
    return this.newSearch().subscribe(
      (response: any) => {
        this.searchStart = response.repos.length;
        this.reposTotal = response.total;
        this.repos = response.repos;
        this.hasRepos = this.checkRepos();
        this.showLoadMore = this.remainingRepos();
      }
    );
  }

  ngOnChanges() {
    this.reposTotal = 0;
    this.searchStart = 0;
    this.reposSub = this.newSearchSubscription();
  }

  ngOnDestroy() {
    if (typeof this.reposSub !== 'undefined') {
      this.reposSub.unsubscribe();
    }
  }

  onScroll() {
    //Triggered by Infinite Scroll
    if (this.scrollTriggered === false) {
      this.getMoreRepos();
    }
  }

  remainingRepos(): boolean {
    return this.searchStart < this.reposTotal;
  }
}
