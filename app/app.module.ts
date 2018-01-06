import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';

import { EntryPage } from '../pages/entry/entry';
import { Home1Page } from '../pages/home1/home1';
import { Home2Page } from '../pages/home2/home2';

import { FlavorPage } from '../pages/flavor/flavor';
import { MenusPage } from '../pages/menus/menus';
import { MyDishesPage } from '../pages/my-dishes/my-dishes';
import { AddDishPage } from '../pages/add-dish/add-dish';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';

import { DishModalPage } from '../pages/dish-modal/dish-modal';
import { OrderModalPage } from '../pages/order-modal/order-modal';
import { AddressModalPage } from '../pages/address-modal/address-modal';
import { CitysModalPage } from '../pages/citys-modal/citys-modal';
import { DistsModalPage } from '../pages/dists-modal/dists-modal';
import { OrderdetailModalPage } from '../pages/orderdetail-modal/orderdetail-modal';
import { HistoryModalPage } from '../pages/history-modal/history-modal';

import { CheckOrdersPage } from '../pages/check-orders/check-orders';


@NgModule({
  declarations: [
    MyApp,
    EntryPage,
    Home1Page,
    Home2Page,
    FlavorPage,
    MenusPage,
    MyDishesPage,
    AddDishPage,
    HistoryPage,
    DishModalPage,
    OrderModalPage,
    CheckOrdersPage,
    AddressModalPage,
    CitysModalPage,
    RegisterPage,
    DistsModalPage,
    OrderdetailModalPage,
    HistoryModalPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EntryPage,
    Home1Page,
    Home2Page,
    FlavorPage,
    MenusPage,
    MyDishesPage,
    AddDishPage,
    HistoryPage,
    DishModalPage,
    OrderModalPage,
    CheckOrdersPage,
    AddressModalPage,
    CitysModalPage,
    RegisterPage,
    DistsModalPage,
    OrderdetailModalPage,
    HistoryModalPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
