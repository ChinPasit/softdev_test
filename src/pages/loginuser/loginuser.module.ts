import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { loginuserPage } from './loginuser';

@NgModule({
  declarations: [
    loginuserPage,
  ],
  imports: [
    IonicPageModule.forChild(loginuserPage),
  ],
})
export class loginuserPageModule {}
