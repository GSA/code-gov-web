import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    });

    this.fixture = TestBed.createComponent(HomeComponent);
    this.homeComponent = this.fixture.componentInstance;
  });

  it('should have a heading', () => {
    expect(this.homeComponent.url).toEqual('https://pif.gov');
  });
});
