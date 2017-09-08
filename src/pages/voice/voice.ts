import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-voice',
  templateUrl: 'voice.html',
})
export class VoicePage {

  file: MediaObject = this.media.create('file://assets/audio/audio.mp3');

  constructor(private media: Media, private toastCtrl: ToastController) {
        
  }

  

  startRecording() {
    this.file.startRecord();

    /*this.file.onStatusUpdate.subscribe(status => {
      let toast = this.toastCtrl.create({
        message: status.toString(),
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      console.log(status)
      }); // fires when file status changes*/
    
      this.file.onSuccess.subscribe(() =>{
        let toast = this.toastCtrl.create({
          message: 'Action was successful',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
  
      this.file.onError.subscribe(error =>{
        let toast = this.toastCtrl.create({
          message: 'Action failed: ' + error,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
  }

  stopRecording() {
    this.file.stopRecord();

    this.file.onSuccess.subscribe(() =>{
      let toast = this.toastCtrl.create({
        message: 'Action was successful',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });

    this.file.onError.subscribe(error =>{
      let toast = this.toastCtrl.create({
        message: 'Action failed: ' + error,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  playRecording() {
    this.file.play();

    this.file.onSuccess.subscribe(() =>{
      let toast = this.toastCtrl.create({
        message: 'Action was successful',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });

    this.file.onError.subscribe(error =>{
      let toast = this.toastCtrl.create({
        message: 'Action failed: ' + error.toString,
        duration: 10000,
        position: 'bottom'
      });
      toast.present();
    });
  }

}
