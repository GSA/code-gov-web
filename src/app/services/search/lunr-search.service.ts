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
import { AGENCIES } from '../agency';
import { SearchService } from './search.service';

@Injectable()

export class LunrSearchService implements SearchService {
  searchResultsReturned$: Observable<Array<any>>;
  total = 0;

  private repositoriesIndex: any;
  private agenciesIndex: any;
  private repositoriesByRef: Object = {};
  private agenciesByRef: Object = {};
  private searchObservable = new Observable();
  private results = [];
  private loadedResults = [];
  private currentIndex = 0;
  private pageSize = 20;
  private searchResultsReturnedSource = new BehaviorSubject<Array<any>>([]);

  constructor() {
    const repositoriesByRef = this.repositoriesByRef;
    const agenciesByRef = this.agenciesByRef;
    this.searchResultsReturned$ = this.searchResultsReturnedSource.asObservable();

    this.repositoriesIndex = lunr(function () {
      this.ref('repoID');
      this.field('name');
      this.field('agency');
      this.field('description');

      repos.forEach(function (repo) {
        repositoriesByRef[repo['repoID']] = repo;
        this.add(repo);
      }, this);
    });

    this.agenciesIndex = lunr(function () {
      this.ref('id');
      this.field('id');
      this.field('name');

      AGENCIES.forEach(function (agency) {
        agenciesByRef[agency['id']] = agency;
        this.add(agency);
      }, this);
    });
  }

  search(query: string) {
    const queryWithWildcards = query.trim().split(' ').map(word => `${word}* ${word}`).join(' ');
    const repositoriesSearchResults = this.repositoriesIndex.search(queryWithWildcards)
      .map(result => ({ score: result.score, item: this.getRepository(result.ref) }));
    const agenciesSearchResults = this.agenciesIndex.search(queryWithWildcards)
      .map(result => ({ score: result.score * 1.5, item: this.getAgency(result.ref) }));
    const searchResults = [...agenciesSearchResults, ...repositoriesSearchResults]
      .sort((a, b) => a.score > b.score ? -1 : a.score === b.score ? 0 : 1)
      .map(result => result.item);

    this.currentIndex = 0;
    this.results = searchResults;

    this.total = this.results.length;
    this.loadedResults = this.results
      .slice(this.currentIndex, this.currentIndex + this.pageSize);
    this.currentIndex = this.currentIndex + this.pageSize;
    this.searchResultsReturnedSource.next(this.loadedResults);
  }

  nextPage() {
    if (this.currentIndex <= this.total) {
      this.loadedResults = this.loadedResults.concat(
        this.results
          .slice(this.currentIndex, this.currentIndex + this.pageSize));
      this.currentIndex = this.currentIndex + this.pageSize;
      this.searchResultsReturnedSource.next(this.loadedResults);
    }
  }

  getAgency(ref) {
    return this.agenciesByRef[ref];
  }

  getRepository(ref) {
    return this.repositoriesByRef[ref];
  }
}
