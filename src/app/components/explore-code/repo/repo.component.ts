import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Agency } from '../../../services/client';
import { ClientService } from '../../../services/client';
import { ExternalLinkDirective } from '../../directives/external-link';
import { SeoService } from '../../../services/seo';
import { MetaService } from '@ngx-meta/core';
import { LanguageIconPipe } from '../../pipes/language-icon';

@Component({
  selector: 'repo',
  styles: [require('./repo.component.scss')],
  template: require('./repo.component.html')
})

export class RepoComponent implements OnInit, OnDestroy {
  @Input() repo: any;
  agency: Agency;
  eventSub: Subscription;
  repoSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private seoService: SeoService,
    private readonly meta: MetaService
  ) {}

  ngOnInit() {
    this.eventSub = this.route.params.subscribe(params => {
      this.getRepo(params['agency_id'], params['id']);
    });
  }

  ngOnDestroy() {
    if (this.eventSub) this.eventSub.unsubscribe();
    if (this.repoSub) this.repoSub.unsubscribe();
  }

  getKeys(object) {
    return Object.keys(object);
  }

  getRepo(agencyId, releaseId) {
    this.clientService.getRepoByID(releaseId).subscribe(repo => {
      this.repo = repo;
      this.seoService.setTitle(this.repo.name, true);
      this.seoService.setMetaDescription(this.repo.description);
      this.seoService.setMetaRobots('Index, Follow');
      console.log('Repository information is ', repo);
    });
  }

  getRepositoryUrl() {
    if (!this.repo.repositoryURL) return null;

    if (this.repo.repositoryURL.startsWith('git://')) {
      const matcher = /git:\/\/(.*?)\/(.*?)\/(.*?)\.git/;
      const matches = matcher.exec(this.repo.repositoryURL);
      return `https://${matches[1]}/${matches[2]}/${matches[3]}`;
    }

    return this.repo.repositoryURL;
  }

  isArray(input) {
    return Array.isArray(input);
  }

  clean(input) {
    if (typeof input === 'number') {
      return input.toString();
    } else if (typeof input === 'string') {
      return input.replace(/[_-]/g, ' ');
    } else {
      return JSON.stringify(input);
    }
  }

  isURL(input) {
    return typeof input === 'string' && input.startsWith('http');
  }

}
