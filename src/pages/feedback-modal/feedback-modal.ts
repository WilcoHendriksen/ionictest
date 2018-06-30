import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FeedbackModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-modal',
  templateUrl: 'feedback-modal.html',
})
export class FeedbackModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
  title: string = this.navParams.get('title');
  description: string = this.navParams.get('description');
  iconClass: string = this.navParams.get('iconClass');
  imageUrl: string = this.navParams.get('imageUrl');
  hasCloseInteraction: string = this.navParams.get('hasCloseInteraction');

  closeModal() {
    this.viewCtrl.dismiss();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackModalPage');
  }

}
