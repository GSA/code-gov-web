import { Observable } from 'rxjs/Rx';

export abstract class SearchService {
  total: number;
  searchResultsReturned$: Observable<any>;

  abstract search(query: string): void;

  abstract nextPage(): void;
}
