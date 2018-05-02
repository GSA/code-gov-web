import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { content, images } from '../../../../config/code-gov-config.json';

/**
 * Class representing a roadmap.
 */

@Component({
  selector: 'roadmap',
  styles: [require('./roadmap.styles.scss')],
  template: require('./roadmap.template.html'),
})

export class RoadmapComponent {
  private bannerImage: any;
  private content: any = content;

  constructor(private sanitizer: DomSanitizer) {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  }


}
