import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService {

  constructor(private http: Http) {}

  search(from: number, size: number, query: string): Observable<Response> {
    let queryParams = '?' + query + '&from=' + from + '&size=' + size;
    let queryUrl = API_URL + 'repos' + queryParams;

    return this.http.get(queryUrl).map(
      (res:Response) => {
        return res.json()
      }
    );
  }
}
