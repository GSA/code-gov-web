import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'autocomplete',
  styles: [require('./autocomplete.style.scss')],
  template: require('./autocomplete.template.html')
})

export class AutocompleteComponent {
  @Output() onSuggestionSelected = new EventEmitter();
  @Input() termResultsObservable: Observable<Array<any>>;
  results: any[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.termResultsObservable.subscribe(results => {
      console.log("autocomlete got more from termResultsObservable:", results);
      this.results = results;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hasResults() {
    console.log("starting hasResult with:", this.results.length);
    return this.results.length > 0;
  }

  handleSuggestionSelected(suggestion) {
    this.onSuggestionSelected.emit(suggestion);
  }
}
