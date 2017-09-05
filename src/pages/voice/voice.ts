import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-voice',
  templateUrl: 'voice.html',
})
export class VoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoicePage');
  }

}
