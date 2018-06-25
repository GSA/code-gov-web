import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { content } from '../../../../config/code-gov-config.json';

import { ClientService } from '../../services/client';

/**
 * Class representing a search component for repositories.
 */

@Component({
  selector: 'repos-search',
  template: require('./repos-search.template.html'),
  styles: [require('./repos-search.style.scss')],
  encapsulation: ViewEncapsulation.None,
})

export class ReposSearchComponent {
  @Input() queryValue = '';
  @Input() autofocus = false;
  @Input() buttonClasses = '';
  @ViewChild('repoSearch') searchFormElement: ElementRef;
  private browse_by_text: string = content.home.banner.browse_by_text;
  private entities: any[];

  /**
   * Constructs a ReposSearchComponent.
   *
   * @constructor
   * @param {Router} router - The application's URL router
   */
  constructor(
    private router: Router,
    private clientService: ClientService
  ) {
    this.clientService.getAgencies().subscribe(entities => {
      this.entities = entities;
    });
  }

  /**
   * When form is submitted, go to search results page.
   *
   * @param {any} form - The form being submitted
   * @return {void}
   */
  onSubmit(): void {
    if (this.queryValue && this.queryValue.length > 0) {
      this.search();
    } else {
      console.log('No search terms were entered, so do nothing');
    }
  }

  /**
   * Navigate to the search results page.
   *
   * @return {void}
   */
  search() {
    this.router.navigateByUrl('/search?q=' + this.queryValue);
  }

  onBrowseByEntityChange(newValue) {
    this.router.navigateByUrl('/explore-code/agencies/' + newValue);
  }
}
