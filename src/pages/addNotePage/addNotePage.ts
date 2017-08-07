import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NoteService } from '../../services/note.service';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {

  constructor(private noteService: NoteService, private navCtrl: NavController,private geolocation: Geolocation) {
  }

  public addNewNote(value: {title: any, description: string }) {
    this.noteService.addNote(value);
    this.navCtrl.pop();
  }

  public onLocateUser(){
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully');
        }
        
      )
      .catch(
        (Error) => console.log('Location could not be found!')
      );
  }
}
