import { Component } from '@angular/core';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { Angulartics2, Angulartics2Module } from 'angulartics2';
import { Observable } from 'rxjs/Rx';

import { AgencyService } from '../../services/agency';
import { ExternalLinkDirective } from '../../directives/external-link';
import { RepoComponent } from './';
import { RepoService } from '../../services/repo';
import { SeoService } from '../../services/seo';
import { LanguageIconPipe } from '../../pipes/language-icon';
import { TruncatePipe } from '../../pipes/truncate';
import { ModalComponent } from '../modal';
import { ActivityListComponent } from '../activity-list';
import { ModalService } from '../../services/modal';
import { IsDefinedPipe } from '../../pipes/is-defined';

// set test repository id used throughout to Dept of Veterans Affairs
let id = '33202667';

/**
 * Unit tests for RepoComponent.
 *
 */
describe('RepoComponent', () => {
  let fixture: ComponentFixture<RepoComponent>;
  let repoComponent: RepoComponent;
  let mockRouter: any;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot(),
        CommonModule,
        HttpModule,
        // This hack is needed because there is a routerLink in the template
        RouterTestingModule.withRoutes([
         { path: 'explore-code/agencies/:id', component: DummyRoutingComponent }
        ])
      ],
      declarations: [
        ExternalLinkDirective,
        LanguageIconPipe,
        TruncatePipe,
        ActivityListComponent,
        ModalComponent,
        RepoComponent,
        DummyRoutingComponent,
        IsDefinedPipe
      ],
      providers: [
        AgencyService,
        Angulartics2,
        RepoService,
        ModalService,
        SeoService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(RepoComponent);
    repoComponent = fixture.componentInstance;
  });

  it('should initialize repo property when repo is set',
    inject([AgencyService, RepoService],
      (agencyService, repoService)  => {
    // setup dependencies
    let agency = {id: 'VA', name: 'Department of Veterans Affairs'};
    spyOn(agencyService, 'getAgency').and.returnValue(agency);
    let repo = createRepository({name: 'Fake repo name'});
    spyOn(repoService, 'getRepo').and.returnValue(Observable.of(repo));

    fixture.detectChanges();

    expect(repoComponent.repo).toBeDefined();
  }));

  it('should NOT initialize repo property if id property is bogus',
    inject([AgencyService, RepoService, Router],
      (agencyService, repoService, router)  => {
    let agency = {id: 'VA', name: 'Department of Veterans Affairs'};
    spyOn(agencyService, 'getAgency').and.returnValue(agency);
    let repo = undefined;
    spyOn(repoService, 'getRepo').and.returnValue(Observable.of(repo));

    // instantiate a new RepoComponent so that ngOnInit() doesn't get called
    let newRepoComponent = new RepoComponent(null, router, agencyService, repoService, null);
    spyOn(newRepoComponent, 'navigateTo404');

    // call getRepo() that invokes repoService.getRepo()
    newRepoComponent.getRepo('');

    expect(newRepoComponent.repo).toBeUndefined();
  }));

  it('should call seoService.setMetaDescription() when repository is returned ' +
    ' when repoService.getRepo() returns a repository' ,
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
    let agency = {id: 'VA', name: 'Department of Veterans Affairs'};
    spyOn(agencyService, 'getAgency').and.returnValue(agency);
    let repo = createRepository({name: 'Another Fake repo name'});
    spyOn(repoService, 'getRepo').and.returnValue(Observable.of(repo));
    spyOn(seoService, 'setMetaDescription');

    fixture.detectChanges();

    expect(repoComponent.repo).toBeDefined();
    expect(seoService.setMetaDescription).toHaveBeenCalled();
  }));


  it('should display repoUrl in template if repo.repoUrl property is set',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
    let agency = {id: 'VA', name: 'Department of Veterans Affairs'};
    spyOn(agencyService, 'getAgency').and.returnValue(agency);
    const repoURL = 'http://www.github.com/foobar/';
    let repo = createRepository(
      {name: 'A Fake repo name to show repo',
      repository: repoURL, homepage: 'http://code.gov/foobar/' });
    spyOn(repoService, 'getRepo').and.returnValue(Observable.of(repo));

    fixture.detectChanges();

    let anchors = fixture.nativeElement.querySelectorAll('.usa-button');

    // 2nd child anchor is the repoURL (first one is homepage)
    expect(anchors[1].href).toBe(repoURL);
  }));

  it('should display repository name in template if repo.name property is defined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {name: 'VA REPO'});

        fixture.detectChanges();

        let el = fixture.nativeElement.querySelector('h1');
        // expect name to be disolayed
        expect(el.textContent).toBeDefined();
      }
  ));

/******* Test repo.description  ****/

  it('should NOT display repository description in template if repo.description '
    + 'property is undefined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {description: undefined});

        fixture.detectChanges();

        let div = fixture.nativeElement.querySelector('.repo-header-container');
        expect(div.children[2]).toBeUndefined();
      }
  ));


  it('should NOT display repository description in template if repo.description property is null',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {description: null});

        fixture.detectChanges();

        let div = fixture.nativeElement.querySelector('.repo-header-container');
        expect(div.children[2]).toBeUndefined();
      }
  ));

  it('should display repository description in template if repo.description property is defined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {description: 'REPO DESC'});

        fixture.detectChanges();

        let div = fixture.nativeElement.querySelector('.repo-header-container');
        expect(div.children[2]).toBeDefined();
      }
  ));


/******* Test repo.homepage  ****/

  it('should NOT display repository homepage in template if repo.homepage property is undefined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {homepage: undefined});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');
        expect(parent.children[0]).toBeUndefined();
      }
  ));


  it('should NOT display repository homepage in template if repo.homepage property is null',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {homepage: null});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');
        expect(parent.children[0]).toBeUndefined();
      }
  ));

  it('should display repository homepage in template if repo.homepage property is defined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {homepage: 'http://code.gov/'});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');

        expect(parent.children[0].children[0]).toBeDefined();
      }
  ));

/******* Test repo.repoUrl  ****/

  it('should NOT display repository url in template if repo.repoURL property is undefined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {repository: undefined, homepage: 'http://foo.bar'});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');

        expect(parent.children[1]).toBeUndefined();
      }
  ));


  it('should NOT display repository Url in template if repo.repository property is null',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {repository: null, homepage: 'http://foo.bar'});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');
        expect(parent.children[1]).toBeUndefined();
      }
  ));

  it('should display repository repoUrl in template if repo.repository property is defined',
    inject([AgencyService, RepoService, SeoService],
      (agencyService, repoService, seoService)  => {
        setupRepoPropertyTest(agencyService, repoService, seoService,
          {repository: 'http://code.gov/repo', homepage: undefined});

        fixture.detectChanges();

        let parent = fixture.nativeElement.querySelector('.usa-unstyled-list');

        expect(parent.children[0]).toBeDefined();
      }
  ));

  describe('ngOnDestroy()', () => {
    it('should unsubscribe from router event subscription on destroy', () => {
      fixture.detectChanges();
      spyOn(repoComponent.eventSub, 'unsubscribe');
      fixture.destroy();
      expect(repoComponent.eventSub.unsubscribe).toHaveBeenCalled();
    });
  });

});

/**
 * Interface for repository properties that we are testing.
 * All properties are optional since we are teasting each one in isolation.
 */
interface RepoProps {
  name?: string;
  description?: string;
  homepage?: string;
  repository?: string;
}

/**
 *  Creates and populate a repository object for use in tests
 * using the RepoProps interface for type safety.
 */
export function createRepository(repoProps: RepoProps) {
  return {
    repoID : id, name: repoProps.name, description: repoProps.description,
    codeLanguage: [{language: 'JavaScript'}], agency: 'VA',
    homepage: repoProps.homepage, repository: repoProps.repository
  };
}

/**
 * Sets up a test of repository properties, by creating agency
 * and repostory data structures in addition to mocking
 * RepoComponent dependencies.
 */
export function setupRepoPropertyTest(
  agencyService: AgencyService, repoService: RepoService,
  seoService: SeoService, repoProps: RepoProps) {
    let agency = {id: 'VA', name: 'Department of Veterans Affairs'};
    spyOn(agencyService, 'getAgency').and.returnValue(agency);
    // set up repository
    const FAKE_REPO = createRepository(repoProps);
    spyOn(repoService, 'getRepo').and.returnValue(Observable.of(FAKE_REPO));

}

/**
 * Mock route
 */
class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = Observable.of({id: id});
  }
}

@Component({
  template: ''
})
class DummyRoutingComponent {
}
