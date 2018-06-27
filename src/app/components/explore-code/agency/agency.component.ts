import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ErrorModalService } from '../../../services/error-modal';
import { ErrorModalComponent } from './../../error-modal/error-modal.component';
import { Agency, ClientService } from '../../../services/client';
import { LanguageIconPipe } from '../../../pipes/language-icon';
import { PluralizePipe } from '../../../pipes/pluralize';
import { SeoService } from '../../../services/seo';
import { TruncatePipe } from '../../../pipes/truncate';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'agency',
  styles: [require('./agency.styles.scss')],
  template: require('./agency.template.html')
})

export class AgencyComponent implements OnInit, OnDestroy {
  agency: Agency;
  public hasRepos: boolean = false;
  public repos = [];
  private eventSub: Subscription;
  private agencyReposSub: Subscription;
  private allRepos = [];
  private allDisplayedRepos = [];
  private currentIndex = 0;
  private pageSize = 20;
  private isLoading = true;

  constructor(
    private clientService: ClientService,
    private errorModalService: ErrorModalService,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private readonly meta: MetaService
  ) {}

  ngOnDestroy() {
    this.hasRepos = false;
    this.agency = null;
    if (this.eventSub) this.eventSub.unsubscribe();
    if (this.agencyReposSub) this.agencyReposSub.unsubscribe();
  }

  ngOnInit() {
    this.eventSub = this.route.params.subscribe(params => {
      let id = params['id'];
      if (id === 'All') {
        this.agency = { acronym: 'All', name: 'All' };
        this.repos = [];
        this.allRepos = [];
        this.allDisplayedRepos = [];
        this.currentIndex = 0;
        this.isLoading = true;
        this.agencyRepos();

        this.seoService.setTitle(this.agency.name, true);
        this.seoService.setMetaDescription('Browse code from All agencies');
        this.seoService.setMetaRobots('Index, Follow');

        this.meta.setTag('twitter:card', 'summary');
        this.meta.setTag('twitter:site', '@codedotgov');
        this.meta.setTag('twitter:title', `code.gov`);
        this.meta.setTag('twitter:description', 'Browse code from All agencies');
        this.meta.setTag('twitter:image', 'https://code.gov/assets/img/og.jpg');
      } else {
        this.clientService.getAgencyByAcronym(id)
        .subscribe((agency: Agency) => {
          this.agency = agency;
          if (this.agency) {
            this.repos = [];
            this.allRepos = [];
            this.allDisplayedRepos = [];
            this.currentIndex = 0;
            this.isLoading = true;
            this.agencyRepos();

            this.seoService.setTitle(this.agency.name, true);
            this.seoService.setMetaDescription('Browse code from the ' + this.agency.name);
            this.seoService.setMetaRobots('Index, Follow');

            this.meta.setTag('twitter:card', 'summary');
            this.meta.setTag('twitter:site', '@codedotgov');
            this.meta.setTag('twitter:title', `code.gov/${this.agency.name}`);
            this.meta.setTag('twitter:description', 'Browse code from the ' + this.agency.name);
            this.meta.setTag('twitter:image', 'https://code.gov/assets/img/og.jpg');
          }
        });
      }
    });
  }

  agencyId(): string {
    if (this.agency) {
      return this.agency.acronym;
    } else {
      return null;
    }
  }

  agencyRepos() {
    if (this.agency) {
      const acronym = this.agency.acronym === 'All' ? '' : this.agency.acronym;
      this.clientService.getAgencyRepos(acronym, 10000).subscribe(repos => {
        let numberOfRepos = repos.length;
        if (numberOfRepos === 0) {
          this.errorModalService.showModal({});
        } else if (numberOfRepos > 0) {
          this.allRepos = repos;
          this.allDisplayedRepos = this.allRepos.filter(repo => this.displayRepo(repo));
          this.repos = this.allDisplayedRepos.slice(0, this.repos.length || this.pageSize);
          this.currentIndex = this.repos.length || this.pageSize;
          this.hasRepos = this.checkRepos(this.repos);
          this.isLoading = false;
        }
      });
    }
  }

  checkRepos(repos) {
    return repos.length > 0;
  }

  displayRepo(repo) {
    if (repo.agency.acronym === 'EPA') {
      try {
        return repo.permissions.usageType.toLowerCase().startsWith('exempt') === false;
      } catch (error) {
        return true;
      }
    } else {
      try {
        return repo.permissions.usageType === 'governmentWideReuse' || repo.permissions.usageType === 'openSource';
      } catch (error) {
        return false;
      }
    }
  }

  filterByAgency(repo) {
    if (this.agency.acronym === 'All') {
      return true;
    } else {
      return repo.agency !== undefined && repo.agency === this.agencyId();
    }
  }

  onScroll() {
    this.repos = [...this.repos, ...this.allDisplayedRepos.slice(this.currentIndex, this.currentIndex + this.pageSize)];
    this.currentIndex = this.currentIndex + this.pageSize;
  }

}
