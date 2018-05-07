import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  result: string;

  constructor(private localNotifications: LocalNotifications) {
    this.localNotifications.on('click').subscribe((notification)=> {
      console.log(notification)
      var data = JSON.parse(notification.data)
      this.result = data.msg;
      alert('Notification received');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  getNotification(){
    this.localNotifications.schedule({
      id: 1,
      title: 'My first notification',
      text: 'My first notification',
      data: { msg : "My first notification" }
    });
  }
}
