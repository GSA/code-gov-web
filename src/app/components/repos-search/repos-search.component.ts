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

@Component({
  selector: 'repos-search',
  template: require('./repos-search.template.html'),
  styles: [require('./repos-search.style.scss')],
})

export class ReposSearchComponent {
  @Input() queryValue = '';
  @Input() autofocus = false;
  @ViewChild('query') queryElement: ElementRef;
  searchForm: FormGroup;
  public autocompleteVisible: boolean = false;
  public queryInputValue: string = '';

  constructor(
    public formBuilder: FormBuilder,
    private searchService: SearchService,
    private termService: TermService,
    private router: Router,
  ) {}

  hasQuery(): boolean {
    return this.queryInputValue.length > 0;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: [''],
    });

    this.termService.search(this.queryValue);
    this.queryInputValue = this.queryValue;
  }

  ngAfterViewInit() {
    if (this.autofocus) {
      this.queryElement.nativeElement.focus();
    }
  }

  onKey(event: any) {
    this.queryInputValue = event.target.value;
    this.termService.search(this.queryInputValue);

    if (event.code === 'Escape' || event.code === 'Enter') {
      event.target.blur();
    }
  }

  onSubmit(form: any): void {
    this.search(form.query);
  }

  search(query: string) {
    this.router.navigateByUrl('/search?q=' + query);
  }

  showAutocomplete() {
    setTimeout(() => this.autocompleteVisible = true, 50);
  }

  hideAutocomplete() {
    setTimeout(() => this.autocompleteVisible = false, 50);
  }
}
