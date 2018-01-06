import { OnInit, Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform, Content } from 'ionic-angular';
import { FlavorPage } from '../../pages/flavor/flavor';
import { MenusPage } from '../../pages/menus/menus';
import { RegisterPage } from '../../pages/register/register';


@IonicPage({
  name: 'Home1Page',
  segment: 'home1-page'  
})

@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html'
})
export class Home1Page implements OnInit {
  sel_1: string = "disc";
  sel_2: string = "disc";
  sel_3: string = "disc";

  bk_1: string = "bk_off";
  bk_2: string = "bk_off";
  bk_3: string = "bk_off";

  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;

  delivery: boolean = false;
  delivery_fee: string = "";
  delivery_text: string = "";

  // on ios mobile, scroll will freezing occationally
  @ViewChild(Content) content: Content
  ngOnInit() {
    if (this.platform.is('mobileweb') && this.platform.is('ios')) {
      this.content.enableJsScroll()
    }
  }

  constructor(
    public navCtrl: NavController, 
    private platform: Platform
  ) 
  {
      this.toggle(1);
      this.page1 = true;
      this.page2 = false;
      this.page3 = false;
  }

  ionViewDidLoad() {
      this.delivery_text = "不需要送餐";
  }

  delivery_toggle() {
    console.log(this.delivery);
    if(this.delivery) {
       this.delivery_fee = "+5元";
       this.delivery_text = "需要送餐";
    } else {
       this.delivery_fee = "";
       this.delivery_text = "不需要送餐";
    }
  }

  toggle(id) {
    this.delivery = false;
    this.delivery_fee = "";
    this.delivery_text = "不需要送餐";

    if(id == 1) {         
        this.page1 = true;
        this.page2 = false;
        this.page3 = false;

        this.sel_1 = "icon-circle";
        this.sel_2 = "disc";
        this.sel_3 = "disc";

        this.bk_1 = "bk_on";
        this.bk_2 = "bk_off";
        this.bk_3 = "bk_off";
    }
    else if(id == 2) {
        this.page1 = false;
        this.page2 = true;
        this.page3 = false;

        this.sel_2 = "icon-food-1";
        this.sel_1 = "disc";
        this.sel_3 = "disc";

        this.bk_2 = "bk_on";
        this.bk_1 = "bk_off";
        this.bk_3 = "bk_off";
    }
    else if(id == 3) {
        this.page1 = false;
        this.page2 = false;
        this.page3 = true;

        this.sel_3 = "icon-cup";
        this.sel_1 = "disc";
        this.sel_2 = "disc";

        this.bk_3 = "bk_on";
        this.bk_1 = "bk_off";
        this.bk_2 = "bk_off";
    }
  }

  go_flavor() {
    this.navCtrl.push(FlavorPage);
  }

  go_menus() {
    this.navCtrl.push(MenusPage);
  }

  go_register() {
    this.navCtrl.push(RegisterPage);
  }

}
