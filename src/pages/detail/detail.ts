import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Note } from '../../model/note.model';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: Note;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.note = this.navParams.get("note");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
