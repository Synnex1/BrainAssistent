import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MyLocationPage } from '../my-location/my-location';
import { NoteService } from '../../services/note.service';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Note } from '../../model/note.model';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {
  note: Note;

  constructor(private noteService: NoteService,
              private navCtrl: NavController,
              private geolocation: Geolocation,
              private modalCtrl: ModalController) {
  }

  public addNewNote(value: {type: string, title: string, description: string}) {
    this.note.type = value.type;
    this.note.title = value.title;
    this.note.description = value.description;

    this.noteService.addNote(this.note);
    console.log('new note was added to the list');
    this.navCtrl.pop();    
  }

  public onOpenAddMyLocation(): void{
    //this.navCtrl.push(MyLocationPage);
    this.modalCtrl.create(MyLocationPage, {location: this.note.location}).present();
    console.log('OPENADDMYLOCATION WAS CLICKED');
  }

  
}
