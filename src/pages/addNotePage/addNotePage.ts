import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NoteService } from '../../services/note.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {

  constructor(private noteService: NoteService, private navCtrl: NavController) {
  }

  public addNewNote(value: {title: any, description: string }) {
    this.noteService.addNote(value);
    this.navCtrl.pop();
  }

}
