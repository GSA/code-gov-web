import { APP_BASE_HREF } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SpyLocation } from '@angular/common/testing';

import { Angulartics2, Angulartics2Module } from 'angulartics2';

import { AutocompleteComponent } from '../autocomplete';
import { AutocompleteResultComponent } from '../autocomplete-result';
import { BannerArtComponent } from './banner-art';
import { ExternalLinkDirective } from '../../directives/external-link';
import { HomeComponent } from './';
import { ModalComponent } from '../modal';
import { ModalService } from '../../services/modal';
import { ReposSearchComponent } from '../repos-search';
import { SearchService } from '../../services/search';
import { SeoService } from '../../services/seo';
import { StateService } from '../../services/state';
import { TermService } from '../../services/term';

describe('HomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutocompleteComponent,
        AutocompleteResultComponent,
        BannerArtComponent,
        ExternalLinkDirective,
        HomeComponent,
        ModalComponent,
        ReposSearchComponent
      ],
      imports: [
        Angulartics2Module.forRoot(),
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        Angulartics2,
        {provide: APP_BASE_HREF, useValue: '/'},
        { provide: Location, useClass: SpyLocation },
        ModalService,
        SearchService,
        SeoService,
        StateService,
        TermService
      ]
    });

    this.fixture = TestBed.createComponent(HomeComponent);
    this.homeComponent = this.fixture.componentInstance;
  });

  it('should have a heading', () => {
    expect(this.homeComponent.url).toEqual('https://pif.gov');
  });
});
