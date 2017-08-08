import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html',
})
export class MyLocationPage {
  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private geolocation: Geolocation,
              private toastCtrl: ToastController) {
                
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
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
