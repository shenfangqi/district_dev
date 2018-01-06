import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { HistoryModalPage } from '../../pages/history-modal/history-modal';
import { CheckOrdersPage } from '../../pages/check-orders/check-orders';
import { Home2Page } from '../../pages/home2/home2';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  go_home() {
    this.navCtrl.push(Home2Page);
  }

  openModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(HistoryModalPage, obj);
    modal.present();
  }

  go_check_orders() {
    this.navCtrl.push(CheckOrdersPage);    
  }

}
