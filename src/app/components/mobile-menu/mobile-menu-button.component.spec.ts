import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { MobileMenuButtonComponent } from './mobile-menu-button.component';

import { MobileService } from '../../services/mobile';

describe('MobileMenuButtonComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<MobileMenuButtonComponent>;
    let component: MobileMenuButtonComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ MobileMenuButtonComponent ],
        providers: [ MobileService ]
      });
      fixture = TestBed.createComponent(MobileMenuButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should have defined MobileMenuButtonComponent instance', () => {
      expect(component).toBeDefined();
    });

    describe('toggleSideNav()', () => {
      it('should switch the value of isOpen()', () => {
        expect(component.isOpen()).toBe(false);
        component.toggleSideNav();
        expect(component.isOpen()).toBe(true);
      });
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<MobileMenuButtonComponent>;
    let component: MobileMenuButtonComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ MobileMenuButtonComponent ],
        providers: [ MobileService ]
      });

      fixture = TestBed.createComponent(MobileMenuButtonComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with mobile-menu-button as a class', () => {
      fixture.detectChanges();
      let artwork = fixture.nativeElement.querySelector('.mobile-menu-button');

      expect(artwork).toBeDefined();
    });
  });
});
