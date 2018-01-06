import { OnInit, Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Platform, NavParams, Content } from 'ionic-angular';
import { MyDishesPage } from '../../pages/my-dishes/my-dishes';
import { DishModalPage } from '../../pages/dish-modal/dish-modal';
import { OrderModalPage } from '../../pages/order-modal/order-modal';
import { CheckOrdersPage } from '../../pages/check-orders/check-orders';
import { HistoryPage } from '../../pages/history/history';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'Home2Page',
  segment: 'home2-page'  
})

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  // on ios mobile, scroll will freezing occationally
  @ViewChild(Content) content: Content
  ngOnInit() {
    if (this.platform.is('mobileweb') && this.platform.is('ios')) {
      this.content.enableJsScroll()
    }
  }

  constructor(
    public navCtrl: NavController, 
    private platform: Platform,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) 
  {
  }

  openDishModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(DishModalPage, obj);
    modal.present();
  }

  openOrderModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(OrderModalPage, obj);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '完成订单?',
      message: '请确定已经将餐点送到订餐人手上,系统将会给订餐人发送确定消息',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  go_mydishes() {
    this.navCtrl.push(MyDishesPage);  
  }

  go_check_orders() {
    this.navCtrl.push(CheckOrdersPage);    
  }

  go_history() {
    this.navCtrl.push(HistoryPage);    
  }
}
