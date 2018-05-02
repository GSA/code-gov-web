import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StateService } from '../../services/state';
import { SeoService } from '../../services/seo';

import * as privacy_policy from './privacy-policy.md';

/**
 * Class representing a privacy policy.
 */

@Component({
  selector: 'privacy-policy',
  styles: [require('./privacy-policy.style.scss')],
  template: require('./privacy-policy.template.html')
})

export class PrivacyPolicyComponent {

  private privacy_policy = privacy_policy;

  /**
   * Construct a PrivacyPolicyComponent.
   *
   * @constructor
   * @param {SeoService} seoService - A service for setting SEO related tags
   * @param {StateService} stateService - A service for managing the state of the site
   * @param {DomSanitizer} sanitizer - Sanitizes content from json
   */
  constructor(
    private seoService: SeoService,
    public stateService: StateService,
    private sanitizer: DomSanitizer
  ) {
    this.stateService.set('section', 'privacy-policy');
    this.seoService.setTitle('Privacy Policy', true);
    this.seoService.setMetaDescription('Learn about how Code.gov is using cookies and analytics.');
    this.seoService.setMetaRobots('Index, Follow');
  }
}
