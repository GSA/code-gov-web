import { Component } from '@angular/core';
import { items } from './help-wanted.json';

@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html')
})

export class HelpWantedComponent {
  private items = items;

  getLanguages() {

  }
}
