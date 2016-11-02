import { Directive, ElementRef, Output, Renderer } from '@angular/core';
import { MobileService } from '../../services/mobile';

@Directive({
  selector: '[toggle-menu]',
  host: {
    '(click)': 'onClick($event)'
  }
})

export class ToggleMenuDirective {
  constructor(private el: ElementRef, private mobileService: MobileService) {}

  onClick(event: any) {
    event.preventDefault();
    console.log("Directive Clicked");
    this.mobileService.toggleMenu();
  }
}
