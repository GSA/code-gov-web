import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { TermService } from '../../services/term';

@Component({
  selector: 'autocomplete',
  styles: [require('./autocomplete.style.scss')],
  template: require('./autocomplete.template.html')
})

export class AutocompleteComponent {
  @Input() query: string;
  public hasResults: boolean = false;
  public results: any[];
  private termsSub: Subscription;

  constructor(private termService: TermService){}

  newTermsSubscription(): Subscription {
    return this.newTermQuery().subscribe(
      (response: any) => {
        if (response['terms'].length > 0 && this.results != response['terms'] ) {
          this.termService.resetTerms();
          this.results = response['terms'];
          this.hasResults = true;
        }
      }
    );
  }

  newTermQuery(): Observable<any> {
    return this.termService.getTerms('term=' + this.query + '&size=4&term_type=agency.acronym&term_type=agency.name');
  }

  ngOnChanges() {
    this.termsSub = this.newTermsSubscription();
  }

  ngOnDestroy() {
    if (typeof this.termsSub !== 'undefined') {
      this.termsSub.unsubscribe();
    }
  }
}
