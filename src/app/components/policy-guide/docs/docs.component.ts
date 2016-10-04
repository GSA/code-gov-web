import { Component } from '@angular/core';

@Component({
  selector: 'docs',
  styles: [require('./docs.style.scss')],
  template: require('./docs.template.html')
})
export class DocsComponent {

  constructor() {}

  ngOnInit() {
  }
}
