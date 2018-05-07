import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { NotificationPage } from '../pages/notification/notification';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Device Motion', component: DeviceMotionPage },
      { title: 'Local Notification', component: NotificationPage },
      { title: 'Contacts', component: ContactPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
