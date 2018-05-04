import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { images } from '../../../../config/code-gov-config.json';

@Component({
    selector: 'hero-header',
    styles: [require('./hero-header.style.scss')],
    template: require('./hero-header.template.html'),
})

export class HeroHeaderComponent {
  @Input() title: string;
  private backgroundImage: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
     this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  }
}
