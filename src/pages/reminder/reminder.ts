import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  myDate: String = new Date().toISOString();
  myNotification: string;

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

  dismissReminder(){
    this.viewCtrl.dismiss();
  }

  setReminder(myDate, myNotification){
    //return data to addNotePage ------------------------------------------------->
    //then
    this.viewCtrl.dismiss();
  }

}
