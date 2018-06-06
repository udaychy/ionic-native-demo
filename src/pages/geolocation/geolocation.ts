import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation as Location } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  public location : {lat: number, lng: number}
  constructor(
    private geolocation: Location,
    private alertCtrl: AlertController,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getLocation() {
    this.presentAlert('inside Geolocation method');
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 1000}).then((resp) => {
        this.location = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        }
        this.presentAlert(resp.coords.latitude + " " + resp.coords.latitude);
        console.log(JSON.stringify(resp));
      }).catch((error) => {
        this.presentAlert('exception occured while fetching location');
        this.presentAlert(error);
        debugger;
        console.log('Error getting location', error);
        console.log('Error getting location', JSON.stringify(error));
      });
    })
  }

  presentAlert(msg:string) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
