import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { ApiService } from '../api';

@Injectable()

export class TermService extends ApiService {
  public terms: Object[] = [];

  constructor(private http: Http) {
    super(http);
  }

  addTerm(term) {
    this.terms.push(term);
  }

  getTerms(query) {
    return super.fetch('terms', query);
  }

  resetTerms() {
    this.terms = [];
  }

  uniqueTerm(name):boolean {
    return this.terms.filter(term => term['name'].toLowerCase() === name.toLowerCase()).length === 0;
  }
}
