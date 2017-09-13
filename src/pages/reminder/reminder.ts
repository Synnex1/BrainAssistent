import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Note } from '../../model/note.model';
import * as moment from 'moment';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  note: Note
  displayDate: any;
  minDate: any;
  notifyDate: any;

  constructor(public viewCtrl: ViewController,
              private navParams: NavParams,
              public platform: Platform,
              public alertCtrl: AlertController,
              private localNotifications: LocalNotifications,
              private toastCtrl: ToastController) {
    //Setting up the dateTime-Picker 
    this.displayDate = moment(new Date()).format();
    this.minDate = this.displayDate;
    this.note = navParams.get('note');
  }

  setReminder() {
    this.note.reminder = {
      id: 1,
      title: this.note.title,
      text: this.note.description,
      sound: 'file://assets/sounds/notification.mp3',
      at: new Date(Date.parse(this.displayDate))
    }
    
    this.displayToast('Reminder saved');

    this.dismissReminder();

  }

  dismissReminder(){
    this.viewCtrl.dismiss();
  }

  cancelNotifications() {
    this.localNotifications.cancelAll();
    this.note.reminder = {};
    this.displayToast('Reminder canceled');

    this.dismissReminder();
   }

  displayToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
