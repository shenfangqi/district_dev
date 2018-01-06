import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlavorPage } from './flavor';

@NgModule({
  declarations: [
    FlavorPage,
  ],
  imports: [
    IonicPageModule.forChild(FlavorPage),
  ],
})
export class FlavorPageModule {}
