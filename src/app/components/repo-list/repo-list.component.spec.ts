import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Observable } from 'rxjs/Rx';

import { LanguageIconPipe } from '../../pipes/language-icon';
import { PluralizePipe } from '../../pipes/pluralize';
import { RepoListItemComponent } from '../repo-list-item';
import { RepoListComponent } from './';
import { SearchService } from '../../services/search';
import { TruncatePipe } from '../../pipes/truncate';

describe('RepoListComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LanguageIconPipe,
        PluralizePipe,
        RepoListComponent,
        RepoListItemComponent,
        TruncatePipe
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: SearchService, useClass: MockSearchService }
      ]
    });

    this.fixture = TestBed.createComponent(RepoListComponent);
    this.repoListComponent = this.fixture.componentInstance;
  });

  describe('checkRepos', () => {
    it('returns false if no repos', () => {
      expect(this.repoListComponent.checkRepos()).toBe(false);
    });
  });

  describe('getMoreRepos', () => {
    xit('calls the Search Service search function',
      inject([SearchService], searchService => {
        spyOn(searchService, 'search').and.callThrough();

        this.repoListComponent.getMoreRepos();
        expect(searchService.search).toHaveBeenCalledWith(
          0,
          15,
          ''
        );
      }
    ));
  });

  describe('onScroll', () => {
    it('triggers the getMoreRepos function', () => {
      spyOn(this.repoListComponent, 'getMoreRepos');

      this.repoListComponent.onScroll();
      expect(this.repoListComponent.getMoreRepos).toHaveBeenCalled();
    });
  });

  describe('remainingRepos', () => {
    it('returns false if searchStart is < reposTotal', () => {
      expect(this.repoListComponent.remainingRepos()).toBe(false);
    });
  })
});

class MockRouter {
  url: string;
  constructor() {
    this.url = '/explore-code/';
  }

  navigateByUrl(arg) {
    return true;
  }
}

class MockSearchService {
  result = {total: 3, repos: [{name: 'GSA'}, {name: 'GSA 2'}, {name: 'GSA 3'}]};

  search(arg, arg2, arg3) {
    return Observable.of(this.result);
  }
}
