import { Observable } from 'rxjs/Rx';

export abstract class TermService {
  termResultsReturned$: Observable<Array<any>>;

  abstract search(query): void;
}
