import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Observable } from 'rxjs/Observable';

import { LanguageIconPipe } from '../../pipes/language-icon';
import { PluralizePipe } from '../../pipes/pluralize';
import { RepoListItemComponent } from '../repo-list-item';
import { RepoListComponent } from './';
import { TruncatePipe } from '../../pipes/truncate';

import { ClientService } from '../../services/client';


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
        ClientService
      ]
    });

    this.fixture = TestBed.createComponent(RepoListComponent);
    this.repoListComponent = this.fixture.componentInstance;
  });

  // NEED TO WRITE NEW TESTS HERE

});
