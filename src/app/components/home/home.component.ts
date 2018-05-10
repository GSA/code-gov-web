import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { SeoService } from '../../services/seo';
import { StateService } from '../../services/state';
import { toAbsoluteUrl, toRouterLink, routifyLinks } from '../../utils/urls';
import { content, images, title } from '../../../../config/code-gov-config.json';

interface AboutItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface Link {
  view_project: string;
  go_to_repo: string;
}

interface FeaturedProject {
  short_name: string;
  verbose_name: string;
  author: string;
  description: string;
  image: string;
  links: Link[];
}

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})
export class HomeComponent implements OnInit, AfterViewInit {

  private backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  private content = content;
  private featured: FeaturedProject[];
  private aboutItems: AboutItem[];

  constructor(
    public stateService: StateService,
    private sanitizer: DomSanitizer,
    private seoService: SeoService,
    private router: Router
  ) {
    this.stateService.set('section', 'home');
    this.seoService.setTitle(title, false);
    this.seoService.setMetaDescription(
      'Code.gov is a platform designed to improve access to the federal government’s ' +
      'custom-developed software.'
    );

    this.aboutItems = content.home.about.map(aboutItem => {
      aboutItem.image = toAbsoluteUrl(aboutItem.image);
      return aboutItem;
    });

    this.featured = content.home.featured.map(featuredProject => {
      featuredProject.image = toAbsoluteUrl(featuredProject.image);
      featuredProject.links = routifyLinks(featuredProject.links);
      return featuredProject;
    });

  }

  ngOnInit(): void {
    // fixes weird issue where would start on home page scrolled down somewhat
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    /*
      fixes weird issue where would start on home page scrolled down somewhat
      This is called each time the use switches to the home page.
    */
    window.scrollTo(0, 0);
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
