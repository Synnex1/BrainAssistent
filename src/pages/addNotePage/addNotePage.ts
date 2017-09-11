import { Component } from '@angular/core';
import { MyLocationPage } from '../my-location/my-location';
import { ReminderPage } from '../reminder/reminder';
import { ImagePage } from '../image/image';

import { NoteService } from '../../services/note.service';
import { NavController, ModalController } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {
  note: Note = new Note();

  constructor(private noteService: NoteService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private locNotific: LocalNotifications,
              private toastCtrl: ToastController,
              private actionSheetCtrl: ActionSheetController) {
  }

  public addNewNote() {
    if(this.note.title == ""){
      let toast = this.toastCtrl.create({
        message: 'Title has to be set!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else{
      this.noteService.addNote(this.note);
      console.log('new note was added to the list');
      console.log(this.note);
      this.navCtrl.pop();   
    }
     
  }


  public ionViewWillEnter() {
    //update List with the set items ----------------------------------------------->
    //e.g. unhide hidden items
    console.log(this.note);
  }

  public onOpenAddMyLocation(): void{
    let myLocationModal = this.modalCtrl.create(MyLocationPage);
    myLocationModal.present();
    console.log('OPENADDMYLOCATION WAS CLICKED');

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
    let reminderModal = this.modalCtrl.create(ReminderPage);
    reminderModal.present();
    console.log('OPENADDREMINDER WAS CLICKED');

    reminderModal.onDidDismiss(data =>{
      if(data != null) {
        var dateString = data;
        this.note.reminder = dateString;
      }
    })
  }

  public onOpenAddImage(): void{
    this.modalCtrl.create(ImagePage, {
      note: this.note
    }).present();
    console.log('OPENADDIMAGE WAS CLICKED');
  }

  public onOpenAddColor(): void{
    // Pop-up with several colors to select ------------------------------------------>
    console.log('OPENADDCOLOR WAS CLICKED');
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
