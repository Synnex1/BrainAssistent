import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailPage } from '../detail/detail';
import { AddNotePage } from '../addNotePage/addNotePage';
import { NoteService } from '../../services/note.service';
import { Note } from '../../model/note.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: Note[] = [];
  searchTerm: string = '';

  constructor(public navCtrl: NavController, private noteService: NoteService) {
    
  }

  ionViewWillEnter() {
    this.setFilteredNotes();
  }

  public onAddBtnClicked(): void{
    this.navCtrl.push(AddNotePage);
  }

  public viewDetails(note): void{
    this.navCtrl.push(DetailPage, {
      note: note
    });
  }

  setFilteredNotes() {
    this.notes = this.noteService.filterNotes(this.searchTerm);
  }

}
