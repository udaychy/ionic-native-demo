import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  public location : {lat: number, lng: number}
  constructor(private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getGeoLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location={
        lat : resp.coords.latitude,
        lng : resp.coords.longitude
      }
      console.log(JSON.stringify(resp));
     }).catch((error) => {
       debugger;
       console.log('Error getting location', error);
       console.log('Error getting location', JSON.stringify(error));
     });
  }

}
