import { Component } from '@angular/core';
import { ViewController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  private dateDate: Date;
  private myDate: string;
  private minDate: string;
  myNotification: string;

  constructor(public viewCtrl: ViewController, public platform: Platform, public alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    //Setting up the dateTime-Picker 
    let now = new Date();
    now.setHours(now.getHours() - (now.getTimezoneOffset() / 60));
    this.dateDate = now;
    this.myDate = now.toISOString();

    this.minDate = this.myDate;

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
      at: this.myDate
    });
  }

  showMyDate() {
    console.log(this.dateDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

  
  setReminder(myDate, myNotification){
    //return data to addNotePage ------------------------------------------------->
    //then
    
    this.viewCtrl.dismiss();
  }
  
  dismissReminder(){
    this.viewCtrl.dismiss();
  }

}
