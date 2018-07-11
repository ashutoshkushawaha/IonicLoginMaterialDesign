import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 // @ViewChild(Nav) nav: Nav;
  //@ViewChild('content') nav: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      alert("admin");
      this.navCtrl.setRoot(HomePage);

    }else {
      alert("Invalid credentials");
    }
  }
  
}
