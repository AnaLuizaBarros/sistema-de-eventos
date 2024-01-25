import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @Input() ModalType!: string;
  constructor(public activeModal: NgbActiveModal) {
    console.log(this.ModalType);
  }

  ngOnInit(): void {
    console.log(this.ModalType);
  }
  close() {
    this.activeModal.dismiss();
  }
}
