import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartoonPage } from './Cartoon';

@NgModule({
  declarations: [
    CartoonPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoonPage),
  ],
})
export class CartoonPageModule {}
