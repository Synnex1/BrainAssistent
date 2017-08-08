import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MyLocationPage } from '../my-location/my-location';
import { ReminderPage } from '../reminder/reminder';
import { ImagePage } from '../image/image';

import { NoteService } from '../../services/note.service';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Note } from '../../model/note.model';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {
  note: Note = new Note();

  constructor(private noteService: NoteService,
              private navCtrl: NavController,
              private geolocation: Geolocation,
              private modalCtrl: ModalController,
              private locNotific: LocalNotifications) {
  }

  public addNewNote() {
    this.noteService.addNote(this.note);
    console.log('new note was added to the list');
    this.navCtrl.pop();    
  }

  public ionViewWillEnter() {
    //update List with the set items ----------------------------------------------->
    //e.g. unhide hidden items
  }

  public onOpenAddMyLocation(): void{
    this.modalCtrl.create(MyLocationPage, {location: this.note.location}).present();
    console.log('OPENADDMYLOCATION WAS CLICKED');
  }

  public onOpenAddReminder(): void{
    this.modalCtrl.create(ReminderPage).present();
    console.log('OPENADDREMINDER WAS CLICKED');
  }

  public onOpenAddImage(): void{
    this.modalCtrl.create(ImagePage).present();
    console.log('OPENADDIMAGE WAS CLICKED');
  }

  public onOpenAddColor(): void{
    // Pop-up with several colors to select ------------------------------------------>
    console.log('OPENADDCOLOR WAS CLICKED');
  }

  public onOpenAddVoice(): void{
    // Pop-up with button to record your voice --------------------------------------->
    console.log('OPENADDVOICE WAS CLICKED');
  }
  
}
