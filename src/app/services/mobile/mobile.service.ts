import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MobileService {
  menuActive: boolean;
  sideNavActive: boolean;
  searchBoxActive: boolean;
  activeMobileMenu$: Observable<boolean>;
  activeSideNav$: Observable<boolean>;
  activeSearchBox$: Observable<boolean>;
  private mobileMenuActiveSource = new Subject<boolean>();
  private sideNavActiveSource = new Subject<boolean>();
  private searchBoxActiveSource = new Subject<boolean>();

  constructor() {
    this.menuActive = false;
    this.sideNavActive = false;
    this.activeMobileMenu$ = this.mobileMenuActiveSource.asObservable();
    this.activeSideNav$ = this.sideNavActiveSource.asObservable();
    this.activeSearchBox$ = this.searchBoxActiveSource.asObservable();
  }

  changeMenuStatus() {
    this.mobileMenuActiveSource.next(this.menuActive);
  }

  hideMenu() {
    this.menuActive = false;
    this.changeMenuStatus();
  }

  toggleMenu() {
   this.menuActive = !this.menuActive;
   this.changeMenuStatus();
  }

  showSideNav() {
    this.sideNavActive = true;
    this.sideNavActiveSource.next(this.sideNavActive);
  }

  hideSideNav() {
    this.sideNavActive = false;
    this.sideNavActiveSource.next(this.sideNavActive);
  }

  toggleSideNav() {
    this.sideNavActive = !this.sideNavActive;
    this.sideNavActiveSource.next(this.sideNavActive);
  }

  showSearchBox() {
    this.searchBoxActive = true;
    this.searchBoxActiveSource.next(this.searchBoxActive);
  }

  hideSearchBox() {
    this.searchBoxActive = false;
    this.searchBoxActiveSource.next(this.searchBoxActive);
  }

  toggleSearchBox() {
    this.searchBoxActive = !this.searchBoxActive;
    this.searchBoxActiveSource.next(this.searchBoxActive);
  }
}
