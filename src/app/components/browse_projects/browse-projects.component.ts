import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { content, images } from '../../../../config/code-gov-config.json';

@Component({
  selector: 'browse-projects',
  styles: [require('./browse-projects.styles.scss')],
  template: require('./browse-projects.template.html')
})

export class BrowseProjectsComponent {
  private content: any = content.browse_projects;
  private bannerImage;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);

  }

  ngOnInit() {
    console.log('starting browse-projects ngOnInit');
    
    

  }

}
