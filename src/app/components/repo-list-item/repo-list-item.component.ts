import { Component, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { RepoComponent } from '../repo';
import { TruncatePipe } from '../../../pipes/truncate';

@Component({
  selector: 'repo-list-item',
  styles: [require('./repo-list-item.styles.scss')],
  template: require('./repo-list-item.template.html')
})

export class RepoListItemComponent {
  @Input() repo;

  constructor() {}
}
