import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { CitysModalPage } from '../../pages/citys-modal/citys-modal';
import { DistsModalPage } from '../../pages/dists-modal/dists-modal';

/**
 * Generated class for the AddressModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-address-modal',
  templateUrl: 'address-modal.html',
})
export class AddressModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openCitysModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(CitysModalPage, obj);
    modal.present();
  } 

  openDistsModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(DistsModalPage, obj);
    modal.present();
  } 

}
