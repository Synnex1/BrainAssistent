import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AddNotePage } from '../addNotePage/addNotePage';
import { NoteService } from '../../services/note.service';
import { Note } from '../../model/note.model';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: Note[] = [];
  searchTerm: string = '';
  type: string = '';

  constructor(public navCtrl: NavController, private noteService: NoteService, public actionSheetCtrl: ActionSheetController) {
    noteService.loadNotes().then((notes) => {
      this.notes = notes;
    })
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
    this.notes = this.noteService.filterNotes(this.searchTerm, this.type);
  }

  filterNotesByType() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter',
      buttons: [
        {
          text: 'Reminder',
          handler: () => {
            this.type = 'Reminder'
            this.setFilteredNotes();
          }
        },
        {
          text: 'Picture',
          handler: () => {
            this.type = 'Picture'
            this.setFilteredNotes();  
          }
        },
        {
          text: 'Place',
          handler:() => {
            this.type = 'Place'
            this.setFilteredNotes();
          }
        },
        {
          text: 'Important',
          handler: () => {
            this.type = 'Important'
            this.setFilteredNotes();
          }
        },
        {
          text: 'Zurücksetzen',
          role: 'cancel',
          handler: () => {
            this.type = '';
            this.setFilteredNotes();
          }
        }
      ]
    });

  actionSheet.present();
  }

}
