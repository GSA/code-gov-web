import { Directive, ElementRef, Output, Renderer } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { MobileService } from '../../services/mobile';

@Directive({
  selector: '[toggle-menu]',
  host: {
    '(click)': 'onClick($event)'
  }
})

export class ToggleMenuDirective {
  eventSub: Subscription;
  toggle: boolean;

  constructor(
    private el: ElementRef,
    private mobileService: MobileService,
    private router: Router
  ) {
    this.toggle = JSON.parse(this.el.nativeElement.getAttribute('aria-pressed'));

    this.eventSub = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.mobileService.hideMenu();
      this.toggle = false;
      this.el.nativeElement.setAttribute('aria-pressed', this.toggle);
    });
  }

  ngOnDestroy() {
    if (this.eventSub) this.eventSub.unsubscribe();
  }

  onClick(event: any) {
    event.preventDefault();
    this.mobileService.toggleMenu();
    this.togglePressed();
  }

  togglePressed() {
    this.toggle = !this.toggle;
    this.el.nativeElement.setAttribute('aria-pressed', this.toggle);
  }
}
