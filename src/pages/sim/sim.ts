import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-sim',
  templateUrl: 'sim.html',
})
export class SimPage {

  constructor(
    public navCtrl: NavController,
    private sim: Sim,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimPage');
  }

  getSimInfo(){
    this.sim.getSimInfo().then(
      (info) =>{
        console.log('Sim info: ', info);
        this.presentAlert(info.phoneNumber);
      },
      (err) =>{
        console.log('Unable to get sim info: ', err)
        this.presentAlert('Unable to get sim info: '+ err);
      } 
    );
    
    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );
    
    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
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
