import {
  Http,
  Headers,
  BaseRequestOptions,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let backend: XHRBackend;
  let defaultOptions: BaseRequestOptions;
  const http = new Http(backend, defaultOptions);

  beforeEach(() => { service = new SearchService(http); });

  describe('search', () => {
    it('returns false if repos is less than 1', () => {
      let query = '_fulltext=GSA';
      let from = 0;
      let size = 15;
      let queryParams = query + '&from=' + from + '&size=' + size;
      let queryUrl = API_URL + 'repos?' + queryParams;

      spyOn(http, 'get').and.returnValue(
        Observable.of({response: 'Success'}
      ));
      service.search(from, size, '_fulltext=GSA');

      expect(http.get).toHaveBeenCalledWith(queryUrl);
    });
  });
});
