import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [HttpClientModule, RouterModule, HomeRoutingModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RegisterComponent, LoginComponent],
})
export class HomeModule {}
