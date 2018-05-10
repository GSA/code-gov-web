import { Component, Input } from '@angular/core';

import { toAbsoluteUrl, toRouterLink, Link } from '../../utils/urls';

import { content } from '../../../../config/code-gov-config.json';

interface Logo {
  image: string;
  name: string;
  url: string;
}

@Component({
  selector: 'codedotgov-footer',
  template: require('./footer.template.html')
})
export class FooterComponent {

  @Input() color: string;
  private content = content;
  private logos: Logo[];
  private links: Link[];

  constructor() {
    // convert relative urls to absolute urls
    this.links = content.footer.links.map(link => {
      link.routerLink = toRouterLink(link.url);
      return link;
    });

    this.logos = content.footer.logos.map(logo => {
      logo.image = toAbsoluteUrl(logo.image);
      return logo;
    });
  }

}
