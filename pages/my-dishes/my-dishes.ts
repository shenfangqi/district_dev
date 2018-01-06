import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, Content, ViewController } from 'ionic-angular';
import { Home2Page } from '../../pages/home2/home2';
import { AddDishPage } from '../../pages/add-dish/add-dish';
import { DishModalPage } from '../../pages/dish-modal/dish-modal';


/**
 * Generated class for the MyDishesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-dishes',
  templateUrl: 'my-dishes.html',
})

export class MyDishesPage {

  // on ios mobile, scroll will freezing occationally
  @ViewChild(Content) content: Content
  ngOnInit() {
    if (this.platform.is('mobileweb') && this.platform.is('ios')) {
      this.content.enableJsScroll()
    }
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private platform: Platform,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) 
  {
  }

  openModal(characterNum) {
    let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
    let modal = this.modalCtrl.create(DishModalPage, obj);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDishesPage');
  }

  go_home() {
    this.navCtrl.push(Home2Page);  
  }

  go_add_dish() {
    this.navCtrl.push(AddDishPage);  
  }

  edit_dish() {
    this.navCtrl.push(AddDishPage);    
  }

  dele_dish() {
  
  }
}