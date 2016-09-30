import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})
export class HomeComponent {
  url = 'https://pif.gov';

  constructor() {}

  ngOnInit() {
  }
}
