import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { CartoonPage } from '../pages/Cartoon/Cartoon';
import { doraemonPage } from '../pages/doraemon/doraemon';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { digimonPage } from '../pages/digimon/digimon';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    CartoonPage,
    doraemonPage,
    pokemonPage,
    digimonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
