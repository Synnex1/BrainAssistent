import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: {title: string, description: string} = {title:"", description:""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.note.title = this.navParams.get("title");
  	this.note.description = this.navParams.get("description")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
