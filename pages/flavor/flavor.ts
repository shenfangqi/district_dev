import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Home1Page } from '../../pages/home1/home1';

/**
 * Generated class for the FlavorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
})
@Component({
  selector: 'page-flavor',
  templateUrl: 'flavor.html',
})
export class FlavorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlavorPage');
  }

  go_home() {
    this.navCtrl.push(Home1Page);
  }

}
