import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDishPage } from './add-dish';

@NgModule({
  declarations: [
    AddDishPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDishPage),
  ],
})
export class AddDishPageModule {}
