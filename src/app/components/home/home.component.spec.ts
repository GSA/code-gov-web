import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { StateService } from '../../services/state';
import { BannerArtComponent } from './banner-art';
import { HomeComponent } from './';

describe('HomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerArtComponent,
        HomeComponent
      ],
      providers: [
        StateService
      ]
    });

    this.fixture = TestBed.createComponent(HomeComponent);
    this.homeComponent = this.fixture.componentInstance;
  });

  it('should have a heading', () => {
    expect(this.homeComponent.url).toEqual('https://pif.gov');
  });
});
