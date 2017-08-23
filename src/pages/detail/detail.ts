import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Note } from '../../model/note.model';
import { NoteService } from '../../services/note.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: Note;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NoteService) {
  	this.note = this.navParams.get("note");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  deleteNote() {
  	this.noteService.removeNote(this.note);
  	this.navCtrl.pop();
  }

  editNote() {
  	this.navCtrl.pop();
  }
}
