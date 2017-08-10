import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import * as lunr from 'lunr';

import { repos } from '../../../assets/repos.json';
import { TermService } from './term.service';

@Injectable()

export class LunrTermService implements TermService {
  termResultsReturned$: Observable<Array<any>>;
  private idx: any;
  private reposByRef: Object = {};
  private termResultsReturnedSource = new Subject<Array<any>>();

  constructor() {
    const reposByRef = this.reposByRef;

    this.termResultsReturned$ = this.termResultsReturnedSource.asObservable();

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

  search(query) {
    const queryWithWildcards = query.trim().split(' ').map(word => `${word}* ${word}`).join(' ');
    const searchResults = this.idx.search(queryWithWildcards);
    this.termResultsReturnedSource.next(
      searchResults
        .slice(0, 6)
        .map(result => this.getRepository(result.ref)));
  }

  getRepository(term) {
    return this.reposByRef[term];
  }
}
