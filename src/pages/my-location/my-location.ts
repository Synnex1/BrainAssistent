import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html',
})
export class MyLocationPage {
  lat: number = 52.2716;
  lng: number = 8.0443;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private geolocation: Geolocation,
              private toastCtrl: ToastController) {

  }

  public dismissLocation(){
    this.viewCtrl.dismiss();  
  }

  public saveLocation(){
    //return Location coords ------------------------------------------------------->
    //exit Modal View

  }

  public onLocateMe(){
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
