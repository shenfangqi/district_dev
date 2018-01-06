import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Home2Page } from '../../pages/home2/home2';
import { OrderdetailModalPage } from '../../pages/orderdetail-modal/orderdetail-modal';
import { HistoryPage } from '../../pages/history/history';

/**
 * Generated class for the CheckOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-orders',
  templateUrl: 'check-orders.html',
})
export class CheckOrdersPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOrdersPage');
  }

  go_home() {
    this.navCtrl.push(Home2Page);
  }

  go_history() {
    this.navCtrl.push(HistoryPage);    
  }

  openModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(OrderdetailModalPage, obj);
    modal.present();
  }
}
