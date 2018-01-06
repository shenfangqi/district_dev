import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Home1Page } from '../../pages/home1/home1';
import { RegisterPage } from '../../pages/register/register';
import { AddressModalPage } from '../../pages/address-modal/address-modal';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  go_home1() {
    this.navCtrl.push(Home1Page);
  }

  go_register() {
    this.navCtrl.push(RegisterPage);
  }

  openAddressModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(AddressModalPage, obj);
    modal.present();
  }

}
