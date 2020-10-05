import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
