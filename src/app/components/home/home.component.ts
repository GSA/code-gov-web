import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SeoService } from '../../services/seo';
import { StateService } from '../../services/state';
import * as SiteConfig from '../../../../config/code-gov-config.json';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})
export class HomeComponent implements OnInit {

  constructor(
    public stateService: StateService,
    private seoService: SeoService,
    private router: Router
  ) {
    this.stateService.set('section', 'home');
    this.seoService.setTitle(SiteConfig.title, false);
    this.seoService.setMetaDescription(
      'Code.gov is a platform designed to improve access to the federal government’s ' +
      'custom-developed software.'
    );
  }

  ngOnInit() {
    // fixes weird issue where would start on home page scrolled down somewhat
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

  scrollToAbout() {
    let top = document.getElementById('banner-home').clientHeight;
    let offset = document.querySelector('header nav.main').clientHeight;
    let buffer = 35;
    window.scrollTo({
      top: top - offset,
      behavior: 'smooth'
    });
  }
}
