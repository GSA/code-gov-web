import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ModalService {
   private modalActivation = new Subject<string>();
   modalActivated$ = this.modalActivation.asObservable();


   showModal(modalData: any) {
     this.modalActivation.next(modalData);
   }
}
