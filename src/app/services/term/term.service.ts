import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

export abstract class TermService {
  abstract search(query: string, source: Subject<Array<any>>): void;
}
