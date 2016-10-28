import { Component, Input } from '@angular/core';

import { ACTIVITIES } from './';
import { RepoComponent } from '../repo';
import { TruncatePipe } from '../../../pipes/truncate';

@Component({
  selector: 'activity-list',
  styles: [require('./activity-list.style.scss')],
  template: require('./activity-list.template.html')
})

export class ActivityListComponent {
  @Input() repo: RepoComponent;
  activities = ACTIVITIES;

  constructor() {
    this.activities.forEach((activity: any) => {
      activity.time = new Date(activity.time);
    });
  }
}
