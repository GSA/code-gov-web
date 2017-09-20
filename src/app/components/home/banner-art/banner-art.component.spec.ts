import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { BannerArtComponent } from './banner-art.component';
import { StateService } from '../../services/state';

class MockRouter {
  url: string;
  constructor() {
    this.url = '/explore-code/';
  }

  navigateByUrl() {
    return true;
  }
}

describe('BannerArtComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<BannerArtComponent>;
    let component: BannerArtComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ BannerArtComponent ],
        providers: []
      });
      fixture = TestBed.createComponent(BannerArtComponent);
      component = fixture.componentInstance;
    });

    it('should have defined BannerArtComponent instance', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<BannerArtComponent>;
    let component: BannerArtComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ BannerArtComponent ],
        providers: []
      });

      fixture = TestBed.createComponent(BannerArtComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with artwork as a class', () => {
      fixture.detectChanges();
      let artwork = fixture.nativeElement.querySelector('.artwork');

      expect(artwork).toBeDefined();
    });
  });
});
