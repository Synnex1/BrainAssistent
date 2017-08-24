import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  photos: any = [];
  base64Image: string = '';
  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public viewCtrl: ViewController, public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

  dismissImage(){
    this.viewCtrl.dismiss();
  }

  getPictureFromCamera() {
    this.options.sourceType = this.camera.PictureSourceType.CAMERA;
    this.getPicture(this.options);
  }

  getPictureFromAlbum() {
    this.options.sourceType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
    this.getPicture(this.options);
  }

  getPicture(options: CameraOptions) {
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
    }, (err) => {
      console.log('Photo wurde net genommen');
    });
  }

}
