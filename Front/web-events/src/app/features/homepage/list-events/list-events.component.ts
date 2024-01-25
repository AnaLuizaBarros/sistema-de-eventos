import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent {
  private modalService = inject(NgbModal);

  openSm(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'sm' });
  }
}
