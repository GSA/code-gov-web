import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { SubnavComponent } from './subnav.component';
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

describe('SubnavComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<SubnavComponent>;
    let component: SubnavComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ SubnavComponent ],
        providers: [
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });
      fixture = TestBed.createComponent(SubnavComponent);
      component = fixture.componentInstance;
    });

    it('should have defined SubnavComponent instance', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<SubnavComponent>;
    let component: SubnavComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ SubnavComponent ],
        providers: [
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });

      fixture = TestBed.createComponent(SubnavComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with subnav as a class', () => {
      fixture.detectChanges();
      let subnav = fixture.nativeElement.querySelector('.subnav');

      expect(subnav).toBeDefined();
    });
  });
});
