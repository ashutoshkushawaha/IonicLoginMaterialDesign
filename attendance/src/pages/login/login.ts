import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.presentToast();
      this.navCtrl.setRoot(HomePage);

    }else {
      this.absentToast();
    }
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User Login Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  absentToast() {
    let toast = this.toastCtrl.create({
      message: 'Invalid User Credentials!',
      duration: 3000,
      position: 'center'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
