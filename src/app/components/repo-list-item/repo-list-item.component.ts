import { Component, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { RepoComponent } from '../repo';
import { TruncatePipe } from '../../../pipes/truncate';

/**
 * Class representing a component for repositories in a list view.
 */

@Component({
  selector: 'repo-list-item',
  styles: [require('./repo-list-item.styles.scss')],
  template: require('./repo-list-item.template.html')
})

export class RepoListItemComponent {
  @Input() repo;

  /**
   * Constructs a RepoListItemComponent.
   *
   * @constructor
   */
  constructor() {}
}
