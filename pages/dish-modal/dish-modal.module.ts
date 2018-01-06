import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishModalPage } from './dish-modal';

@NgModule({
  declarations: [
    DishModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DishModalPage),
  ],
})
export class DishModalPageModule {}
