import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home'; 
import { FeedbackModalPage } from '../feedback-modal/feedback-modal';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  login: User = { username: '', password: '' };
  haserror = false;

  async onLogin(form: NgForm) {



    if (form.valid) {
      //show modal form
      let obj = {
        title: `Welcome, ${this.login.username}`,
        description: 'Please wait patiently while we set up MeetNow for the first time.',
        iconClass: 'far fa-cog mn-feedback-icon rotating',
        hasCloseInteraction: true
      };
      let testModal = this.modalCtrl.create(FeedbackModalPage, obj);
      testModal.present();

      //try logging in...
      const isLogedIn = await this.userProvider.login(this.login);
      
      testModal.dismiss();

      if (isLogedIn) {
        this.navCtrl.push(HomePage, { animate: true, direction: "forward" });
      } else {
        this.haserror = true;
        this.login.password = '';
        this.login.username = '';
      }
    }
  }
}
