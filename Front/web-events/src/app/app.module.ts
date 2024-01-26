import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './features/homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './core/layout/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
