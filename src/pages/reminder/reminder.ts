import { Component } from '@angular/core';
import { ViewController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  displayDate: any;
  minDate: any;
  notifyDate: any;
  notifications: any[] = [];

  constructor(public viewCtrl: ViewController, public platform: Platform, public alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    //Setting up the dateTime-Picker 
    this.displayDate = moment(new Date()).format();
    this.minDate = this.displayDate;
    /*
    this.platform.ready().then((rdy => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.data);

        let alert = this.alertCtrl.create({
          title: notification.title,
          subTitle: json.mydata
        });
        alert.present();
      })
    }))*/
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Notification',
      sound: 'file://assets/sounds/notification.mp3',
      at: new Date(Date.parse(this.displayDate))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

  
  dismissReminder(){
    this.viewCtrl.dismiss();
  }

}
