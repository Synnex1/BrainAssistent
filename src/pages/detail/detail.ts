import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: Note;
  dummyNote: Note;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NoteService) {
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
    
  }

  ionViewDidLoad() {
    console.log('Detail Note is following:');
    console.log(this.note);
  }

  deleteNote() {
  	this.noteService.removeNote(this.note);
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


  	this.navCtrl.pop();
  }
}
