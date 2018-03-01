import { Angulartics2 } from 'angulartics2';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ErrorModalService } from '../../services/error-modal';

@Component({
  selector: 'error-modal',
  styles: [require('./error-modal.style.scss')],
  template: require('./error-modal.template.html')
})

export class ErrorModalComponent implements OnDestroy {
  description: string;
  title: string;
  url: string = 'https://github.com/GSA/code-gov-web/issues/new?title=New Issue';
  visible: boolean;
  modalSub: Subscription;

  constructor(
    private angulartics2: Angulartics2,
    private errorModalService: ErrorModalService
  ) {
    this.modalSub = errorModalService.modalActivated$.subscribe(
      modal => {
        this.visible = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.modalSub) this.modalSub.unsubscribe();
  }

  close() {
    this.angulartics2.eventTrack.next({ action: 'Close', properties: { category: 'ErrorModal' }});
    this.visible = false;
  }
}
