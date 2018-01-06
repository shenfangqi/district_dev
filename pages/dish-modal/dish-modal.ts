import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DishModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dish-modal',
  templateUrl: 'dish-modal.html',
})
export class DishModalPage {
  email: string = this.navParams.get('email');
  delivery: boolean = false;
  delivery_fee: string = "";
  delivery_text: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) 
  {
    console.log("email:"+this.email);
  }

  ionViewDidLoad() {
    this.delivery_text = "不能送餐";
  }

  delivery_toggle() {
    console.log(this.delivery);
    if(this.delivery) {
       this.delivery_fee = "+5元";
       this.delivery_text = "可以送餐";
    } else {
       this.delivery_fee = "";
       this.delivery_text = "不能送餐";
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
