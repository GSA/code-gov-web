import { Directive, ElementRef, Output, Renderer } from '@angular/core';
import { MobileService } from '../../services/mobile';

@Directive({
  selector: '[toggle-menu]',
  host: {
    '(click)': 'onClick($event)'
  }
})

export class ToggleMenuDirective {
  toggle: boolean;
  constructor(private el: ElementRef, private mobileService: MobileService) {
    this.toggle = JSON.parse(this.el.nativeElement.getAttribute('aria-pressed'));
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
