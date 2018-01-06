import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DistsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dists-modal',
  templateUrl: 'dists-modal.html',
})
export class DistsModalPage {

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitysModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
