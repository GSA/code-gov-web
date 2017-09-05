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

import { SearchService } from '../../services/search';
import { TermService } from '../../services/term';

/**
 * Class representing a search component for repositories.
 */

@Component({
  selector: 'repos-search',
  template: require('./repos-search.template.html'),
  styles: [require('./repos-search.style.scss')],
  host: { '(window:click)': 'onBlurHandler($event)' },
})

export class ReposSearchComponent {
  @Input() queryValue = '';
  @Input() autofocus = false;
  @ViewChild('query') queryElement: ElementRef;
  @ViewChild('repoSearch') searchFormElement: ElementRef;
  searchForm: FormGroup;
  public autocompleteVisible: boolean = false;
  public queryInputValue: string = '';

  /**
   * Constructs a ReposSearchComponent.
   *
   * @constructor
   * @param {FormBuilder} formBuilder - A service for building forms in angular
   * @param {SearchService} searchService - A service for searching repositories
   * @param {TermService} termService - A service for finding matching terms
   * @param {Router} router - The application's URL router
   */
  constructor(
    public formBuilder: FormBuilder,
    private searchService: SearchService,
    private termService: TermService,
    private router: Router,
  ) {}

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
    this.searchForm = this.formBuilder.group({
      query: [''],
    });

    this.termService.search(this.queryValue);
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
    this.termService.search(this.queryInputValue);

    if (event.code === 'Escape' || event.code === 'Enter') {
      event.target.blur();
    }
  }

  /**
   * When form is submitted, go to search results page.
   *
   * @param {any} form - The form being submitted
   * @return {void}
   */
  onSubmit(form: any): void {
    this.search(form.query);
  }

  /**
   * Navigate to the search results page.
   *
   * @param {string} query - The search terms we are searching
   * @return {void}
   */
  search(query: string) {
    this.router.navigateByUrl('/search?q=' + query);
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
   * When a click happens on the page, if it is outside the form,
   * hide the autocomplete.
   *
   * @param {Event} event - The mouse click event.
   * @return {void}
   */
  onBlurHandler(event: any) {
    const inputDoesNotHaveFocus = window.document.activeElement !== this.queryElement.nativeElement;
    const clickIsOutsideForm = !this.searchFormElement.nativeElement.contains(event.target);

    if (inputDoesNotHaveFocus && clickIsOutsideForm) {

      this.hideAutocomplete();
    }
  }
}
