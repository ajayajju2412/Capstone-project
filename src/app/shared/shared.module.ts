import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { PasswordValidatorDirective } from './password-validator.directive';


@NgModule({
  declarations: [SignInModalComponent, SignInComponent, SignUpComponent, PasswordValidatorDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    UserModule
  ],
  exports: [
    SignInModalComponent,
    SignInComponent,
    SignUpComponent,
    PasswordValidatorDirective
  ]
})
export class SharedModule { }
