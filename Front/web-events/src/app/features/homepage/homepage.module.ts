import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListEventsComponent } from './list-events/list-events.component';
import { HomepageComponent } from './homepage.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [HomepageComponent, ListEventsComponent, EventsComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [EventsComponent],
})
export class HomepageModule {}
