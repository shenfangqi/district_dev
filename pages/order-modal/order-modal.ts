import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Home2Page } from '../../pages/home2/home2';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OrderModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-modal',
  templateUrl: 'order-modal.html',
})
export class OrderModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderModalPage');
  }

  go_home() {
    this.navCtrl.push(Home2Page);  
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

}
