import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import * as lunr from 'lunr';

import { repos } from '../../../assets/repos.json';
import { AGENCIES } from '../agency';
import { TermService } from './term.service';

@Injectable()

export class LunrTermService implements TermService {
  termResultsReturned$: Observable<Array<any>>;
  private repositoriesIndex: any;
  private agenciesIndex: any;
  private repositoriesByRef: Object = {};
  private agenciesByRef: Object = {};
  private termResultsReturnedSource = new BehaviorSubject<Array<any>>([]);

  constructor() {
    const repositoriesByRef = this.repositoriesByRef;
    const agenciesByRef = this.agenciesByRef;

    this.termResultsReturned$ = this.termResultsReturnedSource.asObservable();

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

  search(query) {
    const queryWithWildcards = query.trim().split(' ').map(word => `${word}* ${word}`).join(' ');
    const repositoriesSearchResults = this.repositoriesIndex.search(queryWithWildcards)
      .map(result => ({ score: result.score, item: this.getRepository(result.ref) }));
    const agenciesSearchResults = this.agenciesIndex.search(queryWithWildcards)
      .map(result => ({ score: result.score * 1.5, item: this.getAgency(result.ref) }));
    const searchResults = [...agenciesSearchResults, ...repositoriesSearchResults]
      .sort((a, b) => a.score > b.score ? -1 : a.score === b.score ? 0 : 1)
      .map(result => result.item);

    this.termResultsReturnedSource.next(
      searchResults
        .slice(0, 6));
  }

  getAgency(term) {
    return this.agenciesByRef[term];
  }

  getRepository(term) {
    return this.repositoriesByRef[term];
  }
}
