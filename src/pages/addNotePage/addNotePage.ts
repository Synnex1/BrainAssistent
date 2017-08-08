import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MyLocationPage } from '../my-location/my-location';
import { NoteService } from '../../services/note.service';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'addNotePage',
  templateUrl: 'addNotePage.html',
})
export class AddNotePage {
  location: {lat: number, lng: number} = {lat: 0, lng:0};

  constructor(private noteService: NoteService,
              private navCtrl: NavController,
              private geolocation: Geolocation,
              private modalCtrl: ModalController) {
  }

  public addNewNote(value: {title: any, description: string }) {
    this.noteService.addNote({title: value.title,description: value.description, location: this.location});
    console.log('new note was added to the list');
    this.navCtrl.pop();    
  }

  
  public onLocateUser(){
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully');
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
        }
        
      )
      .catch(
        (Error) => console.log('Location could not be found!')
      );
  }

  public onOpenAddMyLocation(): void{
    //this.navCtrl.push(MyLocationPage);
    this.modalCtrl.create(MyLocationPage).present();
    console.log('OPENADDMYLOCATION WAS CLICKED');
  }

  
}
