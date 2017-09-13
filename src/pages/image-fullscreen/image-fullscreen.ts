import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-image-fullscreen',
  templateUrl: 'image-fullscreen.html',
})
export class ImageFullscreenPage {
	picture: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.picture = this.navParams.get("picture");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageFullscreenPage');
  }

  closeModal() {
  	this.viewCtrl.dismiss();
  }

}
