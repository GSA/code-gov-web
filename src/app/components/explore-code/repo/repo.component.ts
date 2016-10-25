import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../../../services/agency';
import { ReposService } from '../../../services/repos';

@Component({
  selector: 'repo',
  styles: [require('./repo.styles.scss')],
  template: require('./repo.template.html')
})

export class RepoComponent {
  agency: any;
  repo: any;

  constructor(
    private route: ActivatedRoute,
    private agencyService: AgencyService,
    private reposService: ReposService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['id'];

      this.getRepo(id);
    });
  }

  getRepo(id) {
    this.reposService.getJsonFile().
      subscribe((result) => {
        if (result) {
          this.repo = result['repos'].filter(repo => repo.repoID === id)[0];
          this.repo.agency = this.agencyService.getAgency(this.repo.agency);
        } else {
          console.log('Error.');
        }
    });
  }
}
