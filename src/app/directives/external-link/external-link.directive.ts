import { Directive, ElementRef, Output, Renderer } from '@angular/core';
import { ModalService } from '../../services/modal';

@Directive({
  selector: '[external-link]',
  host: {
    '(click)': 'onClick($event)'
  }
})

export class ExternalLinkDirective {
  modalContent: Object;

  constructor(private el: ElementRef, private modalService: ModalService) {
    this.modalContent = {
      description: 'But you probably knew that already.',
      description2: 'Continue to the link below:',
      title: 'You are now leaving Code.gov',
      url: ''
    };
  }

  onClick(event: any) {
    event.preventDefault();
    this.modalContent['url'] = this.el.nativeElement.getAttribute('href');
    this.modalService.showModal(this.modalContent);
  }
}
