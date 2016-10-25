import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { AgencyService } from '../../../services/agency';
import { RepoComponent } from './index';
import { ReposService } from '../../../services/repos';
import { REPOS } from '../../../services/repos';

describe('RepoComponent', () => {
  let id = '33202667';
  let fixture;
  let repoComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoComponent
      ],
      imports: [
        HttpModule,
        RouterModule
      ],
      providers: [
        AgencyService,
        ReposService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(RepoComponent);
    repoComponent = fixture.componentInstance;
  });

  /*
  TODO: Fix this test
  describe('getRepo', inject([AgencyService, ReposService], (agencyService, reposService) => {
    it('returns a valid Repo', () => {
      spyOn(agencyService, 'getAgency');
      spyOn(reposService, 'getJsonFile').and.returnValue(Observable.of(REPOS));

      console.log(repoComponent.getRepo(id));
    }));
  }));
  */
});

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = Observable.of({id: '123456'});
  }
}
