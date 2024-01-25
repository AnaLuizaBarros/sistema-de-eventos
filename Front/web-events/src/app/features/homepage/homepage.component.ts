import { Component } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  user: string = 'Ana';
  constructor(public refModal: NgbModal) {}

  test(modal: string) {
    const modalRef = this.refModal.open(EventsComponent, { centered: true });
    modalRef.componentInstance.ModalType = modal;
  }
}
