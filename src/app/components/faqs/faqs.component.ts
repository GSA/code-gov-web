import { Component } from '@angular/core';

/**
 * Class representing faqs.
 */

@Component({
  selector: 'faqs',
  styles: [require('./faqs.styles.scss')],
  template: require('./faqs.template.html'),
})

export class FaqsComponent {
  /**
   * Get the offset of the app navigation header so we scroll down to the about
   * section and the header is flush against the section.
   */
  getAboutOffset() {
    return document.querySelector('#about').clientHeight + 30;
  }
}
