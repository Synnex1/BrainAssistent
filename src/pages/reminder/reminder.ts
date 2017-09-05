import { Component } from '@angular/core';
import { ViewController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  myDate: String = new Date().toISOString();
  myNotification: string;

  constructor(public viewCtrl: ViewController, public platform: Platform, public alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    this.platform.ready().then((rdy => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.data);

        let alert = this.alertCtrl.create({
          title: notification.title,
          subTitle: json.mydata
        });
        alert.present();
      })
    }))
  }



  scheduleNotification() {
    this.localNotifications.schedule({
      title: 'Attention',
      text: 'Notification',
      at: new Date(new Date().getTime() + 5 * 1000),
      data: { mydata: 'My secret Message'}
    });
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
