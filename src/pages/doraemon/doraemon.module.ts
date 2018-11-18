import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { doraemonPage } from './doraemon';

@NgModule({
  declarations: [
    doraemonPage,
  ],
  imports: [
    IonicPageModule.forChild(doraemonPage),
  ],
})
export class doraemonPageModule {}
