import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { AddNotePage } from '../pages/addNotePage/addNotePage';
import { MyLocationPage } from '../pages/my-location/my-location';
import { ReminderPage } from '../pages/reminder/reminder';
import { ImagePage } from '../pages/image/image';
import { VoicePage } from '../pages/voice/voice';

import { NoteService } from '../services/note.service';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Camera } from '@ionic-native/camera';
import { Media, MediaObject } from '@ionic-native/media';
import { ToastController } from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    AddNotePage,
    MyLocationPage,
    ReminderPage,
    ImagePage,
    VoicePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBefatqdyh0dzJbRpnLhGEwP0l5_rV_MD0',
      libraries: ["places"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    AddNotePage,
    MyLocationPage,
    ReminderPage,
    ImagePage,
    VoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    Geolocation,
    LocalNotifications,
    Camera,
    Media,
    ToastController
  ]
})
export class AppModule {}
