import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { StateService } from '../../services/state';
import { MobileService } from '../../services/mobile';

class MockRouter {
  url: string;
  constructor() {
    this.url = '/explore-code/';
  }

  navigateByUrl() {
    return true;
  }
}

describe('SidebarComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<SidebarComponent>;
    let component: SidebarComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ SidebarComponent ],
        providers: [
          MobileService,
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });
      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
    });

    it('should have defined SidebarComponent instance', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<SidebarComponent>;
    let component: SidebarComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
        ],
        declarations: [ SidebarComponent ],
        providers: [
          MobileService,
          StateService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      });

      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with sidebar as a class', () => {
      fixture.detectChanges();
      let sidebar = fixture.nativeElement.querySelector('.sidebar');

      expect(sidebar).toBeDefined();
    });
  });
});
