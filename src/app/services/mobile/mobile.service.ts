import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class MobileService {
  active: boolean;
  private mobileMenuActive = new Subject<boolean>();
  activeMobileMenu$ = this.mobileMenuActive.asObservable();

  constructor() {
    this.active = false;
  }

  changeMenuStatus() {
    this.mobileMenuActive.next(this.active);
  }

  hideMenu() {
    this.active = false;
    this.changeMenuStatus();
  }

  toggleMenu() {
    console.log("Change Menu");
   this.active = !this.active;
   this.changeMenuStatus();
  }
}
