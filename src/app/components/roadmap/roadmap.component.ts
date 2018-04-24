import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { content } from '../../../../config/code-gov-config.json';

/**
 * Class representing a roadmap.
 */

@Component({
  selector: 'roadmap',
  styles: [require('./roadmap.styles.scss')],
  template: require('./roadmap.template.html'),
})

export class RoadmapComponent {
  private content: any = content;

  constructor(private sanitizer: DomSanitizer) {}


}
