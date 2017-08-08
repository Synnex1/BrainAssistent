import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html',
})
export class MyLocationPage {
  lat: number = 0;
  lng: number = 0;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private geolocation: Geolocation,
              private toastCtrl: ToastController) {

  }

  public goBacktoHomescreen(){
    this.viewCtrl.dismiss();  
  }

  onLocateMe(){
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully');
          this.lat = location.coords.latitude;
          this.lng = location.coords.longitude;
        }
      )

      .catch(
        (Error) => console.log('Location could not be found!')
      );
      this.toastCtrl.create({
          message: 'Your location was detected',
          duration: 3000
        }).present();
  }

}
