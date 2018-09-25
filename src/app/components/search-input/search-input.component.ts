import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ClientService } from '../../services/client';

import { content } from '../../../../config/code-gov-config.json';

const banner = content.home.banner;
const description = window.innerWidth > 500 ? banner.search_description_text : banner.search_description_text_mobile;

/**
 * Class representing a search component for repositories.
 */

@Component({
  selector: 'search-input',
  template: require('./search-input.template.html'),
  styles: [require('./search-input.style.scss')],
  host: { '(window:click)': 'onBlurHandler($event)' },
})

export class SearchInputComponent {
  @Input() queryValue = '';
  @Output() queryValueChange = new EventEmitter();
  @Input() autofocus = false;
  @Input() name: string;
  @Input() ngModel: any;
  @Input() description: string = description;
  @Input() placeholder: string = content.home.banner.search_placeholder_text;
  @ViewChild('query') queryElement: ElementRef;
  @ViewChild('searchInput') searchInputElement: ElementRef;
  public autocompleteVisible: boolean = false;
  public queryInputValue: string = '';
  termResultsObservable: Observable<Array<any>>;
  private termResultsReturnedSource = new BehaviorSubject<Array<any>>([]);

  /**
   * Constructs a ReposSearchComponent.
   *
   * @constructor
   * @param {ClientService} clientService - A service for finding matching terms
   */
  constructor(
    private clientService: ClientService
  ) {
    this.termResultsObservable = this.termResultsReturnedSource.asObservable();
  }

  /**
   * Whether the user has entered any search terms.
   *
   * @return {boolean} true if the search input has values
   */
  hasQuery(): boolean {
    return this.queryInputValue.length > 0;
  }

  /**
   * On initialization of the ReposSearchComponent
   */
  ngOnInit() {
    this.queryInputValue = this.queryValue;
  }

  /**
   * After everything has been added to the DOM
   */
  ngAfterViewInit() {
    if (this.autofocus) {
      this.queryElement.nativeElement.focus();
    }
  }

  /**
   * Execute a search on every keypress. Escape and Enter blur the input.
   *
   * @param {Event} event - Keyboard event from user pressing a key
   * @return {void}
   */
  onKey(event: any) {
    this.queryInputValue = event.target.value;
    if (this.queryInputValue && this.queryInputValue.length >= 1) {
      this.clientService.suggest(this.queryInputValue, 5)
      .subscribe(results => {
        this.termResultsReturnedSource.next(results);
      });
    } else {
      this.termResultsReturnedSource.next([]);
    }
    if (event.code === 'Escape' || event.code === 'Enter') {
      event.target.blur();
      this.hideAutocomplete();
    }
  }

  /**
   * Show the autocomplete dropdown.
   */
  showAutocomplete() {
    this.autocompleteVisible = true;
  }

  /**
   * Hide the autocomplete dropdown.
   */
  hideAutocomplete() {
    this.autocompleteVisible = false;
  }

  /**
   * Triggered whenever a suggestion is selected from the autocomplete.
   */
  handleSuggestionSelected(suggestion) {
    this.hideAutocomplete();
  }

  /**
   * When a click happens on the page, if it is outside the form,
   * hide the autocomplete.
   *
   * @param {Event} event - The mouse click event.
   * @return {void}
   */
  onBlurHandler(event: any) {
    const inputDoesNotHaveFocus = window.document.activeElement !== this.queryElement.nativeElement;
    const clickIsOutsideForm = !this.searchInputElement.nativeElement.contains(event.target);

    if (inputDoesNotHaveFocus && clickIsOutsideForm) {
      this.hideAutocomplete();
    }
  }

  focus() {
    this.queryElement.nativeElement.focus();
  }

  blur() {
    this.queryElement.nativeElement.blur();
  }

  change(newValue) {
    this.queryValue = newValue;
    this.queryValueChange.emit(newValue);
  }
  private propagateChange = (_: any) => {};
}
