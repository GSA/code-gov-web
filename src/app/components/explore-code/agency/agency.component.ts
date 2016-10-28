import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../../../services/agency';
import { ReposService } from '../../../services/repos';
import { LanguageIconPipe } from '../../../pipes/language-icon';
import { TruncatePipe } from '../../../pipes/truncate';

@Component({
  selector: 'agency',
  styles: [require('./agency.styles.scss')],
  template: require('./agency.template.html')
})

export class AgencyComponent {
  agency: any;
  public hasRepos: boolean = false;
  public repos;

  constructor(
    private agencyService: AgencyService,
    private route: ActivatedRoute,
    private reposService: ReposService
  ) {}

  ngOnDestroy() {
    this.hasRepos = false;
    this.agency = null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['id'];

      this.agency = this.agencyService.getAgency(id);
      this.agencyRepos();
    });
  }

  agencyId() {
    return this.agency.id;
  }

  agencyRepos() {
    this.reposService.getJsonFile().
      subscribe((result) => {
        if (result) {
          this.repos = result['repos'].filter(repo => this.filterByAgency(repo));
          this.hasRepos = this.checkRepos(this.repos);
        } else {
          console.log('Error.');
        }
    });
  }

  checkRepos(repos) {
    if (repos.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  filterByAgency(repo) {
    if (repo.agency !== undefined && repo.agency === this.agencyId()) {
      return true;
    } else {
      return false;
    }
  }
}
