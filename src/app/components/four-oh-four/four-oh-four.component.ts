import { Component } from '@angular/core';
import { StateService } from '../../services/state';

@Component({
  selector: 'four-oh-four',
  styles: [require('./four-oh-four.style.scss')],
  template: require('./four-oh-four.template.html')
})

export class FourOhFourComponent {
  constructor(public stateService: StateService) {
    this.stateService.set('section', 'four-oh-four');
  }
}
