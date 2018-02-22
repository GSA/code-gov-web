import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { RepoComponent } from '../repo';
import { TruncatePipe } from '../../../pipes/truncate';
import { Agency, ClientService } from '../../services/client';

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
  agency: Agency;

  /**
   * Constructs a RepoListItemComponent.
   *
   * @constructor
   */
  constructor(private clientService: ClientService) {}

  getAgencyIcon(): string {
    if (this.repo && this.repo.agency && this.repo.agency.acronym) {
      return `assets/img/logos/agencies/${this.repo.agency.acronym}-50x50.png`;
    }
  }

  /**
   * Returns whether the provided repository is from GitHub.
   */
  isGitHubRepo() {
    //console.log("starting isGitHubRepo with", this.repo);
    if (!this.repo.repository && typeof this.repo.repository !== 'string') {
      return false;
    } else {
      const isGitHubURL = /github\.com/;

      return isGitHubURL.test(this.repo.repository);
    }
  }
}
