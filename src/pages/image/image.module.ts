import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagePage } from './image';

@NgModule({
  declarations: [
    ImagePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagePage),
  ],
  exports: [
    ImagePage
  ]
})
export class ImagePageModule {}
