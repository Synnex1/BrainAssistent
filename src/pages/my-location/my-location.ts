import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html',
})
export class MyLocationPage {
  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  public goBacktoHomescreen(){
    this.viewCtrl.dismiss();  
  }

}
