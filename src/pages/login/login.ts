import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home'; 
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  login: User = { username: '', password: '' };
  haserror = false;

  async onLogin(form: NgForm) {

    if (form.valid) {
      const isLogedIn = await this.userProvider.login(this.login);
      if (isLogedIn) {
        this.navCtrl.push(HomePage, { animate: true, direction: "forward" });
        // let obj = {
        //   title: `Welcome, ${this.login.username}`,
        //   description: 'Please wait patiently while we set up MeetNow for the first time.',
        //   iconClass: 'far fa-cog mn-feedback-icon rotating',
        //   hasCloseInteraction: true
        // };
      } else {
        this.haserror = true;
        this.login.password = '';
        this.login.username = '';
      }
    }
  }
}
