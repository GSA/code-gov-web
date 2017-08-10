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
  public results: any[] = [];
  private subscription: Subscription;

  constructor(private termService: TermService) {
    this.subscription = this.termService.termResultsReturned$.subscribe(results => {
      this.results = results;
    });
  }

  hasResults() {
    return this.results.length > 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
