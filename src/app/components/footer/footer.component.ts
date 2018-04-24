import { Component, Input } from '@angular/core';

import { content} from '../../../../config/code-gov-config.json';

@Component({
  selector: 'codedotgov-footer',
  template: require('./footer.template.html')
})
export class FooterComponent {

  @Input() color: string;
  private content = content;

  constructor() { }

}
