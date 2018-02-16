import { Component, Input } from '@angular/core';
import { ExternalLinkDirective } from '../../../directives/external-link';
import { HelpWantedItem } from '../help-wanted-item.model';

@Component({
  selector: 'help-wanted-card',
  styleUrls: ['./help-wanted-card.styles.scss'],
  templateUrl: './help-wanted-card.template.html'
})

export class HelpWantedCardComponent {
  @Input() private item: HelpWantedItem;
  @Input() private mobile: string;
}
