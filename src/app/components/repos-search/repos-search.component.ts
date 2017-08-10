import {
  Component,
  EventEmitter,
  Input,
  Output
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
  @Input() queryValue: string;
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
    return !!this.queryInputValue;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: [''],
    });
  }

  onKey(event: any) {
    this.queryInputValue = event.target.value;
    this.termService.search(this.queryInputValue);
  }

  onSubmit(form: any): void {
    this.search(form.query);
  }

  search(query: string) {
    this.router.navigateByUrl('/search?q=' + query);
  }

  toggleAutocomplete(autocompleteVisible: boolean) {
    this.autocompleteVisible = autocompleteVisible;
  }
}
