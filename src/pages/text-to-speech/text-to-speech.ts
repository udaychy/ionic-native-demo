import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    let options: TTSOptions = {
      text: "Hello Uday. I am groot",
      locale: "en-US"
    }

    this.tts.speak(options)
    .then(() => console.log('Successfully told Hello world'))
    .catch((reason: any) => console.log(reason));
  }

}
