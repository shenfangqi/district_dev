import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home1Page } from '../../pages/home1/home1';
import { ProfilePage } from '../../pages/profile/profile';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  go_home1() {
    this.navCtrl.push(Home1Page);
  }

  go_profile() {
    this.navCtrl.push(ProfilePage);
  }

}
