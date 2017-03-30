import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiService {

  constructor(private apiHttp: Http) {}

  fetch(endpoint: string, query: string): Observable<Response> {

    let queryUrl = API_URL + endpoint + '?' + query;

    return this.apiHttp.get(queryUrl).map(
      (res:Response) => {
        return res.json()
      }
    );
  }
}
