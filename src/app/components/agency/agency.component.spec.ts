import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { inject, TestBed } from '@angular/core/testing';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Observable } from 'rxjs/Rx';

import { AgencyComponent } from './index';
import { AgencyService } from '../../services/agency';
import { LanguageIconPipe } from '../../pipes/language-icon';
import { PluralizePipe } from '../../pipes/pluralize';
import { RepoListComponent } from '../repo-list';
import { RepoListItemComponent } from '../repo-list-item';
import { SearchService } from '../../services/search';
import { SeoService } from '../../services/seo';
import { TruncatePipe } from '../../pipes/truncate';


describe('AgencyComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgencyComponent,
        LanguageIconPipe,
        PluralizePipe,
        RepoListComponent,
        RepoListItemComponent,
        TruncatePipe
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        RouterModule
      ],
      providers: [
        AgencyService,
        SearchService,
        SeoService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    });

    this.fixture = TestBed.createComponent(AgencyComponent);
    this.agencyComponent = this.fixture.componentInstance;
  });

  describe('destroy', () => {
    xit('should unsubscribe from router events on destroy', () => {
      this.fixture.detectChanges();
      spyOn(this.agencyComponent.eventSub, 'unsubscribe');
      this.fixture.destroy();
      expect(this.agencyComponent.eventSub.unsubscribe).toHaveBeenCalled();
    });
  });
});

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = Observable.of({id: 'DOL'});
  }
}
