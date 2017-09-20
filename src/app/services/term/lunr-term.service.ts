import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { AgenciesIndexService, ReleasesIndexService } from '../indexes';
import { TermService } from './term.service';

@Injectable()

export class LunrTermService implements TermService {
  termResultsReturned$: Observable<Array<any>>;
  private repositoriesIndex: any;
  private agenciesIndex: any;
  private agenciesByRef: Object = {};
  private termResultsReturnedSource = new BehaviorSubject<Array<any>>([]);
  private agenciesSource: Subject<any> = new Subject();
  private releasesSource: Subject<any> = new Subject();
  private agenciesSubscription: Subscription;
  private releasesSubscription: Subscription;
  private agenciesResults = [];
  private releasesResults = [];

  constructor(
    private agenciesIndexService: AgenciesIndexService,
    private releasesIndexService: ReleasesIndexService,
  ) {
    const agenciesByRef = this.agenciesByRef;

    this.termResultsReturned$ = this.termResultsReturnedSource.asObservable();

    this.releasesSubscription = this.releasesSource.subscribe((results) => {
      this.releasesResults = results
        .map(result => ({ score: result.score, item: this.releasesIndexService.getRelease(result.ref) }));
      const searchResults = [...this.agenciesResults, ...this.releasesResults]
        .sort((a, b) => a.score > b.score ? -1 : a.score === b.score ? 0 : 1)
        .map(result => result.item);

      this.termResultsReturnedSource.next(
        searchResults
          .slice(0, 6));
    });

    this.agenciesSubscription = this.agenciesSource.subscribe((results) => {
      this.agenciesResults = results
        .map(result => ({ score: result.score * 1.5, item: this.agenciesIndexService.getAgency(result.ref) }));
      const searchResults = [...this.agenciesResults, ...this.releasesResults]
        .sort((a, b) => a.score > b.score ? -1 : a.score === b.score ? 0 : 1)
        .map(result => result.item);

      this.termResultsReturnedSource.next(
        searchResults
          .slice(0, 6));
    });
  }

  ngOnDestroy() {
    this.releasesSubscription.unsubscribe();
    this.agenciesSubscription.unsubscribe();
  }

  search(query) {
    const queryWithWildcards = query.trim().split(' ').map(word => `${word}* ${word}`).join(' ');
    this.releasesIndexService.search(queryWithWildcards, this.releasesSource);
    this.agenciesIndexService.search(queryWithWildcards, this.agenciesSource);
  }
}
