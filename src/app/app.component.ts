import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { doraemonPage } from '../pages/doraemon/doraemon';

import { CartoonPage } from '../pages/Cartoon/Cartoon';
import { pokemonPage } from '../pages/pokemon/pokemon';
import { digimonPage } from '../pages/digimon/digimon';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { loginuserPage } from '../pages/loginuser/loginuser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  page:Array<{title:string,Component:any,icon:any}>;
  @ViewChild(Nav)nav:Nav;

  constructor(platform: Platform,private menu: MenuController ,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    /*this.page=[
      { title : 'Login',Component: HomePage, icon:'contact'},
      //{ title: 'Book',Component: BookPage,icon:'book'}
    ];*/
    
  }
  titlecartoon(){
    this.nav.push(CartoonPage)
    this.menu.toggle();
  }
 
}

