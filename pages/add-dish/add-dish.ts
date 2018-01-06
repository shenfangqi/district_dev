import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MyDishesPage } from '../../pages/my-dishes/my-dishes';

/**
 * Generated class for the AddDishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-dish',
  templateUrl: 'add-dish.html',
})
export class AddDishPage {
  fakeurl:string = "assets/images/onnsen.jpg";

  constructor(
    public navCtrl: NavController, 
    private platform: Platform, 
    public navParams: NavParams,
    private camera: Camera
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDishPage');
  }

  fileUpload(aa) {
    this.readURL(aa.srcElement);
  }
 
  readURL(input) {
    let myobj = this;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log(e.target["result"]);
        myobj.fakeurl = e.target["result"];
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  go_menus() {
    this.navCtrl.push(MyDishesPage);
  }

}
