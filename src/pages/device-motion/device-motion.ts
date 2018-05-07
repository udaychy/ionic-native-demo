import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {

  public data:any;
  public subs:any;

  constructor(private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

  start(){
    var options: DeviceMotionAccelerometerOptions ={
      frequency: 500
    };

    this.subs = this.deviceMotion.watchAcceleration(options)
    .subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      this.data= acceleration;
    });
  }
  
  stop(){
    this.subs.unsubscribe();
  }
  
}
