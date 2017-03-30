import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AutocompleteComponent } from '../autocomplete';
import { AutocompleteResultComponent } from '../autocomplete-result';
import { ReposSearchComponent } from './';
import { SearchService } from '../../services/search';
import { TermService } from '../../services/term';

describe('ReposSearchComponent', () => {

  let mockRouter:any;


  beforeEach(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        AutocompleteComponent,
        AutocompleteResultComponent,
        ReposSearchComponent
      ],
      imports: [
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: SearchService, useClass: MockSearchService },
        { provide: Router, useClass: MockRouter },
        { provide: TermService, useClass: MockTermService }
      ]
    });

    this.fixture = TestBed.createComponent(ReposSearchComponent);
    this.reposSearchComponent = this.fixture.componentInstance;
  });

  describe('onSubmit', () => {
    it('should call the search function', () => {
      spyOn(this.reposSearchComponent, 'search');

      this.reposSearchComponent.onSubmit({query: 'GSA'});

      expect(this.reposSearchComponent.search).toHaveBeenCalledWith('GSA');
    });
  });

  describe('search', () => {
    it('should navigate to results page',
      inject([Router], router => {
        let query = 'GSA';
        spyOn(router, 'navigateByUrl');
        this.reposSearchComponent.search('GSA');

        expect(router.navigateByUrl).toHaveBeenCalledWith('/search?q=' + query);
    }));
  });
});

class MockRouter {
  url: string;
  constructor() {
    this.url = '/explore-code/';
  }

  navigateByUrl() {
    return true;
  }
}

class MockSearchService {
  result = {total: 3, repos: [{name: 'GSA'}, {name: 'GSA 2'}, {name: 'GSA 3'}]};

  getResult() {
    return this.result['repos'];
  }

  search(arg, arg2, arg3) {
    return Observable.of(this.result);
  }

  setSearchResults(result) {
    return true;
  }
}

class MockTermService {}
