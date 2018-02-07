import { Injectable } from '@angular/core';
import { CodeGovAPIClient } from '@code.gov/api-client';
import { BehaviorSubject } from 'rxjs/';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class ClientService extends CodeGovAPIClient {

  constructor() {

    super({
      debug: true,
      environment: 'staging'
    });

  }

  search(term: string, limit: number): Observable<Array<any>> {
    return Observable.fromPromise(super.search(term, limit));
  }

}
