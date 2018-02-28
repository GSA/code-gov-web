import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { MobileMenuComponent } from './mobile-menu.component';

import { HttpModule } from '@angular/http';
import { ClientService } from '../../services/client';
import { MobileService } from '../../services/mobile';

describe('MobileMenuComponent', () => {

  describe('component logic', () => {
    let fixture: ComponentFixture<MobileMenuComponent>;
    let component: MobileMenuComponent;
    let mockRouter: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          RouterModule.forRoot([]),
        ],
        declarations: [ MobileMenuComponent ],
        providers: [
          ClientService,
          MobileService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      });
      fixture = TestBed.createComponent(MobileMenuComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should have defined MobileMenuComponent instance', () => {
      expect(component).toBeDefined();
    });

    describe('ngOnDestroy()', () => {
      it('should unsubscribe from events', () => {
        spyOn(component.sideNavSubscription, 'unsubscribe');
        fixture.destroy();
        expect(component.sideNavSubscription.unsubscribe).toHaveBeenCalled();
      });
    });

    describe('search()', () => {
      it('should close the sidenav', () => {
        const query = 'test';
        spyOn(component.mobileService, 'hideSideNav');
        component.searchQuery = query;
        component.search();
        expect(component.mobileService.hideSideNav).toHaveBeenCalled();
      });

      it('should navigate to the search page', () => {
        const query = 'test';
        spyOn(component.router, 'navigateByUrl');
        component.searchQuery = query;
        component.search();
        expect(component.router.navigateByUrl).toHaveBeenCalledWith(`/search?q=${query}`);
      });
    });
  });

  describe('component template', () => {
    let fixture: ComponentFixture<MobileMenuComponent>;
    let component: MobileMenuComponent;
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          RouterModule.forRoot([]),
        ],
        declarations: [ MobileMenuComponent ],
        providers: [
          ClientService,
          MobileService,
          { provide: APP_BASE_HREF, useValue: '/' },
        ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      });

      fixture = TestBed.createComponent(MobileMenuComponent);
      component = fixture.componentInstance;
    });

    it('should have an element with mobile-menu as a class', () => {
      fixture.detectChanges();
      let artwork = fixture.nativeElement.querySelector('.mobile-menu');

      expect(artwork).toBeDefined();
    });
  });
});
