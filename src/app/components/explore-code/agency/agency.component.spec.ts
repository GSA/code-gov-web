import { Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { Angulartics2, Angulartics2Module } from 'angulartics2';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { Observable } from 'rxjs/Observable';

import { AgencyComponent } from './index';
import { ErrorModalService } from '../../../services/error-modal';
import { ErrorModalComponent } from './../../error-modal/error-modal.component';
import { LanguageIconPipe } from '../../../pipes/language-icon';
import { PluralizePipe } from '../../../pipes/pluralize';
import { ClientService } from '../../../services/client';
import { SeoService } from '../../../services/seo';
import { TruncatePipe } from '../../../pipes/truncate';
import { MetaModule } from '@ngx-meta/core';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = Observable.of({id: 'DOL'});
  }
}

describe('AgencyComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgencyComponent,
        ErrorModalComponent,
        LanguageIconPipe,
        PluralizePipe,
        TruncatePipe
      ],
      imports: [
        RouterTestingModule,
        Angulartics2Module.forRoot(),
        HttpModule,
        RouterModule,
        MetaModule.forRoot(),
        InfiniteScrollModule,
      ],
      providers: [
        Location,
        Angulartics2,
        ErrorModalService,
        SeoService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        ClientService
      ]
    });

    this.fixture = TestBed.createComponent(AgencyComponent);
    this.agencyComponent = this.fixture.componentInstance;
  });

  /*
  Async now. Need to update test.
  describe('checkRepos', () => {
    it('returns false when repos do not exist', () => {
      let repos = [];
      expect(this.agencyComponent.checkRepos(repos)).toBe(false);
    });

    it('returns true when repos exist', () => {
      let repos = [{id: 1, name: 'Repo'}];
      expect(this.agencyComponent.checkRepos(repos)).toBe(true);
    });
  });
  */

  /*
  describe('filterByAgency', () => {
    it('returns false when a repo’s Agency does not match', () => {
      spyOn(this.agencyComponent, 'agencyId').and.returnValue('DOL');
      let repo = {agency: 'AAA'};

      expect(this.agencyComponent.filterByAgency(repo)).toBe(false);
    });

    it('returns true when a repo’s Agency matches', () => {
      spyOn(this.agencyComponent, 'agencyId').and.returnValue('DOL');
      let repo = {agency: 'DOL'};

      expect(this.agencyComponent.filterByAgency(repo)).toBe(true);
    });
  });
  */

  describe('destroy', () => {
    it('should unsubscribe from router events on destroy', () => {
      this.fixture.detectChanges();
      spyOn(this.agencyComponent.eventSub, 'unsubscribe');
      this.fixture.destroy();
      expect(this.agencyComponent.eventSub.unsubscribe).toHaveBeenCalled();
    });
  });

  /* sorting should be done by API. need to update this test
  and include async test
  */
  /*
  describe('agencyRepos', () => {
    it('should sort the repositories returned.', () => {
      this.fixture.detectChanges();

      this.agencyComponent.agencyRepos();
      expect(this.agencyComponent.allRepos).toEqual([
        {
          agency: 'DOL',
          id: 'DOL/example',
          name: 'example',
          permissions: {
            usageType: 'openSource',
          },
        },
        {
          agency: 'DOL',
          id: 'DOL/test',
          name: 'test',
          permissions: {
            usageType: 'openSource',
          },
        },
        {
          agency: 'DOL',
          id: 'DOL/trial',
          name: 'trial',
          permissions: {
            usageType: 'openSource',
          },
        },
      ]);
    });
  });
  */
});
