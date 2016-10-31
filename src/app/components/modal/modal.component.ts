import { Component } from '@angular/core';

import { ModalService } from '../../services/modal';

@Component({
  selector: 'modal',
  styles: [require('./modal.style.scss')],
  template: require('./modal.template.html')
})

export class ModalComponent {
  description: string;
  title: string;
  url: string;
  visible: boolean;

  constructor(private modalService: ModalService) {
    modalService.modalActivated$.subscribe(
      modal => {
        this.description = modal['description'];
        this.title = modal['title'];
        this.url = modal['url'];
        this.visible = true;
      }
    );
  }

  close() {
    this.visible = false;
  }
}
