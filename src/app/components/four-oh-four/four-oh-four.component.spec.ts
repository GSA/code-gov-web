import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { FourOhFourComponent } from './four-oh-four.component';
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

describe('FourOhFourComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<FourOhFourComponent>;
    let component: FourOhFourComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ FourOhFourComponent ],
        providers: [
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });
      fixture = TestBed.createComponent(FourOhFourComponent);
      component = fixture.componentInstance;
    });

    it('should have defined FourOhFourComponent instance', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<FourOhFourComponent>;
    let component: FourOhFourComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ FourOhFourComponent ],
        providers: [
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });

      fixture = TestBed.createComponent(FourOhFourComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with four-oh-four-container as a class', () => {
      fixture.detectChanges();
      let container = fixture.nativeElement.querySelector('.four-oh-four-container');

      expect(container).toBeDefined();
    });
  });
});
