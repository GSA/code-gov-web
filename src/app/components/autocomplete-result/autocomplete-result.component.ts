import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'autocomplete-result',
  styles: [require('./autocomplete-result.style.scss')],
  template: require('./autocomplete-result.template.html')
})

export class AutocompleteResultComponent {
  @Input() result;
  @Output() onSuggestionSelected = new EventEmitter();
  resource: any = {};

  ngOnInit() {

    if (this.result) {
      if (this.result.term_type === 'agency.acronym') {
        let acronym = this.result.term.toUpperCase();
        this.resource['iconId'] = `assets/img/logos/agencies/${acronym}-50x50.png`;
        this.resource['imageIcon'] = true;
        this.resource['routerLink'] = `/explore-code/agencies/${acronym}`;
        this.resource['name'] = acronym;
      } else {
        this.resource['iconId'] = 'icon icon-search';
        this.resource['imageIcon'] = false;
        this.resource['routerLink'] = ['/search'];
        this.resource['queryParams'] = { q: this.result.term };
        this.resource['name'] = this.result.term;
      }
    }
  }

  handleSuggestionSelected() {
    this.onSuggestionSelected.emit(this.result);
  }
}
