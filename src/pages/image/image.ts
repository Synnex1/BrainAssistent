import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

  public dismissImage(){
    this.viewCtrl.dismiss();
  }

}
