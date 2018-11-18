import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { DetailPage } from '../detail/detail';
import { CartoonPage } from '../Cartoon/Cartoon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id:any;
  pass:any;
  constructor(public navCtrl: NavController) {

  }
next(){
  if(this.id=="admin"&&this.pass=="1234"){
      this.navCtrl.push(CartoonPage)
  }
  else {
    alert("Username and Paseeword Error !!!");
  }
}

}
