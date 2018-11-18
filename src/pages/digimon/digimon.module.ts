import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { digimonPage } from './digimon';

@NgModule({
  declarations: [
    digimonPage,
  ],
  imports: [
    IonicPageModule.forChild(digimonPage),
  ],
})
export class digimonPageModule {}
