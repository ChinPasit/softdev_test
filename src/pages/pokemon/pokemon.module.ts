import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pokemonPage } from './pokemon';

@NgModule({
  declarations: [
    pokemonPage,
  ],
  imports: [
    IonicPageModule.forChild(pokemonPage),
  ],
})
export class pokemonPageModule {}
