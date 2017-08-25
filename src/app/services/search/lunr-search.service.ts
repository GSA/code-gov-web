import {
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import * as lunr from 'lunr';

import { repos } from '../../../assets/repos.json';
import { SearchService } from './search.service';

@Injectable()

export class LunrSearchService implements SearchService {
  searchResultsReturned$: Observable<Array<any>>;

  private idx: any;
  private reposByRef: Object = {};
  private searchObservable = new Observable();
  private results = [];
  private repositories = [];
  private currentIndex = 0;
  private pageSize = 20;
  private total = 0;
  private searchResultsReturnedSource = new BehaviorSubject<Array<any>>([]);

  constructor() {
    const reposByRef = this.reposByRef;
    this.searchResultsReturned$ = this.searchResultsReturnedSource.asObservable();

    this.idx = (<any>window).idx = lunr(function () {
      this.ref('repoID');
      this.field('name');
      this.field('agency');
      this.field('description');

      repos.forEach(function (repo) {
        reposByRef[repo['repoID']] = repo;
        this.add(repo);
      }, this);
    });
  }

  search(query: string) {
    const queryWithWildcards = query.trim().split(' ').map(word => `${word}* ${word}`).join(' ');
    this.currentIndex = 0;
    this.results = this.idx.search(queryWithWildcards);
    this.total = this.results.length;
    this.repositories = this.results
      .slice(this.currentIndex, this.currentIndex + this.pageSize)
      .map(result => this.getRepository(result));
    this.currentIndex = this.currentIndex + this.pageSize;
    this.searchResultsReturnedSource.next(this.repositories);
  }

  nextPage() {
    if (this.currentIndex <= this.total) {
      this.repositories = this.repositories.concat(
        this.results
          .slice(this.currentIndex, this.currentIndex + this.pageSize)
          .map(result => this.getRepository(result)));
      this.currentIndex = this.currentIndex + this.pageSize;
      this.searchResultsReturnedSource.next(this.repositories);
    }
  }

  getRepository(searchResult) {
    return this.reposByRef[searchResult.ref];
  }
}
