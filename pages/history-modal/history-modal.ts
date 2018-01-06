import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../../pages/history/history';

/**
 * Generated class for the HistoryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history-modal',
  templateUrl: 'history-modal.html',
})
export class HistoryModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryModalPage');
  }

  go_history() {
    this.navCtrl.push(HistoryPage);  
  }

}
