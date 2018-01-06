import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home1Page } from '../../pages/home1/home1';
import { Home2Page } from '../../pages/home2/home2';


/**
 * Generated class for the EntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

  goHome1() {
    this.navCtrl.push(Home1Page);
  }

  goHome2() {
    this.navCtrl.push(Home2Page);
  }
}
