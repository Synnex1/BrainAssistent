import { Component } from '@angular/core';
import { ViewController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  displayDate: any;
  minDate: any;
  notifyDate: any;
  notifications: any[] = [];

  constructor(public viewCtrl: ViewController,
              public platform: Platform,
              public alertCtrl: AlertController,
              private localNotifications: LocalNotifications,
              private toastCtrl: ToastController) {
    //Setting up the dateTime-Picker 
    this.displayDate = moment(new Date()).format();
    this.minDate = this.displayDate;
  }

  setReminder() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Notification',
      sound: 'file://assets/sounds/notification.mp3',
      at: new Date(Date.parse(this.displayDate))
    });
    
    let toast = this.toastCtrl.create({
      message: 'Reminder was set',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

    this.viewCtrl.dismiss();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

  dismissReminder(){
    this.viewCtrl.dismiss();
  }

}
