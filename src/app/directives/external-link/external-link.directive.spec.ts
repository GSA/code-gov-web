import { Component, Directive } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ExternalLinkDirective } from './external-link.directive';
import { ModalService } from '../../services/modal';


describe('ExternalLinkDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLinkDirective, TestComponent ],
      providers: [{provide: ModalService, useClass: mockModalService}]
    });

    this.fixture = TestBed.createComponent(TestComponent);
    this.fixture.detectChanges();
  });

  it('should trigger the ModalService when an external link is quicked', () => {
    let modalService = TestBed.get(ModalService);
    spyOn(modalService, 'showModal');
    this.fixture.debugElement.nativeElement.querySelector('#ext-link').click();

    expect(modalService.showModal).toHaveBeenCalled();
  });

  it('should do nothing when a .gov is clicked', () => {
    let modalService = TestBed.get(ModalService);
    spyOn(modalService, 'showModal');
    this.fixture.debugElement.nativeElement.querySelector('#gov-link').click();

    expect(modalService.showModal).not.toHaveBeenCalled();
  });

  it('should do nothing when a .mil is clicked', () => {
    let modalService = TestBed.get(ModalService);
    spyOn(modalService, 'showModal');
    this.fixture.debugElement.nativeElement.querySelector('#mil-link').click();

    expect(modalService.showModal).not.toHaveBeenCalled();
  });
});

@Component({
    selector: 'test',
    template: `
      <a external-link id="gov-link" href="https://code.gov" target="_blank">Code.gov</a>
      <a external-link id="mil-link" href="https://code.mil" target="_blank">Code.mil</a>
      <a external-link id="ext-link" href="https://github.com" target="_blank">GitHub</a>
    `
})

class TestComponent {
}

class mockModalService {
  showModal(data: any) {
    return Observable.of({});
  }
}
