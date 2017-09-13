import { Component } from '@angular/core';
import { MyLocationPage } from '../my-location/my-location';
import { ReminderPage } from '../reminder/reminder';

import { NoteService } from '../../services/note.service';
import { NavController, ModalController } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {
  note: Note = new Note();
  base64Image: string = '';
  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor(private noteService: NoteService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private actionSheetCtrl: ActionSheetController,
              private localNotification: LocalNotifications,
              private camera: Camera,
              private photoViewer: PhotoViewer,
              private imageViewerCtrl: ImageViewerController) {
  }

  //The note will be safed if the title is set
  public addNewNote() {
    if(this.note.title == ""){
      let toast = this.toastCtrl.create({
        message: 'Title has to be set!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else{
      if(this.note.reminder) {
        this.localNotification.schedule(this.note.reminder);
      }
      this.noteService.addNote(this.note);
      this.navCtrl.pop();   
    }
     
  }

  public onOpenAddMyLocation(): void{
    let myLocationModal = this.modalCtrl.create(MyLocationPage);
    myLocationModal.present();

    // If Location was set it will be written in the attribute
    myLocationModal.onDidDismiss(data =>{
      if(data != null){
        var setLocation = {lat:0, lng: 0};
        setLocation.lat = data.lat;
        setLocation.lng = data.lng;
        this.note.location = setLocation;
      } else{
        this.note.location = null;
      }
    })
  }

  public deleteLocation(): void{
    this.note.location = null;
  }

  public onOpenAddReminder(): void{
    let reminderModal = this.modalCtrl.create(ReminderPage, {note: this.note});
    reminderModal.present();

    // date will be set in the attribute
    reminderModal.onDidDismiss(data =>{
      if(data != null) {
        var dateString = data;
        this.note.reminder = dateString;
      }
    })
  }

  public onOpenAddImage() {

   let actionSheet = this.actionSheetCtrl.create({
     title: 'Add Picture',
     buttons: [
       {
         text: 'Take Image',
         handler: () => {
           this.options.sourceType = this.camera.PictureSourceType.CAMERA;
           this.getPicture(this.options);
         }
       },
       {
         text: 'Select Image',
         handler: () => {
           this.options.sourceType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
           this.getPicture(this.options);
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
         }
       }
      ]
    });

    actionSheet.present();
  }

  getPicture(options: CameraOptions) {
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.note.pictures.push(this.base64Image);
    }, (err) => {
      console.log('could not get access to picture');
    });
  }

  showPhotoFullscreen(picture) {
    const imageViewer = this.imageViewerCtrl.create(picture)
    imageViewer.present();
  }

  public onOpenAddColor(): void{
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Set Color',
      buttons: [
        {
          text: 'Red',
          handler: () => {
            this.note.color = '#f95e5e';
          }
        },
        {
          text: 'Blue',
          handler: () => {
            this.note.color = '#4286f4';
          }
        },
        {
          text: 'Yellow',
          handler: () => {
            this.note.color = '#fdff89';
          }
        },
        {
          text: 'Green',
          handler: () => {
            this.note.color = '#56ef81';
          }
        },
        {
          text: 'Orange',
          handler: () => {
            this.note.color = '#ffb363';
          }
        },
        {
          text: 'Pink',
          handler: () => {
            this.note.color = '#f794eb';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.note.color = '';
          }
        }
      ]
    });
  actionSheet.present();
  }

  
}
