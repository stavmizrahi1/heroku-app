import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { LoginAsGuestModule } from '../login-as-guest/login-as-guest.module';
import { SignupModule } from '../signup/signup.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    LoginAsGuestModule,
    SignupModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthTabsModule { }
