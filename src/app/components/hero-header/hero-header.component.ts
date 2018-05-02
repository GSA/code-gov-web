import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { images } from '../../../../config/code-gov-config.json';

@Component({
    selector: 'hero-header',
    styles: [require('./hero-header.style.scss')],
    template: require('./hero-header.template.html'),
})

export class HeroHeaderComponent {
  private backgroundImage;
  @Input() title: string;

  constructor(private sanitizer: DomSanitizer) {
     this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  }
}
