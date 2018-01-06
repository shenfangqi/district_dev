import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderdetailModalPage } from './orderdetail-modal';

@NgModule({
  declarations: [
    OrderdetailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderdetailModalPage),
  ],
})
export class OrderdetailModalPageModule {}
