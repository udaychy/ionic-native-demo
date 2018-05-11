import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibrationPage } from '../pages/vibration/vibration';
import { Vibration } from '@ionic-native/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { Geolocation as Location } from '@ionic-native/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { Camera} from '@ionic-native/camera';
import { DeviceMotion } from '@ionic-native/device-motion';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NotificationPage } from '../pages/notification/notification';
import { ContactPage } from '../pages/contact/contact';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { Contacts } from '@ionic-native/contacts';
import { Sim } from '@ionic-native/sim';
import { SimPage } from '../pages/sim/sim';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    DeviceMotionPage,
    NotificationPage,
    ContactPage,
    SimPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    DeviceMotionPage,
    NotificationPage,
    ContactPage,
    SimPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Location,
    DeviceMotion,
    Camera,
    LocalNotifications,
    Contacts,
    Sim
  ]
})
export class AppModule {}
