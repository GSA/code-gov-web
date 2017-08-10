import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from '../api';
import { AgencyService } from '../agency';

import { TermService } from './term.service';

@Injectable()

export class ElasticsearchTermService extends ApiService implements TermService {
  termResultsReturned$: Observable<Array<any>>;
  private termResultsReturnedSource = new Subject<Array<any>>();

  constructor(
    private http: Http,
    private agencyService: AgencyService,
  ) {
    super(http);
    this.termResultsReturned$ = this.termResultsReturnedSource.asObservable();
  }

  search(query) {
    super.fetch('terms', 'term=' + query + '&size=6&term_type=agency.acronym&term_type=agency.name')
      .subscribe(response => {
        this.termResultsReturnedSource.next(
          response.terms
            .map(term => this.agencyService.getByName(term.term))
        );
      });
  }
}
