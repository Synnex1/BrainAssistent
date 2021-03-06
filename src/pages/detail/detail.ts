import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { NoteService } from '../../services/note.service';
import { ActionSheetController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { ImageFullscreenPage } from '../image-fullscreen/image-fullscreen';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: Note;
  dummyNote: Note;
  myLocation: {lat: number, lng: number};
  reminderDateString: any = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public noteService: NoteService,
              public actionSheetCtrl: ActionSheetController,
              public geolocation: Geolocation,
              private launchNavigator: LaunchNavigator,
              private modalCtrl: ModalController,
              private localNotifications: LocalNotifications) {
    
    this.note = this.navParams.get("note");
    
    /* Initialise the dummyNote which will be saved if Save Button will be clicked */
    this.dummyNote = {type: "", title: "", description: "", location: {lat: 0, lng: 0} , pictures: [],
    reminder: "", color: ""};

    this.dummyNote.title = this.note.title;
    this.dummyNote.description = this.note.description;
    this.dummyNote.type = this.note.type;
    this.dummyNote.location = this.note.location;
    this.dummyNote.pictures = this.note.pictures;
    this.dummyNote.color = this.note.color;
    this.dummyNote.reminder = this.note.reminder;
    if(this.dummyNote.reminder) {
      this.reminderDateString = moment(this.dummyNote.reminder.at).format();  
    }
    
  }

  deleteNote() {
  	this.noteService.removeNote(this.note);
    this.localNotifications.cancelAll();
  	this.navCtrl.pop();
  }

  editNote() {
    this.note.title = this.dummyNote.title;
    this.note.description = this.dummyNote.description;
    this.note.type = this.dummyNote.type;
    this.note.location = this.dummyNote.location;
    this.note.pictures = this.dummyNote.pictures;
    this.note.color = this.dummyNote.color;
    this.note.reminder = this.dummyNote.reminder;

    this.noteService.saveNotes();
  	this.navCtrl.pop();
  }

  // User will be asked which application to start the navigation to target
  // then the application will start 
  // Startpoint (current position) , target (note.location)
  public navigateToTarget() {  
    this.launchNavigator.navigate([this.note.location.lat, this.note.location.lng])
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }

  openFullscreenImageModal(picture) {
    let fullscreenImageModal = this.modalCtrl.create(ImageFullscreenPage, {picture: picture});
    fullscreenImageModal.present();
  }

  showDate() {
    return moment(this.dummyNote.reminder.at).format();
  }

  public editColor(): void{
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Set Color',
      buttons: [
        {
          text: 'Red',
          handler: () => {
            this.dummyNote.color = '#f95e5e';
          }
        },
        {
          text: 'Blue',
          handler: () => {
            this.dummyNote.color = '#4286f4';
          }
        },
        {
          text: 'Yellow',
          handler: () => {
            this.dummyNote.color = '#fdff89';
          }
        },
        {
          text: 'Green',
          handler: () => {
            this.dummyNote.color = '#56ef81';
          }
        },
        {
          text: 'Orange',
          handler: () => {
            this.dummyNote.color = '#ffb363';
          }
        },
        {
          text: 'Pink',
          handler: () => {
            this.dummyNote.color = '#f794eb';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.dummyNote.color = '';
          }
        }
      ]
    });
  actionSheet.present();
  }
}
