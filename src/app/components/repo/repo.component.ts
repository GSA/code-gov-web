import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AgencyService } from '../../services/agency';
import { ExternalLinkDirective } from '../../directives/external-link';
import { RepoService } from '../../services/repo';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'repo',
  styles: [require('./repo.styles.scss')],
  template: require('./repo.template.html')
})

export class RepoComponent implements OnInit, OnDestroy {
  repo: any;
  eventSub: Subscription;
  repoSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agencyService: AgencyService,
    private repoService: RepoService,
    private seoService: SeoService
  ) {}

  navigateTo404() {
    this.router.navigateByUrl('404');
  }

  ngOnInit() {
    this.eventSub = this.route.params.subscribe(params => {

      let id = params['id'];

      this.getRepo(id);
    });
  }

  ngOnDestroy() {
    if (this.eventSub) this.eventSub.unsubscribe();
    if (this.repoSub) this.repoSub.unsubscribe();
  }

  getRepo(id) {
    this.repoSub = this.repoService.getRepo(id).subscribe(
      result => {
        if (result) {
          this.repo = result;
          this.seoService.setTitle(this.repo.name, true);
          this.seoService.setMetaDescription(this.repo.description);
          this.seoService.setMetaRobots('Index, Follow');
        } else {
          this.navigateTo404();
        }
      },
      error => {
        this.navigateTo404();
      }
    );
  }
}
