import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailPage } from '../detail/detail';
import { AddNotePage } from '../addNotePage/addNotePage';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: {title: string, description: string}[] = [];

  constructor(public navCtrl: NavController, private noteService: NoteService) {
    
  }

  ionViewWillEnter() {
    this.notes = this.noteService.getNotes();
  }

  public onAddBtnClicked(): void{
    this.navCtrl.push(AddNotePage)
  }

  public viewDetails(noteId): void{
    this.navCtrl.push(DetailPage)
  }
}
